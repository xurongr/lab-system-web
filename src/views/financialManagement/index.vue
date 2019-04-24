<template>
    <div class="main-body financial-data">
        <div class="financial-data-top">
            <p>门店选择 &nbsp;&nbsp;
                <Select v-model="shopId" style="width:130px">
                    <Option v-for="item in shopSeclect" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </p>
            <p>时间 &nbsp;&nbsp;<DatePicker type="datetimerange" placeholder="选择时间段" @on-change="changeTime" style="width: 150px;color: #444"></DatePicker></p>
            <Button class="btn btn-b-hover" @click="searchFinan">查询</Button>
        </div>
        <div class="financial-data-sum">
            <div class="financial-data-sum-cont">
                <div class="cont-total cont-sum">
                    <p>总金额</p>
                    <span v-show="moneyInfo.totalMoney">{{moneyInfo.totalMoney}}</span>
                    <span v-show="!moneyInfo.totalMoney">0</span>
                </div>
                <div class="cont-total">
                    <p>充值金额</p>
                    <span v-show="moneyInfo.rechargeMoney">{{moneyInfo.rechargeMoney}}</span>
                    <span v-show="!moneyInfo.rechargeMoney">0</span>
                </div>
                <div class="cont-total">
                    <p>消费金额</p>
                    <span v-show="moneyInfo.consumeMoney">{{moneyInfo.consumeMoney}}</span>
                    <span v-show="!moneyInfo.consumeMoney">0</span>
                </div>
                <div class="cont-total">
                    <p>定制金额</p>
                    <span v-show="moneyInfo.customizedMoney">{{moneyInfo.customizedMoney}}</span>
                    <span v-show="!moneyInfo.customizedMoney">0</span>
                </div>
            </div>
        </div>
        <Tabs type="card" @on-click="changeTab">
            <TabPane label="充值金额">
                <div class="financial-data-detail">
                    <p>充值金额汇总及分配明细</p>
                    <div class="detail">
                        <div><p>微信收入</p><p>{{dataSummaryDetailDto.wxIncome ? dataSummaryDetailDto.wxIncome:0}}</p></div>
                        <div><p>收益复购</p><p>{{dataSummaryDetailDto.repeatIncome ? dataSummaryDetailDto.repeatIncome:0}}</p></div>
                        <div><p>订单量</p><p>{{dataSummaryDetailDto.orderCount ? dataSummaryDetailDto.orderCount:0}}</p></div>
                        <div><p>直推奖励</p><p>{{dataSummaryDetailDto.directPush ? dataSummaryDetailDto.directPush:0}}</p></div>
                        <div><p>间推奖励</p><p>{{dataSummaryDetailDto.indirectPush ? dataSummaryDetailDto.indirectPush:0}}</p></div>
                        <div><p>市场补贴</p><p>{{dataSummaryDetailDto.marketSubsidy ? dataSummaryDetailDto.marketSubsidy:0}}</p></div>
                        <div><p>公排奖励</p><p>{{dataSummaryDetailDto.shopSubsidy ? dataSummaryDetailDto.shopSubsidy:0}}</p></div>
                        <div><p>门店补贴</p><p>{{dataSummaryDetailDto.shopSubsidy ? dataSummaryDetailDto.shopSubsidy:0}}</p></div>
                        <div><p>剩余利润</p><p>{{dataSummaryDetailDto.profit ? dataSummaryDetailDto.profit:0}}</p></div>
                    </div>
                    <p>数据明细</p>
                    <Table class="cc-m-t-10" height="280" border :columns="table" :data="dataSummaryDetailDtos"></Table>
                </div>
            </TabPane>
            <TabPane label="消费金额">
                <div class="financial-data-detail">
                    <p>充值金额汇总及分配明细</p>
                    <div class="detail">
                        <div><p>微信收入</p><p>{{dataSummaryDetailDto.wxIncome ? dataSummaryDetailDto.wxIncome:0}}</p></div>
                        <div><p>收益复购</p><p>{{dataSummaryDetailDto.repeatIncome ? dataSummaryDetailDto.repeatIncome:0}}</p></div>
                        <div><p>订单量</p><p>{{dataSummaryDetailDto.orderCount ? dataSummaryDetailDto.orderCount:0}}</p></div>
                        <div><p>直推奖励</p><p>{{dataSummaryDetailDto.directPush ? dataSummaryDetailDto.directPush:0}}</p></div>
                        <div><p>间推奖励</p><p>{{dataSummaryDetailDto.indirectPush ? dataSummaryDetailDto.indirectPush:0}}</p></div>
                        <div><p>市场补贴</p><p>{{dataSummaryDetailDto.marketSubsidy ? dataSummaryDetailDto.marketSubsidy:0}}</p></div>
                        <div><p>公排奖励</p><p>{{dataSummaryDetailDto.shopSubsidy ? dataSummaryDetailDto.shopSubsidy:0}}</p></div>
                        <div><p>门店补贴</p><p>{{dataSummaryDetailDto.shopSubsidy ? dataSummaryDetailDto.shopSubsidy:0}}</p></div>
                        <div><p>剩余利润</p><p>{{dataSummaryDetailDto.profit ? dataSummaryDetailDto.profit:0}}</p></div>
                    </div>
                    <p>数据明细</p>
                    <Table class="cc-m-t-10" height="280" border :columns="table" :data="dataSummaryDetailDtos"></Table>
                </div>
            </TabPane>
            <TabPane label="定制金额">
                <div class="financial-data-detail">
                    <p>充值金额汇总及分配明细</p>
                    <div class="detail">
                        <div><p>微信收入</p><p>{{dataSummaryDetailDto.wxIncome ? dataSummaryDetailDto.wxIncome:0}}</p></div>
                        <div><p>收益复购</p><p>{{dataSummaryDetailDto.repeatIncome ? dataSummaryDetailDto.repeatIncome:0}}</p></div>
                        <div><p>订单量</p><p>{{dataSummaryDetailDto.orderCount ? dataSummaryDetailDto.orderCount:0}}</p></div>
                        <div><p>直推奖励</p><p>{{dataSummaryDetailDto.directPush ? dataSummaryDetailDto.directPush:0}}</p></div>
                        <div><p>间推奖励</p><p>{{dataSummaryDetailDto.indirectPush ? dataSummaryDetailDto.indirectPush:0}}</p></div>
                        <div><p>市场补贴</p><p>{{dataSummaryDetailDto.marketSubsidy ? dataSummaryDetailDto.marketSubsidy:0}}</p></div>
                        <div><p>公排奖励</p><p>{{dataSummaryDetailDto.shopSubsidy ? dataSummaryDetailDto.shopSubsidy:0}}</p></div>
                        <div><p>门店补贴</p><p>{{dataSummaryDetailDto.shopSubsidy ? dataSummaryDetailDto.shopSubsidy:0}}</p></div>
                        <div><p>剩余利润</p><p>{{dataSummaryDetailDto.profit ? dataSummaryDetailDto.profit:0}}</p></div>
                    </div>
                    <p>数据明细</p>
                    <Table class="cc-m-t-10" height="280" border :columns="table" :data="dataSummaryDetailDtos"></Table>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                pageNo: 0,
                shopId: 1,
                startTime: '',
                endTime: '',
                shopList: [],     // 门店信息
                shopSeclect: [],  // 门店信息选择框
                moneyInfo: [],    // 数据汇总
                tableData: [],
                dataSummaryDetailDto: [],  // 金额汇总
                dataSummaryDetailDtos: [],  // 金额明细
                orderType: 1,   //  1充值金额,2消费金额,3定制金额
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
                        key: 'date'
                    },
                    {
                        title: '总金额',
                        align: 'center',
                        key: 'totalMoney'
                    },
                    {
                        title: '微信收入',
                        align: 'center',
                        key: 'wxIncome'
                    },
                    {
                        title: '收益复购',
                        align: 'center',
                        key: 'repeatIncome'
                    },
                    {
                        title: '订单量',
                        align: 'center',
                        key: 'orderCount'
                    },
                    {
                        title: '直推奖励',
                        align: 'center',
                        key: 'directPush'
                    },
                    {
                        title: '间推奖励',
                        align: 'center',
                        key: 'indirectPush'
                    },
                    {
                        title: '市场补贴',
                        align: 'center',
                        key: 'marketSubsidy'
                    },
                    {
                        title: '公排奖励',
                        align: 'center',
                        key: 'publicRanking'
                    },
                    {
                        title: '门店补贴',
                        align: 'center',
                        key: 'shopSubsidy'
                    },
                    {
                        title: '剩余利润',
                        align: 'center',
                        key: 'profit'
                    }
                ]
            };
        },

        created () {
            this.getShopList();
            this.getDataSum();
            this.getSumByData();
        },

        methods: {
            getShopList() {   //获取门店信息
                let that = this;
                let url = that.serviceurl + '/backstage/shop/pageShop';
                let params = {
                    pageNo: that.pageNo,
                    pageSize: 10
                }
                that
                    .$http(url, params, '', 'get')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            that.shopList = that.shopList.concat(res.data.data.data);
                            let total = parseInt(res.data.data.total);
                            if(that.shopList.length < total) {
                                that.pageNo++;
                                that.getShopList();
                            }
                            that.shopList.map(item => {
                                that.shopSeclect.push({
                                    value: item.id,
                                    label: item.shopName
                                })
                            })
                        } else {
                            that.$Message.warning(res.data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            changeTime(time) {   //选择时间段
                this.startTime = time[0];
                this.endTime = time[1];
                if(time[0] === '') {
                    this.startTime = '';
                }
                if(time[1] === '') {
                    this.endTime = '';
                }
            },

            searchFinan() {
                this.pageNo = 0;
                this.getDataSum();
                this.getSumByData();
            },

            getDataSum() {   //获取数据汇总
                let that = this;
                let url = that.serviceurl + '/backstage/financial/getDataSummary';
                let params = {
                    shopId: that.shopId,
                    startTime: that.startTime,
                    endTime: that.endTime,
                };
                let data = null;
                that
                    .$http(url, params, data, 'get')
                    .then(res => {
                        data = res.data;
                        if(data.retCode === 0) {
                            that.moneyInfo = data.data;
                        } else {
                            that.$Message.warning(data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            changeTab(num) {
                this.orderType = num+1;
                this.getSumByData();
            },

            getSumByData() {   //获取充值金额汇总及分配明细
                let that = this;
                let url = that.serviceurl + '/backstage/financial/getDataSummaryByDate';
                let params = {
                    shopId: that.shopId,
                    orderType: that.orderType,
                    startTime: that.startTime,
                    endTime: that.endTime,
                };
                let data = null;
                that
                    .$http(url, params, data, 'get')
                    .then(res => {
                        data = res.data;
                        if(data.retCode === 0) {
                            console.log(data.data)
                            that.dataSummaryDetailDto = data.data.dataSummaryDetailDto;
                            that.dataSummaryDetailDtos = data.data.dataSummaryDetailDtos;
                        } else {
                            that.$Message.warning(data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },
        }
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