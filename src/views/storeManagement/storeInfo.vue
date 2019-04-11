<template>
    <div class="main-body add-store">
        <Form :model="formItem" :label-width="80">
            <FormItem label="店铺名称">
                <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem label="店铺描述">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 5}"></Input>
            </FormItem>
            <FormItem label="负责人">
                <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem label="联系方式">
                <Input v-model="formItem.input" placeholder="客服号码"></Input>
            </FormItem>
            <FormItem label="店铺logo">
                <div class="logo-img-load">
                    <Input type="hidden" v-model="formItem.imageUrl"></Input>
                    <div class="logo-img"><img :src="formItem.imageUrl" alt></div>
                    <div class="img-upload">
                        <ali-upload v-on:url="getUploadUrl" id="banner" :isImg="true" :maxNum="1"></ali-upload>
                    </div>
                    <p class="img-tips">规格尺寸：100*100</p>
                </div>
            </FormItem>
            <FormItem label="店铺地址">
                <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem label="经纬度">
                <Input v-model="formItem.input"></Input>
            </FormItem>
            <FormItem>
                <Button class="btn btn-blue">保存</Button>
                <Button class="btn btn-blue" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import aliUpload from "@/views/my-components/ali-upload.vue";
    export default {
        components: {
            aliUpload
        },
        data() {
            return {
                flag: null,   //1-新增店铺  2-编辑店铺
                formItem: {
                    input: '',
                    textarea: '',
                    imageUrl:'',
                }
            }
        },

        created() {
            this.flag = this.$route.query.flag;
        },

        methods: {
            getUploadUrl(val) {
                this.formItem.imageUrl = `${
                    val[0]
                    }?x-oss-process=image/resize,m_fill,limit_0,h_390,w_750`;
            },
        },
    }
</script>

<style lang="less" scoped>
.add-store {
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