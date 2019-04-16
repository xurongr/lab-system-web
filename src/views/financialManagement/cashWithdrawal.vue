<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>会员名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                    <p>手机号码 &nbsp;&nbsp;<Input v-model="phone" style="width: 110px" /></p>
                    <p>
                        状态 &nbsp;&nbsp;
                        <Select v-model="state" style="width:130px">
                            <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                </div>
                <p>未打款10，已打款100</p>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-blue">查询</Button>
                <Button class="btn btn-blue" @click="isLevelSet">审核打款</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
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
                        key: ''
                    },
                    {
                        title: '手机号码',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '提现金额',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '剩余金额',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '收款账户',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '收款银行',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '银行卡号',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '支行',
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
                        title: '打款时间',
                        align: 'center',
                        key: ''
                    }
                ]
            };
        },

        created () {

        },

        methods: {
            isLevelSet () {
                this.levelSet = true;
            }
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