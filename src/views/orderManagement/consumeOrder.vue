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
                    <p>
                        支付方式 &nbsp;&nbsp;
                        <Select v-model="state" style="width:130px">
                            <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                    <p>时间 &nbsp;&nbsp;<DatePicker type="date" placeholder="选择时间" style="width: 130px;color:#444"></DatePicker></p>
                </div>
            </div>
            <div class="m-search-btn">
                <Button class="btn btn-blue">查询</Button>
                <Button class="btn btn-blue" icon="md-download" :loading="exportLoading" @click="exportExcel">导出excel</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
        </div>
    </div>
</template>

<script>
    import excel from '@/libs/excel';
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
                exportLoading: false,
                table: [
                    {
                        type: 'selection',
                        width: 60
                    },
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 70
                    },
                    {
                        title: '时间',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '店铺名称',
                        align: 'center',
                        key: ''
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
                        title: '会员等级',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '总额',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '现金支付',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '充值卡',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '支付方式',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '推广会员',
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
            },
            exportExcel () {
                if (this.tableData.length) {
                    this.exportLoading = true;
                    const params = {
                        title: ['会员名称', '手机号码', '店铺名称'],
                        key: ['category1', 'category2', 'category3'],
                        data: this.tableData,
                        autoWidth: true,
                        filename: '充值订单'
                    };
                    excel.export_array_to_excel(params);
                    this.exportLoading = false;
                } else {
                    this.$Message.info('表格数据不能为空！');
                }
            }
        }
    };
</script>

<style lang="less" scoped>

</style>