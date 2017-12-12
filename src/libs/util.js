import axios from 'axios'
import Pusher from "pusher-js"
import Echo from "laravel-echo"
import env from '../config/env'

export default {
    install(Vue, options) {
        Vue.prototype.$axios = axios
        Vue.prototype.$axios.defaults.baseURL = env.base_domain
        Vue.prototype.$axios.defaults.timeout = env.timeout

        Vue.prototype.$env = env


        Vue.prototype.$echo = new Echo({
            broadcaster: 'pusher',
            key: env.pusher_key,
            cluster: env.pusher_cluster,
            encrypted: true,
            authEndpoint: 'http://baidu.com/guard/auth/broadcasting'
        })
    }
}