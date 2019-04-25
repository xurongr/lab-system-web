import Main from "@/views/Main.vue";

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: "/login",
  name: "login",
  meta: {
    title: "Login - 登录"
  },
  component: () => import("@/views/login.vue")
};

export const page404 = {
  path: "/*",
  name: "error-404",
  meta: {
    title: "404-页面不存在"
  },
  component: () => import("@/views/error-page/404.vue")
};

export const page403 = {
  path: "/403",
  meta: {
    title: "403-权限不足"
  },
  name: "error-403",
  component: () => import("@//views/error-page/403.vue")
};

export const page500 = {
  path: "/500",
  meta: {
    title: "500-服务端错误"
  },
  name: "error-500",
  component: () => import("@/views/error-page/500.vue")
};

export const locking = {
  path: "/locking",
  name: "locking",
  component: () =>
    import("@/views/main-components/lockscreen/components/locking-page.vue")
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: "/",
  name: "otherRouter",
  redirect: "/home",
  component: Main,
  children: [
    {
      path: "home",
      title: "首页",
      name: "home_index",
      component: () => import("@/views/home/home.vue")
    },
      {
          path: "addStore",
          title: "新增店铺",
          name: "addStore",
          component: () => import("@/views/storeManagement/storeInfo.vue")
      },
      {
          path: "editStore",
          title: "编辑店铺",
          name: "editStore",
          component: () => import("@/views/storeManagement/storeInfo.vue")
      },
      {
          path: "staffManagement",
          title: "员工管理",
          name: "staffManagement",
          component: () => import("@/views/storeManagement/staffManagement.vue")
      },
      {
          path: "addVideo",
          title: "新增视频",
          name: "addVideo",
          component: () => import("@/views/operationManagement/videoDetail.vue")
      },
      {
          path: "editVideo",
          title: "编辑视频",
          name: "editVideo",
          component: () => import("@/views/operationManagement/videoDetail.vue")
      },
      {
          path: "addArticle",
          title: "新增文章",
          name: "addArticle",
          component: () => import("@/views/operationManagement/articleDetail.vue")
      },
      {
          path: "editArticle",
          title: "编辑文章",
          name: "editArticle",
          component: () => import("@/views/operationManagement/articleDetail.vue")
      },
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: "/systemManagement",
        icon: "i iconfont icon-my_shezhi_ico",
        name: "systemManagement",
        access: 0,
        title: "系统管理",
        component: Main,
        children: [
            {
                path: "editPassword",
                icon: "i iconfont icon-guanli",
                title: "修改密码",
                name: "editPassword",
                access: 0,
                component: () => import("@/views/systemManagement/editPassword")
            },
            {
                path: "rewardSettings",
                icon: "i iconfont icon-guanli",
                title: "奖励设置",
                name: "rewardSettings",
                access: 0,
                component: () => import("@/views/systemManagement/rewardSettings")
            }
        ]
    },
    {
        path: "/memberManagement",
        icon: "i iconfont icon-kehuhuiyuanguanli",
        name: "memberManagement",
        access: 0,
        title: "会员管理",
        component: Main,
        children: [
            {
                path: "memberList",
                icon: "i iconfont icon-guanli",
                title: "会员列表",
                name: "memberList",
                access: 0,
                component: () => import("@/views/memberManagement/index")
            },
            {
                path: "memberLevel",
                icon: "i iconfont icon-guanli",
                title: "会员等级管理",
                name: "memberLevel",
                access: 0,
                component: () => import("@/views/memberManagement/memberLevel")
            },
            {
                path: "memberCard",
                icon: "i iconfont icon-guanli",
                title: "会员卡管理",
                name: "memberCard",
                access: 0,
                component: () => import("@/views/memberManagement/memberCard")
            },
        ]
    },
    // {
    //     path: "/aaManagement",
    //     icon: "i iconfont icon-icon--",
    //     name: "aaManagement",
    //     access: 0,
    //     title: "菜品管理",
    //     component: Main,
    //     children: [
    //         {
    //             path: "rechargeOrder",
    //             title: "充值订单",
    //             name: "rechargeOrder",
    //             access: 0,
    //             component: () => import("@/views/orderManagement/rechargeOrder")
    //         },
    //         {
    //             path: "",
    //             title: "",
    //             name: "",
    //             access: 0,
    //         },
    //     ]
    // },
    {
        path: "/orderManagement",
        icon: "i iconfont icon-dingdan",
        name: "orderManagement",
        access: 0,
        title: "订单管理",
        component: Main,
        children: [
            {
                path: "rechargeOrder",
                icon: "i iconfont icon-guanli",
                title: "充值订单",
                name: "rechargeOrder",
                access: 0,
                component: () => import("@/views/orderManagement/rechargeOrder")
            },
            {
                path: "consumeOrder",
                icon: "i iconfont icon-guanli",
                title: "消费订单",
                name: "consumeOrder",
                access: 0,
                component: () => import("@/views/orderManagement/consumeOrder")
            },
            // {
            //     path: "customizedOrder",
            //     icon: "i iconfont icon-guanli",
            //     title: "定制订单",
            //     name: "customizedOrder",
            //     access: 0,
            //     component: () => import("@/views/orderManagement/customizedOrder")
            // },
        ]
    },
    {
        path: "/storeManagement",
        icon: "i iconfont icon-dianpuguanli",
        name: "storeManagement",
        access: 0,
        title: "门店管理",
        component: Main,
        children: [
            {
                path: "storeList",
                icon: "i iconfont icon-guanli",
                title: "门店列表",
                name: "storeList",
                access: 0,
                component: () => import("@/views/storeManagement/index")
            },
            {
                path: "storeData",
                icon: "i iconfont icon-guanli",
                title: "门店数据",
                name: "storeData",
                access: 0,
                component: () => import("@/views/storeManagement/storeData")
            },
        ]
    },
    {
        path: "/financialManagement",
        icon: "i iconfont icon-yunliankeji-",
        name: "financialManagement",
        access: 0,
        title: "财务管理",
        component: Main,
        children: [
            {
                path: "dataSum",
                icon: "i iconfont icon-guanli",
                title: "数据汇总",
                name: "dataSum",
                access: 0,
                component: () => import("@/views/financialManagement/index")
            },
            {
                path: "cashWithdrawal",
                icon: "i iconfont icon-guanli",
                title: "提现管理",
                name: "cashWithdrawal",
                access: 0,
                component: () => import("@/views/financialManagement/cashWithdrawal")
            },
        ]
    },
    {
        path: "/operationManagement",
        icon: "i iconfont icon-gerenhaoyunyinggongju",
        name: "operationManagement",
        access: 0,
        title: "运营管理",
        component: Main,
        children: [
            {
                path: "videoManage",
                icon: "i iconfont icon-guanli",
                title: "视频管理",
                name: "videoManage",
                access: 0,
                component: () => import("@/views/operationManagement/index")
            },
            {
                path: "articleManage",
                icon: "i iconfont icon-guanli",
                title: "文章管理",
                name: "articleManage",
                access: 0,
                component: () => import("@/views/operationManagement/articleManage")
            },
            {
                path: "extensionManage",
                icon: "i iconfont icon-guanli",
                title: "素材管理（推广）",
                name: "extensionManage",
                access: 0,
                component: () => import("@/views/operationManagement/extensionManage")
            },
            {
                path: "uploadBanner",
                icon: "i iconfont icon-guanli",
                title: "轮播图管理",
                name: "uploadBanner",
                access: 0,
                component: () => import("@/views/operationManagement/uploadBanner")
            },
        ]
    },
    // {
    //     path: "/operationManagement",
    //     icon: "i iconfont icon-wenjian",
    //     name: "operationManagement",
    //     access: 0,
    //     title: "配置管理",
    //     component: Main,
    //     children: [
    //         {
    //             path: "videoManage",
    //             title: "视频管理",
    //             name: "videoManage",
    //             access: 0,
    //             component: () => import("@/views/operationManagement/index")
    //         },
    //         {
    //             path: "articleManage",
    //             title: "文章管理",
    //             name: "articleManage",
    //             access: 0,
    //             component: () => import("@/views/operationManagement/articleManage")
    //         },
    //     ]
    // },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  locking,
  ...appRouter,
  page500,
  page403,
  page404
];
