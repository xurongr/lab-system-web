<template>
    <div>
        <div class="cc-m-b-10 member-list-search">
            <div class="m-search-top">
                <div class="m-search-top-left">
                    <p>素材名称 &nbsp;&nbsp;<Input v-model="keyWord" placeholder="关键字模糊搜索" style="width: 110px" /></p>
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

        <Modal
                v-model="modal1"
                :footer-hide="true"
                :styles="{top: '30%'}"
               >
            <div class="extent-modal">
                <p v-if="flag === 1">新增</p>
                <p v-if="flag === 2">编辑</p>
                <p>素材名称&nbsp;&nbsp;<Input v-model="keyWord" placeholder="输入素材名称，如：百草品客（15字）" :maxlength="15"/></p>
                <p>素材简介&nbsp;&nbsp;<Input v-model="keyWord" type="textarea" placeholder="输入简介，30字" :maxlength="30" :autosize="{minRows: 4,maxRows: 5}"></Input></p>
                <div class="extent-img">素材图片&nbsp;&nbsp;
                    <div class="logo-img-load">
                        <Input type="hidden" v-model="imageUrl"></Input>
                        <div class="logo-img"><img :src="imageUrl" alt></div>
                        <div class="img-upload">
                            <ali-upload v-on:url="getUploadUrl" id="banner" :isImg="true" :maxNum="1"></ali-upload>
                        </div>
                         <p class="img-tips">规格尺寸：750*1334,100KB,<span style="color:blue;">点击预览</span></p>
                    </div>
                </div>
                <div class="level-btn"><Button class="btn btn-blue">提交</Button></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import aliUpload from '@/views/my-components/ali-upload.vue';
    export default {
        components: {
            aliUpload
        },
        data () {
            return {
                keyWord: '',
                imageUrl: '',
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
                tableData: [],
                total: 0,
                modal1: false,
                flag: 1,
                table: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 60
                    },
                    {
                        title: '素材主图',
                        align: 'center',
                        key: ''
                    },
                    {
                        title: '素材名称',
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
                this.flag = num;
                this.modal1 =  true;
            },
            getUploadUrl (val) {
                this.formItem.imageUrl = `${
                    val[0]
                    }?x-oss-process=image/resize,m_fill,limit_0,h_390,w_750`;
            }
        }
    };
</script>

<style lang="less" scoped>
    .extent-modal {
        font-size: 14px;
        p{
            padding-top: 10px;
            &:nth-child(1) {
                text-align: center;
                padding-top: 0;
                font-weight: 600;
                letter-spacing: 1px;
            }
            /deep/.ivu-input-wrapper {
                width: 75%;
            }
        }
        .extent-img {
            display: flex;
            margin-top: 10px;
        }
        .logo-img-load {
            position: relative;
            margin-top: -20px;
            .logo-img {
                width: 100px;
                height: 160px;
                border-radius: 5px;
                border: 1px solid #4444445e;
                background-color: #ccc;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }
            .img-upload {
                position: absolute;
                top: 62px;
                left: 20px;
            }
            /deep/ .ivu-btn {
                width: 85%;
                background: #fff;
                border-color: blue;
                border-radius: 20px;
                height: 23px;
                color: #444;
                line-height: 13px;
                padding-left: 5px;
            }
            .img-tips {
                position: absolute;
                bottom: -7px;
                left: 105px;
                width: 210px;
                font-size: 12px;
            }
        }
        .level-btn {
            text-align: center;
            margin-top: 20px;
        }
    }
</style>