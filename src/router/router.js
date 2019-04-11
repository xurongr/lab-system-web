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
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: "/systemManagement",
        // icon: "ios-folder-outline",
        name: "systemManagement",
        access: 0,
        title: "系统管理",
        component: Main,
        children: [
            {
                path: "editPassword",
                title: "修改密码",
                name: "editPassword",
                access: 0,
                component: () => import("@/views/systemManagement/editPassword")
            },
            {
                path: "rewardSettings",
                title: "奖励设置",
                name: "rewardSettings",
                access: 0,
                component: () => import("@/views/systemManagement/rewardSettings")
            }
        ]
    },
    {
        path: "/memberManagement",
        name: "memberManagement",
        access: 0,
        title: "会员管理",
        component: Main,
        children: [
            {
                path: "memberList",
                title: "会员列表",
                name: "memberList",
                access: 0,
                component: () => import("@/views/memberManagement/index")
            },
            {
                path: "memberLevel",
                title: "会员等级管理",
                name: "memberLevel",
                access: 0,
                component: () => import("@/views/memberManagement/memberLevel")
            },
            {
                path: "memberCard",
                title: "会员卡管理",
                name: "memberCard",
                access: 0,
                component: () => import("@/views/memberManagement/memberCard")
            },
        ]
    },
    {
        path: "/orderManagement",
        name: "orderManagement",
        access: 0,
        title: "订单管理",
        component: Main,
        children: [
            {
                path: "rechargeOrder",
                title: "充值订单",
                name: "rechargeOrder",
                access: 0,
                component: () => import("@/views/orderManagement/rechargeOrder")
            },
            {
                path: "consumeOrder",
                title: "消费订单",
                name: "consumeOrder",
                access: 0,
                component: () => import("@/views/orderManagement/consumeOrder")
            },
            // {
            //     path: "customizedOrder",
            //     title: "定制订单",
            //     name: "customizedOrder",
            //     access: 0,
            //     component: () => import("@/views/orderManagement/customizedOrder")
            // },
        ]
    },
    {
        path: "/storeManagement",
        name: "storeManagement",
        access: 0,
        title: "门店管理",
        component: Main,
        children: [
            {
                path: "storeList",
                title: "门店列表",
                name: "storeList",
                access: 0,
                component: () => import("@/views/storeManagement/index")
            },
            {
                path: "storeData",
                title: "门店数据",
                name: "storeData",
                access: 0,
                component: () => import("@/views/storeManagement/storeData")
            },
        ]
    },
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
