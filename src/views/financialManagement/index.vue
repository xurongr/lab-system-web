<template>
    <div class="main-body financial-data">
        <div class="financial-data-top">
            <p>门店选择 &nbsp;&nbsp;
                <Select v-model="level" style="width:130px">
                    <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </p>
            <p>时间 &nbsp;&nbsp;<DatePicker type="date" placeholder="选择时间" v-model="date"></DatePicker></p>
            <Button class="btn btn-b-hover">查询</Button>
        </div>
        <div class="financial-data-sum">
            <div class="financial-data-sum-cont">
                <div class="cont-total cont-sum"><p>总金额</p><span>555,555</span></div>
                <div class="cont-total"><p>充值金额</p><span>555,555</span></div>
                <div class="cont-total"><p>消费金额</p><span>555,555</span></div>
                <div class="cont-total"><p>定制金额</p><span>555,555</span></div>
            </div>
        </div>
        <Tabs type="card">
            <TabPane label="充值金额">
                <div class="financial-data-detail">
                    <p>充值金额汇总及分配明细</p>
                    <div class="detail">
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                    </div>
                    <p>数据明细</p>
                    <Table class="cc-m-t-10" border :columns="table" :data="tableData"></Table>
                    <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
                </div>
            </TabPane>
            <TabPane label="消费金额">
                <div class="financial-data-detail">
                    <p>充值金额汇总及分配明细</p>
                    <div class="detail">
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                    </div>
                    <p>数据明细</p>
                    <Table class="cc-m-t-10" border :columns="table" :data="tableData"></Table>
                    <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
                </div>
            </TabPane>
            <TabPane label="定制金额">
                <div class="financial-data-detail">
                    <p>充值金额汇总及分配明细</p>
                    <div class="detail">
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                        <div><p>微信收入</p><p>555，555</p></div>
                    </div>
                    <p>数据明细</p>
                    <Table class="cc-m-t-6" border :columns="table" :data="tableData"></Table>
                    <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        data () {
            return {
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
                date: '',
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
                        title: '时间',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '总金额',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '微信收入',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '收益复购',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '订单量',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '直推奖励',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '间推奖励',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '市场补贴',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '公排奖励',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '门店补贴',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '剩余利润',
                        align: 'center',
                        key: ''
                    }
                ]
            };
        },

        created () {

        },

        methods: {}
    };
</script>

<style lang="less" scoped>
    .financial-data {
        /deep/ .ivu-tabs-bar {
            margin-bottom: 0;
        }
        &-top {
            display: flex;
            margin-bottom: 15px;
            p {
                margin-right: 25px;
            }
        }
        &-sum {
            background-color: #cccccc99;
            margin-bottom: 30px;
            font-size: 16px;
            &-cont {
                height: 100px;
                display: flex;
                text-align: center;
                width: 90%;
                margin: 0 auto;
                .cont-total {
                    width: 25%;
                    padding-top: 20px;
                    p {
                        line-height: 30px;
                    }
                    span {
                        font-size: 20px;
                        letter-spacing: 1px;
                    }
                }
                .cont-sum {
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
        &-detail {
            background-color: #cccccc99;
            padding: 8px;
            color: #000;
            .detail {
                display: flex;
                text-align: center;
                border: 1px solid #44444454;
                background-color: #fff;
                margin: 6px 0 10px;
                div {
                    width: 11.1111%;
                    padding: 12px;
                    p {
                        line-height: 50px;
                    }
                }
            }
        }
    }
</style>