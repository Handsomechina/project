import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originnalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originnalPush.call(this, location).catch(err => err)
}
//页面跳转：this.$router.push('....')


export default new VueRouter({
    routes: [
        {
            // 会匹配所有路径
            path: '/',
            name: '',
            component: () => import('../views/login'),
            // hidden: true,
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/',
            name: 'Login',
            component: () => import('../views/login')
        },
        {
            path: '/Index',
            name: 'Index',
            component: () => import('../views/index'),
            children: [
                {
                    path: '/Home',
                    name: 'Home',
                    component: () => import('../views/home'),
                },
                {
                    path: '/User',
                    name: 'User',
                    component: () => import('../views/System/User/user')
                },
            ]
        },
    ],
    base: __dirname,
    mode: 'history'
})
