<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con" v-show="formShow == 0">
            <Card :bordered="false">
                <div class="login-con-header" slot="title">
                    <img src="../images/login_title.png" alt="">
                </div>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="username">
                            <Input v-model="form.username" placeholder="请输入百草膳餐饮管理系统登录账号">
                                <span slot="prepend">登录账号</span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">登录密码</span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" style="margin-top: 15px" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
                <p class="login-bottom">百草膳餐饮管理系统 V 1.0.0</p>
            </Card>
        </div>
    </div>
</template>

<script>
import config from '@/utils/config.js';

export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码！'));
            } else {
                if (this.registerForm.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.registerForm.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码！'));
            } else if (value !== this.registerForm.newPasswd) {
                callback(new Error('两次密码输入不一致！'));
            } else {
                callback();
            }
        };
        return {
            formShow: 0,
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
            },
        };
    },
    created () {

    },
    methods: {
        // 用户登入
        login () {
            let that = this;
            let url = that.serviceurl + '/backstage/admin/login';
            let data = that.form;
            that
                .$http(url, '', data, "post")
                .then(res=> {
                    console.log(res)
                    if (res.data.retCode === 0) {
                        that.Cookies.set('user', that.form.username);
                        that.Cookies.set('token', res.data.data);
                        let access = 0;
                        that.Cookies.set('access', access);
                        that.$axios.defaults.headers.common['Authorization'] = res.data.data;
                        that.$router.push({
                            name: 'home_index'
                        });
                    } else {
                        that.$Message.warning(res.data.retMsg || '用户名或密码错误！');
                    }
                })
                .catch(e => {
                    that.$Message.warning('用户名或密码错误！');
                })
        },
        // 登录
        handleSubmit () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.login();
                }
            });
        },
    }
};
</script>

<style lang="less">
@import "./login.less";
</style>
