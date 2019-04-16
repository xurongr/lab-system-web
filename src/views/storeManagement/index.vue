<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>店铺名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                </div>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-b-hover">查询</Button>
                <Button class="btn btn-b-hover" @click="goInfoStore(1)">新增</Button>
                <Button class="btn btn-b-hover" @click="goInfoStore(2)">编辑</Button>
                <Button class="btn btn-b-hover" @click="start=!start" v-if="start">启用</Button>
                <Button class="btn btn-b-hover" @click="start=!start"  v-if="!start">禁用</Button>
                <Button class="btn btn-b-hover" @click="goStaffManage">员工管理</Button>
                <Button class="btn btn-b-hover" @click="modalSet(1)">收益设置</Button>
                <Button class="btn btn-r-hover" @click="modalSet(2)">参数设置</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
        </div>
        <!--收益设置模态框-->
        <Modal
                v-model="incomeModal"
                :footer-hide="true"
                :styles="{top: '30%'}">
            <div class="income-setting">
                <p>收益设置</p>
                <p>充值收益补贴&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入：如15%" style="width: 70%" /></p>
                <p>消费收益补贴&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入：如15%" style="width: 70%" /></p>
                <p>定制收益补贴&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入：如15%" style="width: 70%" /></p>
                <p>商城收益补贴&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入：如15%" style="width: 70%" /></p>
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
                <p>应用ID&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入二维火应用ID" style="width: 75%" /></p>
                <p>appKey&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入二维火appKey" style="width: 75%" /></p>
                <p>appSecret&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入二维火appSecret" style="width: 75%" /></p>
                <p>点餐URL&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入二维火点餐URL" style="width: 75%" /></p>
                <p>外卖URL&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入二维火外卖URL" style="width: 75%" /></p>
                <p>充值URL&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入二维火充值URL" style="width: 75%" /></p>
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
                        key: ''
                    },
                    {
                        title: '店铺名称',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '描述',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '地址',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '负责人',
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
                if (num === 1) {
                    this.incomeModal = true;
                } else if (num === 2) {
                    this.paramsModal = true;
                }
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
                    this.$router.push({
                        path: '/editStore',
                        query: {
                            flag: num
                        }
                    });
                }
            },
            goStaffManage () {
                this.$router.push({
                    path: '/staffManagement'
                });
            }
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