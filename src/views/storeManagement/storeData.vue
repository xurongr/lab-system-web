<template>
    <div class="main-body store-data">
        <div class="store-data-top">
            <p>门店选择 &nbsp;&nbsp;
                <Select v-model="level" style="width:130px">
                    <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </p>
            <p>时间 &nbsp;&nbsp;<DatePicker type="date" placeholder="选择时间" v-model="date"></DatePicker></p>
            <Button class="btn btn-b-hover">查询</Button>
        </div>
        <div class="store-data-income">
            <Card>
                <p slot="title" class="income-title">收益总数 <span>555，555</span></p>
                <Row>
                    <Col span="4">
                        <div class="income-data">
                            <p>充值收益 <span>555,555</span></p>
                            <p>推广部分 <span>555,555</span></p>
                            <p>补贴部分 <span>555,555</span></p>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="income-data">
                            <p>消费收益 <span>555,555</span></p>
                            <p>推广部分 <span>555,555</span></p>
                            <p>补贴部分 <span>555,555</span></p>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="income-data">
                            <p>定制收益 <span>555,555</span></p>
                            <p>推广部分 <span>555,555</span></p>
                            <p>补贴部分 <span>555,555</span></p>
                        </div>
                    </Col>
                    <Col span="9">
                        <div class="income-data income-future">
                            <p>商城收益 <span>敬请期待</span></p>
                            <p>补贴部分 <span>——</span></p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
        <div class="store-data-detail">
            <p>数据明细</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
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
            }
        },

        created() {

        },

        methods: {},
    }
</script>

<style lang="less" scoped>
.store-data {
    &-top {
        display: flex;
        margin-bottom: 15px;
        p {
            margin-right: 25px;
        }
    }
    &-income {
        margin-bottom: 15px;
        .income-title {
            height: 32px;
            line-height: 32px;
            padding-left: 54px;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 2px;
            span {
                padding-left: 20px;
            }
        }
        /deep/ .ivu-card-body {
            padding: 40px 20px 16px 20px;
        }
        .income-data {
            border-right: 1px solid #000000b5;
            padding: 0 50px;
            height: 120px;
            p {
                padding: 10px 0;
                font-weight: 600;
                letter-spacing: 1px;
                &:nth-child(1) {
                    padding-top: 0;
                }
                &:nth-last-child(1) {
                    padding-bottom: 0;
                }
                span {
                    padding-left: 20px;
                    font-size: 18px;
                }
            }
        }
        .income-future {
            border: none;
            p {
                span {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>