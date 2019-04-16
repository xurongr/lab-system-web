<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>视频名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
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
                <Button class="btn btn-blue" @click="goVideoList(1)">新增</Button>
                <Button class="btn btn-blue" @click="goVideoList(2)">编辑</Button>
                <Button class="btn btn-blue" @click="start=!start" v-if="start">上架</Button>
                <Button class="btn btn-blue" @click="start=!start"  v-if="!start">下架</Button>
                <Button class="btn btn-blue">删除</Button>
            </div>
        </div>
        <div class="main-body">
            <Table class="cc-m-t-20" border :columns="table" :data="tableData"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total"></Page></div>
        </div>
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
                table: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 60
                    },
                    {
                        title: '视频主图',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '视频名称',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '简介',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '标签',
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
                        title: '更新时间',
                        align: 'center',
                        key: ''
                    },
                ]
            };
        },

        created () {

        },

        methods: {
            goVideoList (num) {
                if(num === 1) {
                    this.$router.push({
                        name: 'addVideo'
                    })
                } else {
                    this.$router.push({
                        path: '/editVideo',
                        query: {}
                    })
                }
            }
        }
    };
</script>

<style lang="less" scoped>
</style>