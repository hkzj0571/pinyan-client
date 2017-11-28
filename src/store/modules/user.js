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
        authenticated: false,
    },
    mutations: {

        [types.AUTHENTICATED](state, data){

            let user = data.user
            let token = data.token

            state.id = user.id
            state.avatar = user.avatar
            state.name = user.name
            state.email = user.email
            state.is_active = user.is_active
            state.token = token.token_type + ' ' + token.access_token
            state.authenticated = true

            localStorage.auth = JSON.stringify(data)

            axios.defaults.headers.common['Authorization'] = state.token
        },
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
        [types.ACTIVED](state){
            state.is_active = true
            let data = JSON.parse(localStorage.auth)
            data.user.is_active = true
            localStorage.auth = JSON.stringify(data)
        }
    },
    actions: {

        authenticated ({commit}, data) {
            return new Promise(function (resolve, reject) {
                commit(types.AUTHENTICATED, data)
                resolve(data)
            })
        },

        unthenticated({commit}){
            return new Promise(function (resolve, reject) {
                commit(types.UNTHENTICATED)
                resolve()
            })
        },

        actived({commit,rootState}, token){
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

    },
}