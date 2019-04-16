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
                <p>会员总数：152,610</p>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-blue">查询</Button>
                <Button class="btn btn-blue" @click="isLevelSet">等级设置</Button>
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
             v-model="levelSet"
             :footer-hide="true"
             :styles="{top: '30%'}">
            <div class="level-setting">
                <p>等级设置</p>
                <p><span style="color: #fff">*</span>父级账户&nbsp;&nbsp;
                    <Select v-model="level" style="width:75%">
                        <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
                <p>父级账户设置，没有则不设置</p>
                <p><span style="color: red">*</span>账户等级&nbsp;&nbsp;
                    <Select v-model="level" style="width:75%">
                        <Option v-for="item in levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
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
                        title: '店铺名称',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '会员等级',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '复购金额30%',
                        align: 'center',
                        key: '',
                        sortable: 'custom' // 是否可远程排序，需要监听on-sort-change事件
                    },
                    {
                        title: '可提现金额70%',
                        align: 'center',
                        key: '',
                        sortable: 'custom'
                    },
                    {
                        title: '性别',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '生日',
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
                        title: '最后一次登录时间',
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