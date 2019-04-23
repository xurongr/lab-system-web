<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>文章名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
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
            <Table class="cc-m-t-20" border :columns="table" :data="tableData" @on-row-click="choiceUser" :highlight-row="true"></Table>
            <div class="page"><Page class="cc-m-t-20" :total="total" :key="total" :current="current" @on-change="changePage"></Page></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                current: 1,
                pageNo: 0,
                tableData: [],
                total: 0,
                articleId: null,
                articleInfo: [],
                keyWord: '',
                phone: null,
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
                        key: 'image',
                        render: (h, params) => {
                            return h('div', [
                                h('img',{
                                    attrs: {
                                        src: params.row.image,
                                        style: 'width: 40px;height: 40px;border-radius: 2px;'
                                    }
                                })
                            ])
                        }
                    },
                    {
                        title: '文章名称',
                        align: 'center',
                        key: 'name'
                    },
                    {
                        title: '简介',
                        align: 'center',
                        key: 'synopsis'
                    },
                    {
                        title: '专栏',
                        align: 'center',
                        key: 'foodTypeId'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'status',
                        render: (h, params) => {
                            return h('p', params.row.status === 0? '新建' : (params.row.status === 1 ? '启用' : '禁用'))
                        }
                    },
                    {
                        title: '创建时间',
                        align: 'center',
                        key: 'createTime',
                        render: (h, params) => {
                            return h("div", [
                                h("p", {},params.row.createTime === null ? '':
                                    this.formatDate(
                                        new Date(params.row.createTime),
                                        "yyyy-MM-dd hh:mm"
                                    )
                                )
                            ]);
                        }
                    },
                    {
                        title: '更新时间',
                        align: 'center',
                        key: 'updateTime',
                        render: (h, params) => {
                            return h("div", [
                                h("p", {},params.row.updateTime === null ? '':
                                    this.formatDate(
                                        new Date(params.row.updateTime),
                                        "yyyy-MM-dd hh:mm"
                                    )
                                )
                            ]);
                        }
                    },
                ]
            };
        },

        created () {
            this.getResourceInfo();
        },

        methods: {
            goVideoList (num) {
                if(num === 1) {
                    this.$router.push({
                        path: '/addArticle',
                        query: {flag: num}
                    })
                } else {
                    this.$router.push({
                        path: '/editArticle',
                        query: {
                            flag: num,
                            articleInfo: this.articleInfo,
                        }
                    })
                }
            },

            choiceUser(row,index) {   //选择表格某一行
                this.articleId = row.id;
                this.articleInfo = row;
            },

            changePage(val) {  //改变页码
                this.pageNo = val - 1;
                this.getResourceInfo();
            },

            getResourceInfo() {   //获取文章列表
                let that = this;
                let url = that.serviceurl + '/herbsfoods/getResourceInfoList';
                let params = {
                    pageNo: that.pageNo,
                    pageSize: 10,
                    iType: 2,
                }
                that
                    .$http(url, params, '', 'get')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            that.tableData = res.data.data.data;
                            that.total = parseInt(res.data.data.total);
                            console.log('-- 文章资源 --',that.tableData)
                        } else {
                            that.$Message.warning(res.data.retMsg);
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
</style>