import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)

//页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
  store.commit('SET_TOKEN', sessionStorage.getItem('token'))
}


const components = {
  layout: () => import('@/views/layout'),
  index: () => import('@/views/index/index'),
  notice: () => import('@/views/notice/notice'),
  noticeDetail: () => import('@/views/notice/noticeDetail'),
  myparty: () => import('@/views/myparty/index'),
  userinfo: () => import('@/views/myparty/userinfo'),
  integral: () => import('@/views/myparty/integral'),
  integralDetail: () => import('@/views/myparty/integralDetail'),
  changePassword: () => import('@/views/myparty/changePassword'),
  partyFeePayment: () => import('@/views/myparty/partyFeePayment'),
  login: () => import('@/views/login'),
  newseye: () => import('@/views/index/newseye/newseye'),
  life: () => import('@/views/index/life/life'),
  political: () => import('@/views/index/life/political'),
  think: () => import('@/views/index/life/think'),
  summary: () => import('@/views/index/life/summary'),
  personalsummary: () => import('@/views/index/life/personalsummary'),
  review: () => import('@/views/index/life/review'),
  discuss: () => import('@/views/index/life/discuss'),
  attendPerson: () => import('@/views/index/life/attendPerson'),
  organization: () => import('@/views/index/life/organization'),
  interaction: () => import('@/views/index/interaction/interaction'),
  building: () => import('@/views/index/building/building'),
  showidentity: () => import('@/views/index/showidentity/showidentity'),
  today: () => import('@/views/index/today/today'),
  study: () => import('@/views/index/special/study'),
  photo: () => import('@/views/index/special/photo'),
  system: () => import('@/views/index/special/system'),
  activity: () => import('@/views/index/special/activity'),
};

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          meta: {
            title: '首页',
          },
          component: components.index
        },


        {
          path: 'notice',
          name: 'notice',
          meta: {
            title: '通知',
          },
          component: components.notice,
        },
        {
          path: 'noticeDetail',
          name: 'noticeDetail',
          meta: {
            title: '通知详情',
          },
          component: components.noticeDetail
        },

        {
          path: 'myparty',
          meta: {
            title: '我的党建'
          },
          component: components.myparty,
        },
        {
          path: 'userinfo',
          meta: {
            title: '个人信息',
            requireAuth: true
          },
          component: components.userinfo,
        },
        {
          path: 'integral',
          meta: {
            title: '个人量化积分',
            requireAuth: true
          },
          component: components.integral,
        },
        {
          path: 'integralDetail',
          meta: {
            title: '个人量化积分明细',
            requireAuth: true
          },
          component: components.integralDetail,
        },
        {
          path: 'changePassword',
          meta: {
            title: '修改密码',
            requireAuth: true
          },
          component: components.changePassword,
        },
        {
          path: 'partyFeePayment',
          meta: {
            title: '党费缴纳',
            requireAuth: true
          },
          component: components.partyFeePayment,
        },


        {
          path: 'login',
          meta: {
            title: '登录',
          },
          component: components.login
        },


        {
          path: 'newseye',
          meta: {
            title: '信工新闻眼'
          },
          component: components.newseye
        },

        {
          path: 'detailPage',
          meta:{
            title : '详情页'
          },
          component : () => import('../components/DetailPage')
        },

        {
          path: 'life',
          meta: {
            title: '掌上组织生活'
          },
          component: components.life
        },
        {
          path: 'political',
          meta: {
            title: '政治学习'
          },
          component: components.political
        },
        {
          path: 'think',
          meta: {
            title: '思想汇报',
            requireAuth: true
          },
          component: components.think
        },
        {
          path: 'summary',
          meta: {
            title: '心得总结',
            requireAuth: true
          },
          component: components.summary
        },
        {
          path: 'personalsummary',
          meta: {
            title: '个人总结',
            requireAuth: true
          },
          component: components.personalsummary
        },
        {
          path: 'review',
          meta: {
            title: '民主评议'
          },
          component: components.review
        },
        {
          path: 'discuss',
          meta: {
            title: '民主评议详情'
          },
          component: components.discuss
        },
        {
          path: 'attendPerson',
          meta: {
            title: '参评党员'
          },
          component: components.attendPerson
        },
        {
          path: 'organization',
          meta: {
            title: '流动党员找组织'
          },
          component: components.organization
        },


        {
          path: 'interaction',
          meta: {
            title: '党员云互动',
            requireAuth: true
          },
          component: components.interaction
        },
        {
          path: 'building',
          meta: {
            title: '党建一点通'
          },
          component: components.building
        },
        {
          path: 'showidentity',
          meta: {
            title: '党员亮身份'
          },
          component: components.showidentity
        },
        {
          path: 'today',
          meta: {
            title: '历史上的今天'
          },
          component: components.today
        },
        {
          path: 'study',
          meta: {
            title: '随时随地学'
          },
          component: components.study
        },
        {
          path: 'photo',
          meta: {
            title: '随时随地拍'
          },
          component: components.photo
        },
        {
          path: 'system',
          meta: {
            title: '制度建设'
          },
          component: components.system
        },
        {
          path: 'activity',
          meta: {
            title: '特色活动'
          },
          component: components.activity
        },
      ]
    }
  ]
})


//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //判断要去的路由有没有requiresAuth
  if (to.matched.some(r => r.meta.requireAuth)) {
    //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，
    // 意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
})


export default router
