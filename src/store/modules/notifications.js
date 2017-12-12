import axios from 'axios'
import * as types from "./mutation-types";

export default {
    state: {
        content: [],
    },
    mutations: {
        [types.NOTIFICATIONS](state, data) {
            state.content = data
        },
        [types.NEW_NOTIFICATION](state, notification) {
            state.content.push(notification)
        }
    },
    actions: {
        getNotifications({commit}) {
            return new Promise(function (resolve, reject) {
                axios.post('user/notifications', {}).then(resource => {
                    let respond = resource.data
                    if (respond.status) {
                        commit(types.NOTIFICATIONS, respond.data)
                        resolve()
                    } else {
                        reject()
                    }
                })
            })
        },
        new_notification({commit}, notification) {
            commit(types.NEW_NOTIFICATION, {
                data: notification,
                id: notification.id,
                type: notification.type,
            })
        },
    },
}