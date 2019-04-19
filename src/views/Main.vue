<style lang="less">
@import "./main.less";
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <scroll-bar ref="scrollBar">
                <shrinkable-menu 
                    :shrink="shrink"
                    :theme="menuTheme" 
                    :open-names="openedSubmenuArr"
                    :menu-list="menuList"
                    >
                    <div slot="top" class="logo-con">
                        <img src="../images/nav_title.png">
                    </div>
                </shrinkable-menu>
            </scroll-bar>
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="main-header">
                <div class="header-title">
                    <p>百草膳管理系统</p>
                    <span>传承千年草膳文化，弘扬食疗养生之道。</span>
                </div>
                <div class="header-avator-con">
                    <Button>
                        <svg width="15px" height="15px"
                             viewBox="0 0 22 22"
                             version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="首页" transform="translate(-1760.000000, -49.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                    <g id="顶导航" transform="translate(300.000000, 0.000000)">
                                        <g id="Group-2" transform="translate(1460.000000, 49.000000)">
                                            <g id="退出" transform="translate(1.000000, 0.000000)">
                                                <path d="M16.4267424,3.18886504 L16.4267422,3.18886494 C17.1083799,3.67071492 17.7292469,4.23322592 18.2758229,4.86414756 C18.8159171,5.48894184 19.2779112,6.16213403 19.6629073,6.88592628 C20.436771,8.35347826 20.8411461,9.98758602 20.8409936,11.6466758 L20.8409939,11.6467185 C20.850115,13.0332701 20.5706578,14.4065615 20.0203865,15.6792759 L20.0203867,15.6792754 C19.4946269,16.9035661 18.741386,18.0170145 17.8006185,18.9605449 L17.8006182,18.9605451 C16.8566496,19.9005112 15.7433,20.6533203 14.5193488,21.1792176 L14.519348,21.1792179 C13.2468915,21.7303035 11.8734368,22.009779 10.4868121,21.9997716 L10.4868118,21.9997716 C9.10782918,22.0077798 7.74230864,21.7283076 6.47735014,21.1791814 C5.22336372,20.6324872 4.12448607,19.8932949 3.18508068,18.9605089 C2.24569033,18.0277186 1.50649807,16.9343302 0.96640818,15.6792395 C0.426313997,14.424153 0.157917982,13.0799708 0.157917982,11.646682 L0.157917811,11.6465082 C0.157127101,10.8367505 0.253528976,10.0298243 0.445054668,9.24304841 L0.44505437,9.24304962 C0.635924143,8.46777001 0.911860968,7.71595136 1.26784459,7.00128139 L1.26784486,7.00128085 C1.62486832,6.28823939 2.06658543,5.62086088 2.58343135,5.01360217 L2.58343192,5.0136015 C3.10741065,4.39764805 3.6963711,3.8400763 4.34007166,3.35058433 C4.67996776,3.10418619 5.04626388,3.01178823 5.43896004,3.0733883 C5.8305562,3.13498773 6.15065228,3.32748645 6.39705042,3.65088253 C6.64454856,3.97427861 6.73584651,4.33617473 6.67534644,4.7376709 L6.67534647,4.7376707 C6.62122297,5.12586588 6.41257292,5.47573289 6.09675224,5.70786109 L6.0967524,5.70786098 C5.15321771,6.38512661 4.38810666,7.28121945 3.86707988,8.31922534 L3.8670797,8.31922571 C3.35149492,9.35227516 3.08621629,10.4921364 3.09268739,11.6466866 C3.09268739,12.6630749 3.28518525,13.6222653 3.67128162,14.523147 L3.6712817,14.5231472 C4.04129248,15.4037218 4.57845619,16.2042392 5.2530642,16.8804155 L5.25306357,16.8804149 C5.9313712,17.5562862 6.73161354,18.0974933 7.61142765,18.4753974 C8.51896532,18.8692345 9.49860454,19.0696581 10.4878881,19.0638917 C11.5053764,19.0638917 12.4645668,18.8680939 13.3654657,18.4753975 C14.266356,18.0827013 15.0517483,17.5514071 15.7238298,16.880415 L15.7238299,16.8804148 C16.3989858,16.2021695 16.9397825,15.4023568 17.3177124,14.5231464 L17.3177127,14.5231458 C17.712422,13.6158467 17.9132431,12.6360979 17.907307,11.6466854 C17.907307,10.444399 17.6290109,9.30920415 17.0746167,8.23782009 C16.5202225,7.16643173 15.7425302,6.28424145 14.7404441,5.5923385 C14.4120723,5.37689296 14.1896529,5.03308025 14.1277499,4.64524816 L14.1277498,4.64524788 C14.0556886,4.25763923 14.1433613,3.85735907 14.370848,3.53535948 C14.6018461,3.2119634 14.9175421,3.01616532 15.3179383,2.94686524 C15.7183345,2.87646602 16.0879306,2.95786512 16.4267267,3.18886337 L16.4267424,3.18886504 Z M10.4867999,11.7159804 C10.0864037,11.7159804 9.74430762,11.574082 9.45831159,11.2880842 C9.18021315,11.0188417 9.02575536,10.646633 9.03151532,10.2595959 L9.03151532,1.47950166 C9.03151532,1.07910549 9.17341377,0.732609383 9.45831152,0.44001334 C9.74430756,0.146317295 10.0875037,1.71244577e-05 10.4867998,1.71244577e-05 C10.902596,1.71244577e-05 11.2534921,0.146315576 11.5383882,0.438913338 C11.8243842,0.731509382 11.9662844,1.07800549 11.9662844,1.47840166 L11.9662844,10.259613 C11.9662844,10.6600092 11.8243859,11.0032053 11.5383882,11.2881014 C11.2534921,11.5740974 10.903696,11.7159976 10.4867998,11.7159976 L10.4867999,11.7159804 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>退出系统</span>
                    </Button>
                </div>
            </div>
            <div class="tags-con">
                <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                <div><Button @click="backHome">返回首页</Button></div>
            </div>
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
        <Modal
        v-model="modifyModal"
        title="修改密码"
        :loading="loading"
        @on-ok="modifyPwdConfirm"
        @on-cancel="modifyPwdCancel">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="新密码" prop="passwd">
            <Input class="cc-w-300" type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
            <Input class="cc-w-300"  type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
    </Form>
    </Modal>
    </div>
