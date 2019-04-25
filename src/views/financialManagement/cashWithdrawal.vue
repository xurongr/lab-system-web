<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>会员名称 &nbsp;&nbsp;<Input v-model="userName" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                    <p>手机号码 &nbsp;&nbsp;<Input v-model="phone" style="width: 110px" /></p>
                    <p>
                        状态 &nbsp;&nbsp;
                        <Select v-model="state" style="width:130px">
                            <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                </div>
                <p>未打款{{noPay}}，已打款{{pay}}</p>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-blue" @click="searchCash">查询</Button>
                <Button class="btn btn-blue" @click="confirmCash">审核打款</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData" @on-row-click="choiceUser" :highlight-row="true"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total" :current="current" @on-change="changePage"></Page></div>
        </div>
        <Modal
                v-model="levelSet"
                :footer-hide="true"
                :styles="{top: '30%'}">
            <div class="level-setting">
                <p>审核打款</p>
                <p>打款金额&nbsp;&nbsp;<Input v-model="phone" style="width: 75%" /></p>
                <p>线下打款多少，这边填写多少</p>
                <div class="level-btn"><Button class="btn btn-blue">提交</Button></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                withdrawId:"",
                withdrawInfo:{},
                pageNo: 0,
                current: 1,
                total: 0,
                tableData: [],  //体现列表
                userName: '',
                phone: '',
                state: -1,
                stateList: [
                    {
                        value: -1,
                        label: '全部'
                    },
                    {
                        value: 0,
                        label: '未打款'
                    },
                    {
                        value: 1,
                        label: '已打款'
                    }
                ],
                pay: 0,     //已打款金额
                noPay: 0,   //未打款金额
                start: false,
                levelSet: false, // 等级设置弹框
                table: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 60
                    },
                    {
                        title: '会员名称',
                        align: 'center',
                        key: 'userName'
                    },
                    {
                        title: '手机号码',
                        align: 'center',
                        render: (h,params) =>{
                            return h('p',params.row.userBankInfo.phone);
                        }
                    },
                    {
                        title: '提现金额',
                        align: 'center',
                        key: 'money',
                        width: 100,
                    },
                    {
                        title: '剩余金额',
                        align: 'center',
                        key: 'withdrawable',
                        width: 100,
                    },
                    {
                        title: '收款账户',
                        align: 'center',
                        render: (h,params) =>{
                            return h('p',params.row.userBankInfo.bankNum);
                        }
                    },
                    {
                        title: '收款银行',
                        align: 'center',
                        render: (h,params) =>{
                            return h('p',params.row.userBankInfo.bank);
                        }
                    },
                    {
                        title: '银行卡号',
                        align: 'center',
                        render: (h,params) =>{
                            return h('p',params.row.userBankInfo.bankNum);
                        }
                    },
                    {
                        title: '支行',
                        align: 'center',
                        render: (h,params) =>{
                            return h('p',params.row.userBankInfo.subbranch);
                        }
                    },
                    {
                        title: '状态',
                        align: 'center',
                        width: 80,
                        render: (h,params) =>{
                            return h('p',params.row.status == 0 ? '未打款' : '已打款');
                        }
                    },
                    {
                        title: '创建时间',
                        align: 'center',
                        key: 'createTime'
                    },
                    {
                        title: '打款时间',
                        align: 'center',
                        key: 'payTime'
                    }
                ]
            };
        },

        created () {
            this.getCash();
        },

        methods: {
            changePage(val) {  //改变页码
                this.pageNo = val - 1;
                this.getCash();
            },

            searchCash() {
                this.pageNo = 0;
                this.getCash();
            },

            choiceUser(row,index) {   //选择表格某一行
                this.withdrawId = row.id;
                this.withdrawInfo = row;
                console.log(this.withdrawInfo)
            },

            getCash() {   //分页获取体现列表
                let that = this;
                let url = that.serviceurl + '/backstage/financial/pageCashWithdrawal';
                let status;
                that.state === -1 ? status = '' : status = that.state;
                let params = {
                    userName: that.userName,
                    phone: that.phone,
                    status: status,
                    pageNo: that.pageNo,
                    pageSize: 10
                }
                that
                    .$http(url, params, '', 'get')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            console.log(res.data)
                            that.pay = res.data.data.pay;
                            that.noPay = res.data.data.noPay;
                            that.tableData =res.data.data.userCashWithdrawalResultPageDto.data;
                            that.total = parseInt(res.data.data.userCashWithdrawalResultPageDto.total);
                            console.log('体现列表-',that.tableData)
                        } else {
                            that.$Message.warning(res.data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            confirmCash() {  //审核打款
            //   this.levelSet = true;
               let that=this;
               if(this.withdrawId==""){
                this.$Message.warning('请先选择操作对象！');
               }
               else{
                   if(that.withdrawInfo.status==1)
                   {
                       this.$Message.warning('操作对象已打款！');
                   }
                   else{
                       let url = that.serviceurl + '/backstage/financial/pageCashWithdrawal';
                       let params = {
                           cwNum: that.withdrawInfo.cwNum,
                           status: 0
                           }
                           that.$http(url, params, '', 'get')
                           .then(res => {
                               if(res.data.retCode === 0) {
                                   that.$Message.success('打款成功！')
                                   this.pageNo = 0;
                                   this.getCash();
                                } else{
                                    that.$Message.warning(res.data.retMsg);
                                    }
                                
                                }) .catch(e => {
                                   that.$Message.error('请求错误');
                                })
                     }
               }
            },
        }
    };
</script>

<style lang="less" scoped>
    .level-setting {
        font-size: 14px;
        p{
            padding-top: 10px;
            &:nth-child(1) {
                text-align: center;
                padding-top: 0;
                font-weight: 600;
                letter-spacing: 1px;
            }
            &:nth-child(3) {
                color: red;
                font-size: 12px;
                text-indent: 6em;
            }
        }
        .level-btn {
            text-align: center;
            margin-top: 20px;
        }
    }
</style>