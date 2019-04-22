<template>
    <div class="main-body add-store">
        <Form :model="shop" :label-width="80">
            <FormItem label="店铺名称">
                <Input v-model="shop.shopName"></Input>
            </FormItem>
            <FormItem label="店铺描述">
                <Input v-model="shop.shopDescribe" type="textarea" :autosize="{minRows: 4,maxRows: 5}"></Input>
            </FormItem>
            <FormItem label="负责人">
                <Input v-model="shop.shopowner"></Input>
            </FormItem>
            <FormItem label="联系方式">
                <Input v-model="shop.contactInfo" placeholder="客服号码"></Input>
            </FormItem>
            <FormItem label="店铺logo">
                <div class="logo-img-load">
                    <Input type="hidden" v-model="shop.shopLogo"></Input>
                    <div class="logo-img"><img :src="shop.shopLogo" alt></div>
                    <div class="img-upload">
                        <ali-upload v-on:url="getUploadUrl" id="banner" :isImg="true" :maxNum="1"></ali-upload>
                    </div>
                    <p class="img-tips">规格尺寸：100*100</p>
                </div>
            </FormItem>
            <FormItem label="店铺地址">
                <Input v-model="shop.addr"></Input>
            </FormItem>
            <FormItem label="经纬度">
                <Input v-model="shop.longitude"></Input>
            </FormItem>
            <FormItem>
                <Button class="btn btn-blue" @click="saveShop">保存</Button>
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
                shop: {
                    status: 1,
                    shopName: '',
                    shopDescribe: '',
                    shopowner: '',
                    contactInfo: '',
                    shopLogo: '',
                    addr: '',
                    longitude: '',   //经度
                    latitude: '',    //纬度
                }
            };
        },

        created () {
            this.flag = this.$route.query.flag;
            if(this.flag === 2) {
                this.shop= this.$route.query.shopInfo;
            }
        },

        methods: {
            getUploadUrl (val) {
                this.shop.shopLogo = `${
                    val[0]
                }?x-oss-process=image/resize,m_fill,limit_0,h_390,w_750`;
            },

            saveShop() {
                let that = this;
                let url = that.serviceurl + '/backstage/shop/addOrModifyShop';
                if(that.flag === 2) { that.shop.updateTime = new Date().getTime()};
                let data = that.shop;
                that
                    .$http(url, '', data, 'post')
                    .then(res=> {
                        if(res.data.retCode === 0) {
                            that.flag === 1 ? that.$Message.success('店铺添加成功！') : that.$Message.success('店铺修改成功！');
                            that.$router.push({name: 'storeManagement'})
                        } else {
                            that.flag === 1 ? that.$Message.warning(res.data.retMsg || '店铺添加失败！'): that.$Message.warning(res.data.retMsg || '店铺修改失败！');
                        }
                    })
                    .catch(e=> {
                        that.$Message.error('请求错误')
                    })
            },

        }
    };
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