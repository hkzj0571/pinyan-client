import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/sass/app.scss'

Vue.use(iView)

//
Vue.config.productionTip = true


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})

router.afterEach(() => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
