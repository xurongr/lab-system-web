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
            <Table class="cc-m-t-10" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                pageNo1: 0,
                pageNo: 0,
                shopId: null,     //门店ID
                startTime: '',
                endTime: '',
                shopList: [],     //店铺列表
                shopSeclect: [],
                date: '',
                incomeTotal: 0,         //收益总数
                shopIncomeDetail: [],   //数据详情
                incomeGroups: [],       //数据明细
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
                        title: '收益总数',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '充值收益',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '消费收益',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '定制收益',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '商城收益',
                        align: 'center',
                        key: ''
                    }
                ]
            };
        },

        created () {
            this.getShopList();
        },

        methods: {
            getShopList() {   //获取门店信息
                let that = this;
                let url = that.serviceurl + '/backstage/shop/pageShop';
                let params = {
                    pageNo: that.pageNo1,
                    pageSize: 10
                }
                that
                    .$http(url, params, '', 'get')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            that.shopList = that.shopList.concat(res.data.data.data);
                            let total = parseInt(res.data.data.total);
                            if(that.shopList.length < total) {
                                that.pageNo1++;
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
                this.startTime = new Date(time[0]).getTime();
                this.endTime = new Date(time[1]).getTime();
                if(time[0] === '') {
                    this.startTime = '';
                }
                if(time[1] === '') {
                    this.endTime = '';
                }
            },

            getShopData() {   //获取门店收益数据
                let that = this;
                let url = that.serviceurl + '/backstage/shop/getShopData';
                let params = {
                    shopId: that.shopId,
                    startTime: that.startTime,
                    endTime: that.endTime,
                };
                console.log(params)
                let data = null;
                that
                    .$http(url, params, data, 'get')
                    .then(res => {
                        data = res.data;
                        if(data.retCode === 0) {
                            that.shopIncomeDetail = data.data.shopIncomeDetailsDtos;
                            that.incomeGroups = data.data.shopIncomeDto.incomeGroups;
                            that.incomeTotal = data.data.shopIncomeDto.total;
                            console.log('--that.shopIncomeDetail--',that.shopIncomeDetail)
                            console.log('--that.incomeGroups--',that.incomeGroups)
                            console.log('--that.incomeTotal--',that.incomeTotal)
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