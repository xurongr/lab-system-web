<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>员工名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                </div>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-b-hover">查询</Button>
                <Button class="btn btn-b-hover" @click="modalSet(1)">新增</Button>
                <Button class="btn btn-b-hover" @click="modalSet(2)">编辑</Button>
                <Button class="btn btn-b-hover" @click="start=!start" v-if="start">启用</Button>
                <Button class="btn btn-b-hover" @click="start=!start"  v-if="!start">禁用</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
        </div>
        <!--收益设置模态框-->
        <Modal
                v-model="isModal"
                :footer-hide="true"
                :styles="{top: '30%'}">
            <div class="staff-setting">
                <p v-if="flag === 1">新增</p>
                <p v-if="flag === 2">编辑</p>
                <p>父级账户&nbsp;&nbsp;
                    <Select v-model="level" style="width:75%">
                       <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>选择账户&nbsp;&nbsp;
                    <Select v-model="level" style="width:75%">
                        <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>店铺角色&nbsp;&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入角色，如：店长、员工" style="width: 75%" /></p>
                <p class="tips">角色会在前端显示，收益根据会员等级，在会员你列表设置</p>
                <p>核销权限&nbsp;&nbsp;
                    <i-switch v-model="keyWord" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                    </i-switch>
                </p>
                <p class="tips">会员定制商品，用来核销定制成功的订单</p>
                <div class="level-btn"><Button class="btn btn-blue">保存</Button></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                keyWord: '',
                phone: null,
                level: '全部',
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
                state: '全部',
                stateList: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '启用',
                        label: '启用'
                    },
                    {
                        value: '禁用',
                        label: '禁用'
                    }
                ],
                start: false,
                tableData: [],
                total: 0,
                isModal: false,
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
                        key: ''
                    },
                    {
                        title: '手机号码',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '角色',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '创建时间',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '更新时间',
                        align: 'center',
                        key: ''
                    }
                ]
            };
        },

        created () {

        },

        methods: {
            modalSet (num) {
                this.isModal = true;
                this.flag = num;
            }
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