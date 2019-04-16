<template>
    <div class="main-body video-list">
        <Form :model="formItem" :rules="ruleValidate" :label-width="80">
            <FormItem label="视频名称" prop="input">
                <Input v-model="formItem.input" placeholder="12字以内" :maxlength="12"></Input>
            </FormItem>
            <FormItem label="视频简介"  prop="textarea">
                <Input v-model="formItem.textarea" type="textarea" placeholder="300字以内" :maxlength="300" :autosize="{minRows: 4,maxRows: 5}"></Input>
            </FormItem>
            <FormItem label="视频标签"  prop="checkAllGroup">
                <div class="video-tip">
                    <Button class="btn btn-blue">清热解毒</Button>
                    <Button class="btn btn-blue">滋阴补肾</Button>
                    <Button class="btn btn-blue">止咳平喘</Button>
                    <Button class="btn btn-blue">益气养血</Button>
                    <Button class="btn btn-blue">健脾养胃</Button>
                    <Button class="btn btn-blue">壮阳补肾</Button>
                    <p>没有想要的标签？前往添加</p>
                </div>
            </FormItem>
            <FormItem label="视频主图" prop="imageUrl">
                <div class="logo-img-load">
                    <Input type="hidden" v-model="formItem.imageUrl"></Input>
                    <div class="logo-img"><img :src="formItem.imageUrl" alt></div>
                    <div class="img-upload">
                        <ali-upload v-on:url="getUploadUrl" id="banner" :isImg="true" :maxNum="1"></ali-upload>
                    </div>
                    <p class="img-tips">规格尺寸：750*400</p>
                </div>
            </FormItem>
            <FormItem>
                <RadioGroup v-model="disabledGroup">
                    <Radio label="视频源文件"></Radio>
                    <Radio label="视频链接"></Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="上传视频"  prop="video" v-if="disabledGroup === '视频源文件'">
                <div class="logo-img-load">
                    <Input type="hidden" v-model="formItem.video"></Input>
                    <div class="logo-img"><img :src="formItem.video" alt></div>
                    <div class="img-upload">
                        <ali-upload v-on:url="getUploadUrl"  :isImg="true" :maxNum="1"></ali-upload>
                    </div>
                    <p class="img-tips">文件大小格式</p>
                </div>
            </FormItem>
            <FormItem prop="video" v-if="disabledGroup === '视频链接'">
                <Input v-model="formItem.video" placeholder="http://"></Input>
                <p style="color: red">视频链接</p>
            </FormItem>
            <FormItem label="详情介绍"  prop="textarea" v-if="disabledGroup === '视频源文件'">
                <Input v-model="formItem.textarea" type="textarea"  placeholder="主要用料" :autosize="{minRows: 7,maxRows: 5}"></Input>
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
                    input: '',
                    textarea: '',
                    imageUrl: '',
                    video: '',
                    checkAllGroup: '',
                },
                disabledGroup: '',
                ruleValidate: {
                    input: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ],
                    textarea: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ],
                    imageUrl: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ],
                    checkAllGroup: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ]
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
    .video-list {
        font-size: 14px;
        /deep/ .ivu-input {
            width: 22%;
        }
        .video-tip {
            display: flex;
            button {
                margin-right: 20px;
            }
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