</template>
<script>
import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
import tagsPageOpened from './main-components/tags-page-opened.vue';
import breadcrumbNav from './main-components/breadcrumb-nav.vue';
import scrollBar from '@/views/my-components/scroll-bar/vue-scroller-bars';
import util from '@/libs/util.js';

export default {
    components: {
        shrinkableMenu,
        tagsPageOpened,
        breadcrumbNav,
        scrollBar
    },
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码！'));
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
                callback(new Error('请再次输入密码！'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('两次输入的密码不一致！'));
            } else {
                callback();
            }
        };
        return {
            modifyModal: false,
            loading: true,
            shrink: false,
            userName: '',
            openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
            formCustom: {
                passwd: '',
                passwdCheck: ''
            },
            ruleCustom: {
                passwd: [{ required: true, validator: validatePass, trigger: 'blur' }],
                passwdCheck: [
                    { required: true, validator: validatePassCheck, trigger: 'blur' }
                ]
            }
        };
    },
    computed: {
        menuList () {
            return this.$store.state.app.menuList;
        },
        pageTagsList () {
            return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
        },
        currentPath () {
            return this.$store.state.app.currentPath; // 当前面包屑数组
        },
        avatorPath () {
            return localStorage.avatorImgPath;
        },
        cachePage () {
            return this.$store.state.app.cachePage;
        },
        menuTheme () {
            return this.$store.state.app.menuTheme;
        }
    },
    methods: {
    // 返回首页
        backHome () {
            this.$router.push({
                name: 'home_index'
            });
        },

        init () {
            let pathArr = util.setCurrentPath(this, this.$route.name);
            this.$store.commit('updateMenulist');
            if (pathArr.length >= 2) {
                this.$store.commit('addOpenSubmenu', pathArr[1].name);
            }
            this.userName = this.Cookies.get('user');
            let messageCount = 3;
            this.messageCount = messageCount.toString();
            this.checkTag(this.$route.name);
            this.$store.commit('setMessageCount', 3);
        },
        toggleClick () {
            this.shrink = !this.shrink;
        },
        handleClickUserDropdown (name) {
            if (name === 'loginout') {
                // 退出登录
                this.$store.commit('logout', this);
                this.$store.commit('clearOpenedSubmenu');
                this.$store.commit('clearAllTags');
                this.$router.push({
                    name: 'login'
                });
            }
        },
        checkTag (name) {
            let openpageHasTag = this.pageTagsList.some(item => {
                if (item.name === name) {
                    return true;
                }
            });
            if (!openpageHasTag) {
                //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
                util.openNewPage(
                    this,
                    name,
                    this.$route.params || {},
                    this.$route.query || {}
                );
            }
        },

        beforePush (name) {
            // if (name === 'accesstest_index') {
            //     return false;
            // } else {
            //     return true;
            // }
            return true;
        },
        scrollBarResize () {
            this.$refs.scrollBar.resize();
        },
        // 修改密码
        modifyPwd () {
            this.modifyModal = true;
        },
        // 取消修改密码
        modifyPwdCancel () {
            this.$refs.formCustom.resetFields();
        },
        // 修改密码提交
        modifyPwdConfirm () {
            this.$refs.formCustom.validate(valid => {
                this.loading = false;
                if (valid) {
                    this.$http({
                        url: this.serviceurl + '/weteam-service/mgt/user/passwd/chg',
                        method: 'post',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        data: `newPasswd=${this.formCustom.passwd}`
                    })
                        .then(res => {
                            if (res.data.retCode === 0) {
                                this.modifyModal = false;
                                this.$Message.success(res.data.retMsg || '密码修改成功！');
                            } else {
                                setTimeout(() => {
                                    this.loading = true;
                                }, 200);
                                this.$Message.warning(res.data.retMsg || '密码修改失败！');
                            }
                        })
                        .catch(e => {
                            setTimeout(() => {
                                this.loading = true;
                            }, 200);
                            console.log(e);
                        });
                } else {
                    setTimeout(() => {
                        this.loading = true;
                    }, 200);
                }
            });
        }
    },
    watch: {
        $route (to) {
            this.$store.commit('setCurrentPageName', to.name);
            let pathArr = util.setCurrentPath(this, to.name);
            if (pathArr.length > 2) {
                this.$store.commit('addOpenSubmenu', pathArr[1].name);
            }
            this.checkTag(to.name);
            localStorage.currentPageName = to.name;
        },
        lang () {
            util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
        },
        openedSubmenuArr () {
            setTimeout(() => {
                this.scrollBarResize();
            }, 300);
        }
    },
    mounted () {
        this.init();
        window.addEventListener('resize', this.scrollBarResize);
    },
    created () {
    // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
    },
    dispatch () {
        window.removeEventListener('resize', this.scrollBarResize);
    }
};
</script>
