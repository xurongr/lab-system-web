<template>
    <div class="main-body banner">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="150">
            <FormItem label="推广会员可提现比例：" prop="resKey">
                <div style="position: relative;">
                    <Input  v-model="formCustom.resKey" placeholder="示例：70%，不设置，默认100%"></Input>
                    <p class="tips">提示：可提现比例为会员推广收益可提现部分，不可提现部分设置单独账户</p>
                </div>
            </FormItem>
            <FormItem label="推广会员收益条件：" prop="value">
                <div style="position: relative;">
                    <Input v-model="formCustom.value" placeholder="示例：充值卡余额大于10，不设置，默认不做限制"></Input>
                    <p class="tips">提示：充值卡余额应大于多少，推广会员才能产生推广收益，此为触发阈值设置</p>
                </div>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')" class="btn btn-blue">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formCustom: {
                    resKey: '',
                    value: ''
                },
                ruleCustom: {
                    resKey: [
                        {required: true, trigger: 'blur' }
                    ],
                    value: [
                        {required: true, trigger: 'blur' }
                    ]
                }
            }
        },

        created() {

        },

        methods: {},
    }
</script>

<style lang="less" scoped>

</style>