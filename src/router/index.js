import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () =>
      import ('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () =>
        import ('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/studentManger',
    component: Layout,
    // redirect: '/example/table',
    name: 'Student',
    meta: { title: '学生管理', icon: 'el-icon-user-solid' },
    children: [{
      path: 'addstudent',
      name: 'Addstudent',
      component: () =>
        import ('@/views/StudentManger/AddStudent/index'),
      meta: { title: '新增学生', icon: 'el-icon-circle-plus' }
    },
    {
      path: 'archives ',
      name: 'Archives ',
      component: () =>
        import ('@/views/StudentManger/Archives/index'),
      meta: { title: '学生档案管理', icon: 'el-icon-tickets' }
    },
    {
      path: 'gradution',
      name: 'Gradution',
      component: () =>
        import ('@/views/StudentManger/gradutionStudent/index'),
      meta: { title: '毕业学生', icon: 'el-icon-s-check' }
    }
    ]
  },
  {
    path: '/funding',
    name: 'Funding',
    component: Layout,
    meta: { title: '资助管理', icon: 'el-icon-s-tools' },
    children: [{
      path: 'granting',
      name: 'Granting',
      component: () =>
        import ('@/views/FundingManger/Granting/index'),
      meta: { title: '资助申请', icon: 'el-icon-setting' }
    },
    {
      path: 'grantinglist',
      name: 'GrantingList',
      component: () =>
        import ('@/views/FundingManger/GrantingList/index'),
      meta: { title: '资助申请列表', icon: 'el-icon-document-remove' }
    }
    ]
  },
  {
    path: '/basicManger',
    name: 'Basic',
    component: Layout,
    meta: { title: '基础管理', icon: 'el-icon-setting' },
    children: [{
      path: 'usermanger',
      name: 'UserManger',
      component: () =>
        import ('@/views/BasicManger/UserManger/index'),
      meta: { title: '用户管理', icon: 'el-icon-user' }
    },
    {
      path: 'schoolManger',
      name: 'SchoolManger',
      component: () =>
        import ('@/views/BasicManger/SchoolManger/index'),
      meta: { title: '学校管理', icon: 'el-icon-school' }
    },
    {
      path: 'usergroup',
      name: 'UserGroup',
      component: () =>
        import ('@/views/BasicManger/userGroup/index'),
      meta: { title: '角色组', icon: 'el-icon-s-custom' }
    },
    {
      path: 'townzone',
      name: 'TownZone',
      component: () =>
        import ('@/views/BasicManger/TownZone/index'),
      meta: { title: '乡镇区划管理', icon: 'el-icon-office-building' }
    },
    {
      path: 'basicdata',
      name: 'BasicData',
      component: () =>
        import ('@/views/BasicManger/BasicData/index'),
      meta: { title: '基础数据', icon: 'el-icon-s-data' }
    },
    {
      path: 'grantingType',
      name: 'GrantingType',
      component: () =>
        import ('@/views/BasicManger/GrantingType/index'),
      meta: { title: '资助类型', icon: 'el-icon-s-order' }
    }
    ]
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/system',
    name: 'SystemManger',
    component: Layout,
    meta: { title: '系统管理', icon: 'el-icon-s-tools', roles: ['admin'] },
    children: [{
      path: 'menumanger',
      name: 'MenuManger',
      component: () =>
        import ('@/views/SysManger/MenuManger/index'),
      meta: { title: '菜单管理', icon: 'el-icon-menu', roles: ['admin'] }
    },
    {
      path: 'sysconf',
      name: 'SysConf',
      component: () =>
        import ('@/views/SysManger/SysConf/index'),
      meta: { title: '系统配置', icon: 'el-icon-setting', roles: ['admin'] }
    },
    {
      path: 'adminlog',
      name: 'AdminLog',
      component: () =>
        import ('@/views/SysManger/AdminLog/index'),
      meta: { title: '管理员日志', icon: 'el-icon-date' }
    },
    {
      path: 'notice',
      name: 'Notice',
      component: () =>
        import ('@/views/SysManger/Notice/index'),
      meta: { title: '通知管理', icon: 'el-icon-message-solid' }
    },
    {
      path: 'onlineuser',
      name: 'OnlineUser',
      component: () =>
        import ('@/views/SysManger/OnlineUser/index'),
      meta: { title: '在线用户', icon: 'el-icon-user' }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () =>
        import ('@/views/SysManger/profile/index'),
      meta: { title: '个人资料', icon: 'el-icon-postcard' }
    }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
