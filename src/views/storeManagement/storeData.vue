<template>
    <div class="main-body store-data">
        <div class="store-data-top">
            <p>门店选择 &nbsp;&nbsp;
                <Select v-model="shopId" style="width:130px">
                    <Option v-for="item in shopSeclect" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </p>
            <p>时间 &nbsp;&nbsp;<DatePicker type="datetimerange" placeholder="选择时间段" @on-change="changeTime" style="width: 150px;color: #444"></DatePicker></p>
            <Button class="btn btn-blue" @click="getShopData">查询</Button>
        </div>
        <div class="store-data-income">
            <Card>
                <p slot="title" class="income-title">收益总数 <span>{{incomeTotal}}</span></p>
                <Row>
                    <Col span="4" v-for="(item,idx) in incomeGroups" :key="idx">
                        <div class="income-data" v-if="item.type === 1">
                            <p>充值收益 <span>{{item.moeny ? item.moeny : 0}}</span></p>
                            <p>推广部分 <span>{{item.promote ? item.promote : 0}}</span></p>
                            <p>补贴部分 <span>{{item.subsidy ? item.subsidy : 0}}</span></p>
                        </div>
                    </Col>
                    <Col span="4"  v-if="flag === 0">
                        <div class="income-data">
                            <p>充值收益 <span>0</span></p>
                            <p>推广部分 <span>0</span></p>
                            <p>补贴部分 <span>0</span></p>
                        </div>
                    </Col>
                    <Col span="4"  v-for="(item, idx1) in incomeGroups" :key="idx1">
                        <div class="income-data" v-if="item.type === 2">
                            <p>消费收益 <span>{{item.moeny ? item.moeny : 0}}</span></p>
                            <p>推广部分 <span>{{item.promote ? item.promote : 0}}</span></p>
                            <p>补贴部分 <span>{{item.subsidy ? item.subsidy : 0}}</span></p>
                        </div>
                    </Col>
                    <Col span="4"  v-if="flag1 === 0">
                        <div class="income-data">
                            <p>消费收益 <span>0</span></p>
                            <p>推广部分 <span>0</span></p>
                            <p>补贴部分 <span>0</span></p>
                        </div>
                    </Col>
                    <Col span="4" v-for="(item, index) in incomeGroups" :key="index">
                        <div class="income-data" v-if="item.type === 3">
                            <p>定制收益 <span>{{item.moeny ? item.moeny : 0}}</span></p>
                            <p>推广部分 <span>{{item.promote ? item.promote : 0}}</span></p>
                            <p>补贴部分 <span>{{item.subsidy ? item.subsidy : 0}}</span></p>
                        </div>
                    </Col>
                    <Col span="4"  v-if="flag2 === 0">
                        <div class="income-data">
                            <p>定制收益 <span>0</span></p>
                            <p>推广部分 <span>0</span></p>
                            <p>补贴部分 <span>0</span></p>
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
            <Table class="cc-m-t-10" height="280" border :columns="table" :data="shopIncomeDetail"></Table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                pageNo: 0,
                shopId: 1,     //门店ID
                startTime: '',
                endTime: '',
                shopList: [],     //店铺列表
                shopSeclect: [],
                incomeTotal: 0,         //收益总数
                shopIncomeDetail: [],   //数据详情
                incomeGroups: [],       //数据明细
                flag: 0,               // -充值收益无数据
                flag1: 0,               // - 消费收益无数据
                flag2: 0,               // -定制收益无数据
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
                        key: 'yearMonth'
                    },
                    {
                        title: '收益总数',
                        align: 'center',
                        key: 'totalMoney'
                    },
                    {
                        title: '充值收益',
                        align: 'center',
                        render: (h, params) => {
                            let money;
                            params.row.shopIncomeDetailsItemDtoList.map(item => {
                                if(item.type === 1) {
                                    money = item.money;
                                    return money;
                                } else {
                                    money = 0;
                                    return money;
                                }
                            })
                            return h('p',money)
                        }
                    },
                    {
                        title: '消费收益',
                        align: 'center',
                        render: (h, params) => {
                            let money;
                            params.row.shopIncomeDetailsItemDtoList.map(item => {
                                if(item.type === 2) {
                                    money = item.money;
                                    return money;
                                } else {
                                    money = 0;
                                    return money;
                                }
                            })
                            return h('p',money)
                        }
                    },
                    {
                        title: '定制收益',
                        align: 'center',
                        render: (h, params) => {
                            let money;
                            params.row.shopIncomeDetailsItemDtoList.map(item => {
                                if(item.type === 3) {
                                    money = item.money;
                                    return money;
                                } else {
                                    money = 0;
                                    return money;
                                }
                            })
                            return h('p',money)
                        }
                    },
                ]
            };
        },

        created () {
            this.getShopList();
            this.getShopData();
        },

        methods: {
            getShopList() {   //获取门店信息
                let that = this;
                let url = that.serviceurl + '/backstage/shop/pageShop';
                let params = {
                    pageNo: that.pageNo,
                    pageSize: 10
                }
                console.log(params)
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

            getShopData() {   //获取门店收益数据
                let that = this;
                that.initdata();
                let url = that.serviceurl + '/backstage/shop/getShopData';
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
                            that.shopIncomeDetail = data.data.shopIncomeDetailsDtos;
                            that.incomeGroups = data.data.shopIncomeDto.incomeGroups;
                            that.incomeTotal = data.data.shopIncomeDto.total;
                            console.log(that.incomeGroups)
                            that.incomeGroups.map(item => {
                               if(item.type === 1) {that.flag = 1};
                               if(item.type === 2) {that.flag1 = 1}
                               if(item.type === 3) {that.flag2 = 1}
                            })

                        } else {
                            that.$Message.warning(data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            initdata() {  //初始化数据
                let that = this;
                that.flag = 0; that.flag1 =0;that.flag2=0;
                that.shopIncomeDetail = [];
                that.incomeGroups =[];
                that.incomeTotal = 0;
            },
        }
    };
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
    /deep/ .ivu-select-dropdown {
        top:53px !important;
    }
</style>