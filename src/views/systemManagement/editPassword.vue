<template>
    <div class="main-body edit-pwd">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100">
            <FormItem label="旧密码：" prop="passPwd">
                <Input type="password" v-model="formCustom.passPwd"></Input>
            </FormItem>
            <FormItem label="新密码：" prop="pwd">
                <Input type="password" v-model="formCustom.pwd"></Input>
            </FormItem>
            <FormItem label="新密码确认：" prop="passwdCheck">
                <Input type="password" v-model="formCustom.passwdCheck"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data () {
            const valiPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入旧密码'));
                } else {
                    if (this.formCustom.pwd !== '') {
                        this.$refs.formCustom.validateField('pwd');
                    }
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value === this.formCustom.passPwd) {
                    callback(new Error('新旧密码不能一致，请重新设置'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.pwd) {
                    callback(new Error('密码不一致，请重新输入!'));
                } else {
                    callback();
                }
            };
            return {
                formCustom: {
                    passPwd: '',
                    pwd: '',
                    passwdCheck: ''
                },
                ruleCustom: {
                    passPwd: [
                        {required: true, validator: valiPass, trigger: 'blur' }
                    ],
                    pwd: [
                        {required: true, validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        {required: true, validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            };
        },

        created () {

        },

        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            }
        }
    };
</script>

<style lang="less" scoped>
.edit-pwd {
    /deep/ .ivu-input {
        width: 300px;
    }
    /deep/ .ivu-form-item-error-tip {
        top: 5px;
        left: 310px;
    }
    button {
        border-radius: 20px;
        width: 100px;
    }
}
</style>