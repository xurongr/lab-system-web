<template>
    <div>
        <Tabs type="card" :animated="false">
            <TabPane label="会员等级">
                <div class="cc-m-b-10 member-list-search">
                    <div class="m-search-top">
                        <div class="m-search-top-left">
                            <p>等级名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
                            <p>
                                状态 &nbsp;&nbsp;
                                <Select v-model="state" style="width:130px">
                                    <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </p>
                        </div>
                    </div>
                    <div class="m-search-btn">
                        <Button class="btn btn-blue">查询</Button>
                        <Button class="btn btn-blue" @click="isModal(1)">新增</Button>
                        <Button class="btn btn-blue" @click="isModal(2)">编辑</Button>
                        <Button class="btn btn-blue" @click="start=!start" v-if="start">启用</Button>
                        <Button class="btn btn-blue" @click="start=!start"  v-if="!start">禁用</Button>
                        <Button class="btn btn-blue">删除</Button>
                    </div>
                </div>
                <div class="main-body">
                    <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
                    <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
                </div>
                <Modal
                        v-model="modal"
                        :footer-hide="true"
                        :styles="{top: '30%'}">
                    <div class="add-member">
                        <p v-if="flag === 1">新增</p>
                        <p v-if="flag === 2">编辑</p>
                        <p>等级名称&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入等级名称，如：普通会员" style="width: 75%" /></p>
                        <p>直推奖励&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入奖励比例，如：8%" style="width: 75%" /></p>
                        <p>间推奖励&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入奖励比例，如：8%" style="width: 75%" /></p>
                        <p>市场补贴&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入奖励比例，如：8%" style="width: 75%" /></p>
                        <p>公排奖励&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入奖励比例，如：8%" style="width: 75%" /></p>
                        <div class="level-btn"><Button class="btn btn-blue">提交</Button></div>
                    </div>
                </Modal>
            </TabPane>

            <TabPane label="升级规则">
                <div class="cc-m-b-10 member-list-search">
                    <div class="m-search-top">
                        <p>状态 &nbsp;&nbsp;
                            <Select v-model="state" style="width:130px">
                                <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                    </div>
                    <div class="m-search-btn">
                        <Button class="btn btn-blue">查询</Button>
                        <Button class="btn btn-blue" @click="isRuleModal(1)">新增</Button>
                        <Button class="btn btn-blue" @click="isRuleModal(2)">编辑</Button>
                        <Button class="btn btn-blue" @click="start=!start" v-if="start">启用</Button>
                        <Button class="btn btn-blue" @click="start=!start"  v-if="!start">禁用</Button>
                        <Button class="btn btn-blue">删除</Button>
                    </div>
                </div>
                <div class="main-body">
                    <Table class="cc-m-t-20" border :columns="ruleTable" :data="tableData"></Table>
                    <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
                </div>
                <Modal
                        v-model="ruleModal"
                        :footer-hide="true"
                        :styles="{top: '30%'}">
                    <div class="add-member">
                        <p v-if="flag === 1">新增</p>
                        <p v-if="flag === 2">编辑</p>
                        <p>升级前等级&nbsp;&nbsp;
                            <Select v-model="level" style="width:70%">
                                <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                        <p>升级后等级&nbsp;&nbsp;
                            <Select v-model="level" style="width:70%">
                                <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                        <p>充值金额&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入充值金额，如：1350" style="width: 70%" /></p>
                        <p>推广类型&nbsp;&nbsp;
                            <Select v-model="level" style="width:70%">
                                <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                        <p>推广会员等级&nbsp;&nbsp;
                            <Select v-model="level" style="width:70%">
                                <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </p>
                        <p>推广数量&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入数量，如：5" style="width: 70%" /></p>
                        <div class="level-btn"><Button class="btn btn-blue">提交</Button></div>
                    </div>
                </Modal>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        data() {
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
                    },
                ],
                start:false,
                tableData: [],
                total: 0,
                modal: false,    //弹框
                ruleModal: false,
                flag: 1,     //1-新增  2-编辑
                table: [
                    {
                        title: "序号",
                        type: "index",
                        align: 'center',
                        width: 60,
                    },
                    {
                        title: "等级名称",
                        align: 'center',
                        key: ""
                    },
                    {
                        title: "直推奖励",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "间推奖励",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "市场补贴",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "公排奖励",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "状态",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "创建时间",
                        align: 'center',
                        key: "",
                    }
                ],
                ruleTable: [
                    {
                        title: "序号",
                        type: "index",
                        align: 'center',
                        width: 60,
                    },
                    {
                        title: "升级前等级",
                        align: 'center',
                        key: ""
                    },
                    {
                        title: "升级后等级",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "充值金额",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "推广类型",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "推广会员等级",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "推广数量",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "状态",
                        align: 'center',
                        key: "",
                    },
                    {
                        title: "创建时间",
                        align: 'center',
                        key: "",
                    }
                ],
            }
        },

        created() {

        },

        methods: {
            //会员等级弹框
            isModal(num) {
                this.modal = true;
                this.flag = num;
            },
            //升级规则弹框
            isRuleModal(num) {
                this.ruleModal = true;
                this.flag = num;
            },
        }
    }
</script>

<style lang="less" scoped>
    /deep/.ivu-tabs-bar {
        margin-bottom: 0;
    }
    .add-member {
        font-size: 14px;
        text-align: right;
        padding-right: 12%;
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
            margin-top: 20px;
        }
    }
</style>