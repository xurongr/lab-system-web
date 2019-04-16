<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con" v-show="formShow == 0">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="username">
                            <Input v-model="form.username" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                        <FormItem class="cc-text-center">
                            <Button type="text" @click="formShow=1">第一次登陆，立即注册</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
        <div class="login-con" v-show="formShow == 1">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    注册
                </p>
                <div class="form-con">
                    <Form ref="registerForm" :model="registerForm" :rules="registerRules" :label-width="80">
                        <FormItem label="手机号" prop="phone">
                            <Input v-model="registerForm.phone" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="邀请码" prop="inviteCode">
                            <Input v-model="registerForm.inviteCode" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="设置密码" prop="newPasswd">
                            <Input type="password" v-model="registerForm.newPasswd" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="确认密码" prop="passwdCheck">
                            <Input type="password" v-model="registerForm.passwdCheck" placeholder=""></Input>
                        </FormItem>
                        <div class="cc-m-b-20">
                            <Button type="primary" long @click="registerSubmit">注册</Button>
                        </div>
                        <div class="cc-text-center">
                          <Button type="text" @click="formShow=0">登陆</Button>
                        </div>
                    </Form>
                </div>
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
                clientId: '',
                password: '',
                username: ''
            },
            registerForm: {
                phone: '',
                inviteCode: '',
                newPasswd: '',
                passwdCheck: ''
            },
            rules: {
                username: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
            },
            registerRules: {
                phone: [{ required: true, message: '手机号不能为空', trigger: 'blur' }],
                inviteCode: [
                    { required: true, message: '邀请码不能为空', trigger: 'blur' }
                ],
                newPasswd: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { required: true, validator: validatePassCheck, trigger: 'blur' }
                ]
            }
        };
    },
    created () {
        let url = config.loginUrl;
        console.log(url);
        const code = url
            .split('?')[1]
            .split('=')[1]
            .split('#')[0];
        this.getBaseInfo(code);
    },
    methods: {
    // 获取团队后台应用基本信息
        getBaseInfo (code) {
            this.$http({
                url: this.serviceurl + '/weteam-service/mgt/company/app/show',
                method: 'get',
                params: {
                    code
                }
            })
                .then(res => {
                    if (res.data.retCode === 0) {
                        this.form.clientId = res.data.data.appKey;
                        window.document.title = res.data.data.name;
                        this.Cookies.set('name', res.data.data.name);
                        if (!res.data.data.appKey) {
                            this.$Message.warning('appKey不存在！');
                        }
                    } else {
                        this.$Message.warning(res.data.retMsg || '获取团队信息失败！');
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },
        // 融创平台用户登入
        login () {
            if (this.form.clientId) {
                this.$http({
                    url: this.serviceurl + '/weteam-service/mgt/login',
                    method: 'post',
                    data: this.form
                })
                    .then(res => {
                        if (res.data.retCode === 0) {
                            console.log(res.data.data);
                            this.Cookies.set('user', this.form.username);
                            this.Cookies.set('token', res.data.data.authToken);
                            let access = res.data.data.isAdmin ? 0 : '';
                            this.Cookies.set('access', access);
                            this.Cookies.set('clientId', this.form.clientId);
                            this.$http.defaults.headers.common['Authorization'] =
                res.data.data.authToken;
                            this.$http.defaults.headers.common[
                                'clientId'
                            ] = this.form.clientId;
                            this.$router.push({
                                name: 'home_index'
                            });
                        } else {
                            this.$Message.warning(res.data.retMsg || '用户名或密码错误！');
                        }
                    })
                    .catch(e => {
                        this.$Message.warning('用户名或密码错误！');
                        console.log(e);
                    });
            } else {
                this.$Message.warning('appKey无效！');
            }
        },
        // 登录
        handleSubmit () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.login();
                }
            });
        },
        // 用户注册
        register () {
            delete this.registerForm.passwdCheck;
            this.$http({
                url: this.serviceurl + '/weteam-service/mgt/user/regist',
                headers: { clientId: this.form.clientId },
                method: 'post',
                data: this.registerForm
            })
                .then(res => {
                    if (res.data.retCode === 0) {
                        this.formShow = 0;
                        this.$Message.success(res.data.retMsg || '注册成功！');
                    } else {
                        this.registerForm.passwdCheck = this.registerForm.newPasswd;
                        this.$Message.warning(res.data.retMsg);
                        if (res.data.retMsg == '请直接登录') {
                            this.formShow = 0;
                        }
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },
        registerSubmit () {
            this.$refs.registerForm.validate(valid => {
                if (valid) {
                    this.register();
                } else {
                    // this.$Message.error("Fail!");
                }
            });
        }
    }
};
</script>

<style lang="less">
@import "./login.less";
</style>
