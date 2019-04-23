<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>员工名称 &nbsp;&nbsp;<Input v-model="keyword" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                </div>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-b-hover" @click="searchStaff">查询</Button>
                <Button class="btn btn-b-hover" @click="modalSet(1)">新增</Button>
                <Button class="btn btn-b-hover" @click="modalSet(2)">编辑</Button>
                <Button class="btn btn-b-hover" @click="changeMemStatus(1)" v-if="shopStaffDto.shopStatus !== 1">启用</Button>
                <Button class="btn btn-b-hover" @click="changeMemStatus(2)"  v-if="shopStaffDto.shopStatus === 1">禁用</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData" @on-row-click="choiceUser" :highlight-row="true"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total" :current="current" @on-change="changePage"></Page></div>
        </div>
        <!--编辑员工信息模态框-->
        <Modal
                v-model="isEditMem"
                :footer-hide="true"
                :styles="{top: '30%'}">
            <div class="staff-setting">
                <p v-if="flag === 1">新增</p>
                <p v-if="flag === 2">编辑</p>
                <p>父级账户&nbsp;&nbsp;
                    <Select v-model="shopStaffDto.parentId" style="width:75%" :clearable="true">
                       <Option v-for="item in userSelect" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>选择账户&nbsp;&nbsp;
                    <Select v-model="shopStaffDto.userId" style="width:75%">
                        <Option v-for="item in userSelect" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>店铺角色&nbsp;&nbsp;&nbsp;<Input v-model="shopStaffDto.roleName"  placeholder="输入角色，如：店长、员工" style="width: 75%" /></p>
                <p class="tips">角色会在前端显示，收益根据会员等级，在会员列表设置</p>
                <p>核销权限&nbsp;&nbsp;
                    <i-switch v-model="verifyPower" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                    </i-switch>
                </p>
                <p class="tips">会员定制商品，用来核销定制成功的订单</p>
                <div class="level-btn"><Button class="btn btn-blue" @click="editShopMem">保存</Button></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                shopId: null,
                pageNo: 0,
                pageNo1: 0,
                total: 0,
                current:1,
                tableData: [],
                keyword: '',
                userList: [],    //获取会员列表
                userSelect: [],
                verifyPower: false,
                staffId: null,
                shopStaffDto: {
                    parentId: null,
                    userId: null,
                    shopId: this.$route.query.shopId,
                    roleName: '',
                    verifyPower: null,   //1-有核销权限  0-无
                },

                phone: null,
                level: 1,
                levelList: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '普通会员',
                        label: '普通会员'
                    },
                    {
                        value: '百草品客',
                        label: '百草品客'
                    },
                    {
                        value: '百草创客',
                        label: '百草创客'
                    },
                    {
                        value: '健康大使',
                        label: '股东'
                    }
                ],
                start: false,
                isEditMem: false,
                flag: null, // 1-新增  2-编辑
                table: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 60
                    },
                    {
                        title: '员工名称',
                        align: 'center',
                        key: 'name'
                    },
                    {
                        title: '手机号码',
                        align: 'center',
                        key: 'phone'
                    },
                    {
                        title: '角色',
                        align: 'center',
                        key: 'roleName'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'shopStatus',
                        render: (h,params) => {
                            return h('div', [
                                h('p', {
                                    style: {color: params.row.shopStatus === 2? 'red' : '#444'}
                                },params.row.shopStatus === 1 ? '在职': (params.row.shopStatus === 2 ? '停职': '离职'))
                            ])
                        }
                    },
                    {
                        title: '创建时间',
                        align: 'center',
                        key: 'createTime'
                    },
                    {
                        title: '更新时间',
                        align: 'center',
                        key: 'updateTime'
                    }
                ]
            };
        },

        created () {
            this.shopId = this.$route.query.shopId;
            this.getShopMemList();
            this.getUserList();
        },

        methods: {
            modalSet (num) {
                this.flag = num;
                if(num === 1) {
                    this.dataInitialization();
                    this.isEditMem = true;
                } else if(num === 2){
                    if(this.staffId === null) {
                        this.$Message.warning('请先选择店员！');
                    } else {
                        this.isEditMem = true;
                    }
                }
            },

            getUserList() {      //获取会员列表
                let that = this;
                let url = this.serviceurl + '/backstage/level/pageUser';
                let params = {
                    pageNo: that.pageNo1,
                    pageSize: 10,
                }
                let data = null;
                that
                    .$http(url, params, data, "get")
                    .then(res=> {
                        data = res.data;
                        if(data.retCode === 0) {
                            that.userList = that.userList.concat(data.data.data);
                            that.userList.map(item =>{
                                that.userSelect.push({
                                    value: parseInt(item.id),
                                    label: item.name
                                })
                            });
                            if(that.userList.length < parseInt(data.data.total)) {
                                that.pageNo1++;
                                that.getUserList();
                            }
                        } else {
                            that.$Message.warning(data.retMsg)
                        }
                    })
                    .catch(e => {

                    })
            },

            choiceUser(row,index) {   //选择表格某一行
                this.staffId = row.id;
                this.shopStaffDto = row;
                this.shopStaffDto.parentId = parseInt(this.shopStaffDto.parentId);
                this.shopStaffDto.userId = parseInt(this.shopStaffDto.userId);
                this.shopStaffDto.verifyPower === 0? this.verifyPower = false : this.verifyPower = true;
            },

            changePage(val) {  //改变页码
                this.pageNo = val - 1;
                this.getShopMemList();
            },

            searchStaff() {   //查找员工
                this.pageNo = 0;
                this.getShopMemList();
            },

            getShopMemList() {   //获取员工列表
                let that = this;
                let url = that.serviceurl + '/backstage/shop/pageShopMem';
                let params = {
                    shopId: that.shopId,
                    keyword: that.keyword,
                    pageNo: that.pageNo,
                    pageSize: 10
                }
                that
                    .$http(url, params, '', 'get')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            that.tableData = res.data.data.data;
                            that.total = parseInt(res.data.data.total);
                            console.log('-- 店员列表 --',that.tableData)
                        } else {
                            that.$Message.warning(res.data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            editShopMem() {  //新增、修改员工信息
                let that = this;
                let url = that.serviceurl + '/backstage/shop/addOrModyfyShopMem';
                that.verifyPower === true ? that.shopStaffDto.verifyPower = 1 : that.shopStaffDto.verifyPower = 0;
                that.flag === 2 ? that.shopStaffDto.updateTime = new Date().getTime() : '';
                let data = that.shopStaffDto;
                that
                    .$http(url, '', data, 'post')
                    .then(res=> {
                        console.log(res)
                        if(res.data.retCode === 0) {
                            that.isEditMem = false;
                            that.getShopMemList();
                            that.flag === 1 ? that.$Message.success('员工添加成功！') : that.$Message.success('员工修改成功！');
                            that.dataInitialization();
                        } else {
                            that.flag === 1 ? that.$Message.warning(res.data.retMsg || '员工添加失败！'): that.$Message.warning(res.data.retMsg || '员工修改失败！');
                        }
                    })
                    .catch(e=> {
                        that.$Message.error('请求错误')
                    })
            },

            changeMemStatus(num) {   //修改员工在店状态
                let that = this;
                if(that.staffId === null) {
                    that.$Message.warning('请先选择员工！');
                } else {
                    let url = that.serviceurl + '/backstage/shop/addOrModyfyShopMem';
                    that.shopStaffDto.updateTime = new Date().getTime();
                    that.shopStaffDto.shopStatus = num;
                    that.shopStaffDto.shopId = that.staffId;
                    let data = that.shopStaffDto;
                    that
                        .$http(url, '', data, 'post')
                        .then(res=> {
                            if(res.data.retCode === 0) {
                                that.isEditMem = false;
                                that.getShopMemList();
                                that.$Message.success('员工状态修改成功！');
                                that.dataInitialization();
                            } else {
                               that.$Message.warning(res.data.retMsg || '员工状态修改失败！');
                            }
                        })
                        .catch(e=> {
                            that.$Message.error('请求错误')
                        })
                }
            },

            dataInitialization() {   //初始化
                let that = this;
                that.staffId = null;
                that.shopStaffDto ={
                    parentId: null,
                    userId: null,
                    shopId: this.$route.query.shopId,
                    roleName: '',
                    verifyPower: null,
                };
            },
        }
    };
</script>

<style lang="less" scoped>
    .staff-setting {
        font-size: 14px;
        p{
            padding-top: 10px;
            &:nth-child(1) {
                text-align: center;
                padding-top: 0;
                font-weight: 600;
                letter-spacing: 1px;
            }
        }
        .tips {
            color: red;
            font-size: 12px;
            text-indent: 6em;
        }
        .level-btn {
            text-align: center;
            margin-top: 20px;
        }
    }
</style>