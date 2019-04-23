<template>
    <div class="main-body video-list">
        <Form :model="formItem" :rules="ruleValidate" :label-width="80">
            <FormItem label="视频名称" prop="input">
                <Input v-model="formItem.name" placeholder="12字以内" :maxlength="12"></Input>
            </FormItem>
            <FormItem label="视频简介"  prop="textarea">
                <Input v-model="formItem.synopsis" type="textarea" placeholder="300字以内" :maxlength="300" :autosize="{minRows: 4,maxRows: 5}"></Input>
            </FormItem>
            <!--<FormItem label="视频标签"  prop="checkAllGroup">-->
                <!--<div class="video-tip">-->
                    <!--<Button class="btn btn-blue">清热解毒</Button>-->
                    <!--<Button class="btn btn-blue">滋阴补肾</Button>-->
                    <!--<Button class="btn btn-blue">止咳平喘</Button>-->
                    <!--<Button class="btn btn-blue">益气养血</Button>-->
                    <!--<Button class="btn btn-blue">健脾养胃</Button>-->
                    <!--<Button class="btn btn-blue">壮阳补肾</Button>-->
                    <!--<p>没有想要的标签？前往添加</p>-->
                <!--</div>-->
            <!--</FormItem>-->
            <FormItem label="视频主图" prop="imageUrl">
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
                <RadioGroup v-model="disabledGroup" @on-change="changeRodio">
                    <Radio label="视频源文件"></Radio>
                    <Radio label="视频链接"></Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="上传视频"  prop="video" v-if="disabledGroup === '视频源文件'">
                <div class="logo-img-load">
                    <Input type="hidden" v-model="formItem.video"></Input>
                    <div class="logo-img"><video :src="formItem.video"></video></div>
                    <div class="img-upload">
                        <video-upload v-on:url="getVideoUploadUrl"  id="banner1" :isImg="true" :maxNum="1"></video-upload>
                    </div>
                    <p class="img-tips">文件大小格式</p>
                </div>
            </FormItem>
            <FormItem prop="video" v-if="disabledGroup === '视频链接'">
                <Input v-model="formItem.url" placeholder="http://"></Input>
                <p style="color: red">视频链接</p>
            </FormItem>
            <FormItem label="详情介绍"  prop="textarea" v-if="disabledGroup === '视频源文件'">
                <Input v-model="formItem.details" type="textarea"  placeholder="主要用料" :autosize="{minRows: 7,maxRows: 5}"></Input>
            </FormItem>
            <FormItem>
                <Button class="btn btn-blue" @click="saveOperation">保存</Button>
                <Button class="btn btn-blue" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import aliUpload from '@/views/my-components/ali-upload.vue';
    import videoUpload from '@/views/my-components/video-upload.vue';
    export default {
        components: {
            aliUpload,
            videoUpload
        },
        data () {
            return {
                flag: null, // 1-新增店铺  2-编辑店铺
                formItem: {
                    name: '',
                    synopsis: '',
                    type: 1,
                    details: '',
                    image: '',
                    resType: 1,
                    video: '',
                    url: '',
                },
                disabledGroup: '',
                ruleValidate: {
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
            if(this.flag === 2) {
                this.formItem = this.$route.query.videoInfo;
                this.formItem.resType === 1 ? this.disabledGroup='视频源文件' : this.disabledGroup='视频链接'
            }
        },

        methods: {
            getUploadUrl (val) {
                this.formItem.image = val[0];
//                this.formItem.image = `${
//                    val[0]
//                    }?x-oss-process=image/resize,m_fill,limit_0,h_390,w_750`;
            },

            getVideoUploadUrl (val) {
                this.formItem.video = val[0];
            },

            changeRodio(val) {
                if(val === '视频源文件') {
                    this.formItem.resType = 1;
                } else {
                    this.formItem.resType = 2;
                }
            },

            saveOperation() {
                if(this.flag === 1) {
                    this.addOperation();
                } else {
                    this.editOperation();
                }
            },

            addOperation() {   //保存视频信息
                let that = this;
                let url= that.serviceurl + '/herbsfoods/operationMgtAdd';
                that.formItem.createTime = new Date().getTime();
                let data = that.formItem;
                that
                    .$http(url, '', data, 'post')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            that.$Message.success('视频添加成功！');
                            that.$router.push({name: 'videoManage'});
                        } else {
                            that.$Message.warning(res.data.retMsg);
                        }
                    })
                    .catch(e => {
                        that.$Message.error('请求错误');
                    })
            },

            editOperation() {   //修改视频信息
                let that = this;
                let url= that.serviceurl + '/herbsfoods/operationMgtEdit';
                that.formItem.updateTime = new Date().getTime();
                let data = that.formItem;
                that
                    .$http(url, '', data, 'post')
                    .then(res => {
                        if(res.data.retCode === 0) {
                            that.$Message.success('修改成功！');
                            that.$router.push({name: 'videoManage'});
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
                video {
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