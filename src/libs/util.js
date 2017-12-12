import axios from 'axios'
import env from '../config/env'
import Pusher from "pusher-js"
import Echo from "laravel-echo"

export default {
    install(Vue, options) {
        axios.defaults.baseURL = env.base_domain
        axios.defaults.timeout = env.timeout

        Vue.prototype.$axios = axios

        Vue.prototype.$echo = new Echo({
            broadcaster: 'pusher',
            key: env.pusher_key,
            cluster: env.pusher_cluster,
            encrypted: true,
            authEndpoint: env.pusher_auth
        })

        Vue.prototype.$env = env
    }
}