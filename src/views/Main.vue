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
                        <h2 style="color: hsla(0,0%,100%,.7);">百草膳</h2>
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
                    <Button>退出系统</Button>
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
import shrinkableMenu from "./main-components/shrinkable-menu/shrinkable-menu.vue";
import tagsPageOpened from "./main-components/tags-page-opened.vue";
import breadcrumbNav from "./main-components/breadcrumb-nav.vue";
import scrollBar from "@/views/my-components/scroll-bar/vue-scroller-bars";
import util from "@/libs/util.js";

export default {
  components: {
    shrinkableMenu,
    tagsPageOpened,
    breadcrumbNav,
    scrollBar
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码！"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("两次输入的密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      modifyModal: false,
      loading: true,
      shrink: false,
      userName: "",
      openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
      formCustom: {
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        passwd: [{ required: true, validator: validatePass, trigger: "blur" }],
        passwdCheck: [
          { required: true, validator: validatePassCheck, trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    },
    pageTagsList() {
      return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
    },
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    },
    avatorPath() {
      return localStorage.avatorImgPath;
    },
    cachePage() {
      return this.$store.state.app.cachePage;
    },
    menuTheme() {
      return this.$store.state.app.menuTheme;
    }
  },
  methods: {
    //返回首页
    backHome() {
      this.$router.push({
          name: 'home_index'
      })
    },

    init() {
      let pathArr = util.setCurrentPath(this, this.$route.name);
      this.$store.commit("updateMenulist");
      if (pathArr.length >= 2) {
        this.$store.commit("addOpenSubmenu", pathArr[1].name);
      }
      this.userName = this.Cookies.get("user");
      let messageCount = 3;
      this.messageCount = messageCount.toString();
      this.checkTag(this.$route.name);
      this.$store.commit("setMessageCount", 3);
    },
    toggleClick() {
      this.shrink = !this.shrink;
    },
    handleClickUserDropdown(name) {
      if (name === "loginout") {
        // 退出登录
        this.$store.commit("logout", this);
        this.$store.commit("clearOpenedSubmenu");
        this.$store.commit("clearAllTags");
        this.$router.push({
          name: "login"
        });
      }
    },
    checkTag(name) {
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

    beforePush(name) {
      // if (name === 'accesstest_index') {
      //     return false;
      // } else {
      //     return true;
      // }
      return true;
    },
    scrollBarResize() {
      this.$refs.scrollBar.resize();
    },
    //修改密码
    modifyPwd() {
      this.modifyModal = true;
    },
    //取消修改密码
    modifyPwdCancel() {
      this.$refs.formCustom.resetFields();
    },
    //修改密码提交
    modifyPwdConfirm() {
      this.$refs.formCustom.validate(valid => {
        this.loading = false;
        if (valid) {
          this.$http({
            url: this.serviceurl + "/weteam-service/mgt/user/passwd/chg",
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: `newPasswd=${this.formCustom.passwd}`
          })
            .then(res => {
              if (res.data.retCode === 0) {
                this.modifyModal = false;
                this.$Message.success(res.data.retMsg || "密码修改成功！");
              } else {
                setTimeout(() => {
                  this.loading = true;
                }, 200);
                this.$Message.warning(res.data.retMsg || "密码修改失败！");
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
    $route(to) {
      this.$store.commit("setCurrentPageName", to.name);
      let pathArr = util.setCurrentPath(this, to.name);
      if (pathArr.length > 2) {
        this.$store.commit("addOpenSubmenu", pathArr[1].name);
      }
      this.checkTag(to.name);
      localStorage.currentPageName = to.name;
    },
    lang() {
      util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
    },
    openedSubmenuArr() {
      setTimeout(() => {
        this.scrollBarResize();
      }, 300);
    }
  },
  mounted() {
    this.init();
    window.addEventListener("resize", this.scrollBarResize);
  },
  created() {
    // 显示打开的页面的列表
    this.$store.commit("setOpenedList");
  },
  dispatch() {
    window.removeEventListener("resize", this.scrollBarResize);
  }
};
</script>
