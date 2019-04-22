<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>店铺名称 &nbsp;&nbsp;<Input v-model="keyword" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                </div>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-blue" @click="searchStore">查询</Button>
                <Button class="btn btn-blue" @click="goInfoStore(1)">新增</Button>
                <Button class="btn btn-blue" @click="goInfoStore(2)">编辑</Button>
                <Button class="btn btn-blue" @click="statusChange(1)" v-if="shopInfo.status !== 1">营业</Button>
                <Button class="btn btn-blue" @click="statusChange(2)"  v-if="shopInfo.status === 1">停业</Button>
                <Button class="btn btn-blue" @click="goStaffManage">员工管理</Button>
                <Button class="btn btn-blue" @click="incomeModal = true">收益设置</Button>
                <Button class="btn btn-blue" @click="paramsModal = true">参数设置</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData" @on-row-click="choiceUser" :highlight-row="true"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total" :current="current" @on-change="changePage"></Page></div>
        </div>
        <!--收益设置模态框-->
        <Modal
                v-model="incomeModal"
                :footer-hide="true"
                :styles="{top: '30%'}">
            <div class="income-setting">
                <p>收益设置</p>
                <p>充值收益补贴&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入：如15%" style="width: 70%" /></p>
                <p>消费收益补贴&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入：如15%" style="width: 70%" /></p>
                <p>定制收益补贴&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入：如15%" style="width: 70%" /></p>
                <p>商城收益补贴&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入：如15%" style="width: 70%" /></p>
                <div class="level-btn"><Button class="btn btn-blue">保存</Button></div>
            </div>
        </Modal>
        <!--参数设置模态框-->
        <Modal
                v-model="paramsModal"
                :footer-hide="true"
                :styles="{top: '30%'}">
            <div class="income-setting">
                <p>参数设置</p>
                <p>应用ID&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入二维火应用ID" style="width: 75%" /></p>
                <p>appKey&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入二维火appKey" style="width: 75%" /></p>
                <p>appSecret&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入二维火appSecret" style="width: 75%" /></p>
                <p>点餐URL&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入二维火点餐URL" style="width: 75%" /></p>
                <p>外卖URL&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入二维火外卖URL" style="width: 75%" /></p>
                <p>充值URL&nbsp;&nbsp;<Input v-model="keyword" placeholder="输入二维火充值URL" style="width: 75%" /></p>
                <div class="level-btn"><Button class="btn btn-blue">保存</Button></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                pageNo: 0,
                total: 0,
                current: 1,
                tableData: [],
                keyword: '',
                shopId: null,
                shopInfo: [],
                start: false,
                incomeModal: false,
                paramsModal: false,
                table: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 60
                    },
                    {
                        title: '店铺ID',
                        align: 'center',
                        key: 'entityId'   //entityId二维火id
                    },
                    {
                        title: '店铺名称',
                        align: 'center',
                        key: 'shopName'
                    },
                    {
                        title: '描述',
                        align: 'center',
                        key: 'shopDescribe'
                    },
                    {
                        title: '地址',
                        align: 'center',
                        key: 'addr'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'status',
                        render: (h, params) => {
                            return h('div',[
                                h('p',{
                                    style: {
                                        color: params.row.status === 1 ? '444' : 'red'
                                    }
                                },params.row.status === 1 ? '营业' : '停业')
                            ])
                        }
                    },
                    {
                        title: '负责人',
                        align: 'center',
                        key: 'shopowner'
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
            this.getShopList();
        },

        methods: {
            choiceUser(row,index) {   //选择表格某一行
                this.shopId = row.id;
                this.shopInfo = row;
            },

            goInfoStore (num) {
                if (num === 1) {
                    this.$router.push({
                        path: '/addStore',
                        query: {
                            flag: num
                        }
                    });
                } else if (num === 2) {
                    if(this.shopId === null) {
                        this.$Message.warning('请先选择操作对象！');
                    } else {
                        this.$router.push({
                            path: '/editStore',
                            query: {
                                flag: num,
                                shopInfo: this.shopInfo,
                            }
                        });
                    }
                }
            },

            changePage(val) {  //改变页码
                this.pageNo = val - 1;
                this.getShopList();
            },

            searchStore() {   //搜索
                this.pageNo = 0;
                this.getShopList();
            },

            getShopList() {   //获取门店信息
                let that = this;
                let url = that.serviceurl + '/backstage/shop/pageShop';
                let params = {
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
                            console.log('-- 门店信息 --',that.tableData)
                        } else {
                            that.$Message.warning(res.data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            goStaffManage () {
                if(this.shopId === null) {
                    this.$Message.warning('请先选择店铺！');
                } else {
                    this.$router.push({
                        path: '/staffManagement',
                        query: {
                            shopId: this.shopId,
                        }
                    });
                }
            },

            statusChange(status) {
                if(this.shopId === null) {
                    this.$Message.warning('请先选择店铺！');
                } else {
                    let that = this;
                    let url = that.serviceurl + '/backstage/shop/addOrModifyShop';
                    that.shopInfo.status = status;
                    console.log(status)
                    let data = that.shopInfo;
                    that
                        .$http(url, '', data, 'post')
                        .then(res=> {
                            if(res.data.retCode === 0) {
                                that.$Message.success('店铺状态修改成功！');
                                that.shopId = null;
                                that.getShopList();
                            } else {
                                that.$Message.warning(res.data.retMsg || '店铺状态修改失败！');
                            }
                        })
                        .catch(e=> {
                            that.$Message.error('请求错误')
                        })
                }
            },
        }
    };
</script>

<style lang="less" scoped>
    .income-setting {
        font-size: 14px;
        text-align: right;
        padding-right: 10%;
        p{
            padding-top: 10px;
            &:nth-child(1) {
                text-align: center;
                padding-top: 0;
                font-weight: 600;
                letter-spacing: 1px;
            }
        }
        .level-btn {
            text-align: center;
            margin-top: 40px;
        }
    }
</style>