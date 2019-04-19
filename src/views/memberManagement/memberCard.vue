<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>会员名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                    <p>手机号码 &nbsp;&nbsp;<Input v-model="phone" style="width: 110px" /></p>
                    <p>店铺名称 &nbsp;&nbsp;<Input v-model="phone" style="width: 110px" /></p>
                    <p>
                        等级 &nbsp;&nbsp;
                        <Select v-model="level" style="width:130px">
                            <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                    <p>
                        状态 &nbsp;&nbsp;
                        <Select v-model="state" style="width:130px">
                            <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                </div>
                <p>会员卡总数：152,610</p>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-blue">查询</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
        </div>
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
                        key: 'customerId'
                    },
                    {
                        title: '会员名称',
                        align: 'center',
                        key: 'name'
                    },
                    {
                        title: '手机号码',
                        align: 'center',
                        key: 'mobile'
                    },
                    {
                        title: '性别',
                        align: 'center',
                        key: 'sex',
                        width: 80,
                        render: (h,params) => {
                            return h('p',params.row.sex === '0'? '未知':(params.row.sex === '1'? '男':'女'))
                        }
                    },
                    {
                        title: '会员等级',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '会员卡号',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '会员卡ID',
                        align: 'center',
                        key: 'cardId'
                    },
                    {
                        title: '余额',
                        align: 'center',
                        key: 'balance',
                        width: 70
                    },
                    {
                        title: '赠送金额',
                        align: 'center',
                        key: 'giftBalance',
                        width: 90
                    },
                    {
                        title: '实际充值金额',
                        align: 'center',
                        key: 'realBalance',
                    },
                    {
                        title: '支付累计金额',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '消费累计金额',
                        align: 'center',
                        key: 'payAmount',
                    },
                    {
                        title: '折扣累计金额',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '发卡时间',
                        align: 'center',
                        key: ''
                    }
                ]
            };
        },

        created () {
            this.getMenCard();
        },

        methods: {
            getMenCard() {   //会员卡查询
                let that = this;
                let url = that.serviceurl + '/backstage/userMem/queryMemCard';
                let data = null;
                that
                    .$http(url, '', data, 'get')
                    .then(res=> {
                        data = res.data;
                        if(data.retCode === 0) {
                            that.tableData = data.data.data;
                            console.log(that.tableData);
                        } else {
                            that.$Message.warning(data.retMsg);
                        }
                    })
                    .catch(e=> {
                        that.$Message.error('请求错误!');
                    })
            },
        }
    };
</script>

<style lang="less" scoped>

</style>