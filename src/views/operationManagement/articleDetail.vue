<template>
    <div class="main-body article-list">
        <Form :model="formItem" :rules="ruleValidate" :label-width="80">
            <FormItem label="文章专栏" prop="title">
                <Select v-model="formItem.title" style="width:130px">
                    <Option v-for="item in sortList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <span style="color: blue">没有想要的类型？前往添加</span>
            </FormItem>
            <FormItem label="文章名称" prop="input">
                <Input v-model="formItem.name" placeholder="12字以内" :maxlength="12"></Input>
            </FormItem>
            <FormItem label="文章简介"  prop="textarea">
                <Input v-model="formItem.synopsis" type="textarea" placeholder="30字以内" :maxlength="30" :autosize="{minRows: 4,maxRows: 5}"></Input>
            </FormItem>
            <FormItem label="文章主图" prop="imageUrl">
                <div class="logo-img-load">
                    <Input type="hidden" v-model="formItem.image"></Input>
                    <div class="logo-img"><img :src="formItem.image" alt></div>
                    <div class="img-upload">
                        <ali-upload v-on:url="getUploadUrl" id="banner" :isImg="true" :maxNum="1"></ali-upload>
                    </div>
                    <p class="img-tips">规格尺寸：750*400</p>
                </div>
            </FormItem>
            <FormItem>
                <RadioGroup v-model="disabledGroup">
                    <Radio label="图文编辑"></Radio>
                    <Radio label="文章链接"></Radio>
                </RadioGroup>
            </FormItem>
            <FormItem prop="video" v-if="disabledGroup === '文章链接'">
                <Input v-model="formItem.url" placeholder="http://"></Input>
                <p style="color: red">文章链接</p>
            </FormItem>
            <FormItem label="文章详情"  prop="textarea" v-if="disabledGroup === '图文编辑'">
                <Input v-model="formItem.details" type="textarea"  placeholder="主要用料" :autosize="{minRows: 7,maxRows: 5}"></Input>
            </FormItem>
            <FormItem>
                <Button class="btn btn-blue">保存</Button>
                <Button class="btn btn-blue" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
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
                flag: null, // 1-新增店铺  2-编辑店铺
                formItem: {
                    title: '四季型',
                    synopsis: '',
                    type: 2,
                    details: '',
                    image: '',
                    resType: 1,
                    url: '',
                },
                disabledGroup: '',
                sortList: [
                    {
                        value: '四季型',
                        label: '四季型'
                    },
                    {
                        value: '功效型',
                        label: '功效型'
                    },
                    {
                        value: '体质型',
                        label: '体质型'
                    },
                ],
                ruleValidate: {
//                    title: [
//                        { required: true, message: '不能为空', trigger: 'blur' }
//                    ],
//                    input: [
//                        { required: true, message: '不能为空', trigger: 'blur' }
//                    ],
//                    textarea: [
//                        { required: true, message: '不能为空', trigger: 'blur' }
//                    ],
//                    imageUrl: [
//                        { required: true, message: '不能为空', trigger: 'blur' }
//                    ],
//                    checkAllGroup: [
//                        { required: true, message: '不能为空', trigger: 'blur' }
//                    ]
                },
            };
        },

        created () {
            this.flag = this.$route.query.flag;
        },

        methods: {
            getUploadUrl (val) {
                this.formItem.imageUrl = `${
                    val[0]
                    }?x-oss-process=image/resize,m_fill,limit_0,h_390,w_750`;
            }
        }
    };
</script>

<style lang="less" scoped>
    .article-list {
        font-size: 14px;
        /deep/ .ivu-input {
            width: 22%;
        }
        .logo-img-load {
            position: relative;
            margin-top: -20px;
            .logo-img {
                width: 100px;
                height: 100px;
                border-radius: 5px;
                border: 1px solid #4444445e;
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
                border-color: #4444445e;
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
            }
        }
    }
</style>