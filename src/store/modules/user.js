import axios from 'axios'
import * as types from './mutation-types'

export default {
    state: {
        id: null,
        avatar: null,
        name: null,
        email: null,
        token: null,
        is_active: null,
        website: null,
        gender: null,
        describe: null,
        wechat_qrcode: null,
        authenticated: false,
    },
    mutations: {

        /**
         * 登陆成功
         * @param state
         * @param data
         */
            [types.AUTHENTICATED](state, data){

            let user = data.user
            let token = data.token

            state.id = user.id
            state.avatar = user.avatar
            state.name = user.name
            state.email = user.email
            state.is_active = user.is_active
            state.website = user.website
            state.gender = user.gender
            state.describe = user.describe
            state.wechat_qrcode = user.wechat_qrcode
            state.token = token.token_type + ' ' + token.access_token
            state.authenticated = true

            localStorage.auth = JSON.stringify(data)

            axios.defaults.headers.common['Authorization'] = state.token
        },

        /**
         * 退出成功
         * @param state
         */
            [types.UNTHENTICATED](state){
            state.id = null
            state.avatar = null
            state.name = null
            state.email = null
            state.token = null
            state.is_active = null
            state.authenticated = false

            localStorage.removeItem('auth')
        },

        /**
         * 激活成功
         * @param state
         */
            [types.ACTIVED](state){
            state.is_active = true
            let data = JSON.parse(localStorage.auth)
            data.user.is_active = true
            localStorage.auth = JSON.stringify(data)
        },

        /**
         * 头像更新
         * @param state
         * @param avatar
         */
            [types.AVATAR_UPDATED](state, avatar){
            state.avatar = avatar
            let data = JSON.parse(localStorage.auth)
            data.user.avatar = avatar
            localStorage.auth = JSON.stringify(data)
        },

        /**
         * 微信二维码更新
         * @param state
         * @param wechat_qrcode
         */
        [types.WECHAT_QRCODE_UPDATED](state, wechat_qrcode){
            state.wechat_qrcode = wechat_qrcode
            let data = JSON.parse(localStorage.auth)
            data.user.wechat_qrcode = wechat_qrcode
            localStorage.auth = JSON.stringify(data)
        },

        /**
         * 微信二维码删除
         * @param state
         * @param wechat_qrcode
         */
        [types.WECHAT_QRCODE_REMOVE](state){
            state.wechat_qrcode = null
            let data = JSON.parse(localStorage.auth)
            data.user.wechat_qrcode = null
            localStorage.auth = JSON.stringify(data)
        },

        /**
         * 基本资料更新
         * @param state
         * @param data
         */
            [types.BASIC_UPDATED](state, basic){
            state.name = basic.name
            let data = JSON.parse(localStorage.auth)
            data.user.name = basic.name
            localStorage.auth = JSON.stringify(data)
        }
    },
    actions: {

        /**
         * 登陆成功
         * @param commit
         * @param data
         * @returns {Promise}
         */
        authenticated ({commit}, data) {
            return new Promise(function (resolve, reject) {
                commit(types.AUTHENTICATED, data)
                resolve(data)
            })
        },

        /**
         * 退出登录成功
         * @param commit
         * @returns {Promise}
         */
        unthenticated({commit}){
            return new Promise(function (resolve, reject) {
                commit(types.UNTHENTICATED)
                resolve()
            })
        },

        /**
         * 激活成功
         * @param commit
         * @param rootState
         * @param token
         * @returns {Promise}
         */
        actived({commit, rootState}, token){
            return new Promise(function (resolve, reject) {
                axios.post('active', token).then(resource => {
                    let respond = resource.data
                    if (respond.status) {
                        if (rootState.user.authenticated) {
                            commit(types.ACTIVED)
                        }

                        resolve(respond.message)
                    } else {
                        reject(respond.message)
                    }
                })
            })
        },


        /**
         * 头像更新成功
         * @param commit
         * @param avatar
         * @returns {Promise}
         */
        avatar_updated({commit}, avatar){
            return new Promise(function (resolve, reject) {
                commit(types.AVATAR_UPDATED, avatar)
                resolve()
            })
        },

        /**
         * 微信二维码更新
         * @param commit
         * @param wechat_qrcode
         * @returns {Promise}
         */
        wechat_qrcode_updated({commit}, wechat_qrcode){
            return new Promise(function (resolve, reject) {
                commit(types.WECHAT_QRCODE_UPDATED, wechat_qrcode)
                resolve()
            })
        },

        basic_updated({commit}, data){
            return new Promise(function (resolve, reject) {
                commit(types.BASIC_UPDATED, data)
                resolve()
            })
        },

    },
}