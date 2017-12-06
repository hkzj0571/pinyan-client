<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="16" class="left">
                <div class="user-detail">
                    <router-link class="avatar" :to="'/user/'+id+'/profile'">
                        <img :src="user.avatar">
                    </router-link>
                    <div class="info">
                        <span class="name">
                            <router-link :to="'/user/'+id+'/profile'" v-text="user.name"></router-link>
                        </span>
                        <Icon :type="user.gender" v-show="user.gender"></Icon>
                        <ul class="options">
                            <li>
                                <div class="meta-block">
                                    <a href="/users/06201a8515a3/following">
                                        <p>10</p>
                                        关注
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="meta-block">
                                    <a href="/users/06201a8515a3/following">
                                        <p>10</p>
                                        粉丝
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="meta-block">
                                    <a href="/users/06201a8515a3/following">
                                        <p>10</p>
                                        文章
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <router-view/>
            </i-col>
            <i-col :span="7" offset="1" class="right">
                <div class="title">
                    <span>个人介绍</span>
                </div>
                <div class="description">
                    <div class="resume" v-text="user.resume"></div>
                </div>
                <ul class="synamic">
                    <li>
                        <a href="/users/06201a8515a3/subscriptions">
                            <Icon type="android-person"></Icon>
                            关注的用户</a>
                    </li>
                    <li>
                        <a href="/users/06201a8515a3/subscriptions">
                            <Icon type="android-bookmark"></Icon>
                            关注的专题</a>
                    </li>
                    <li>
                        <router-link :to="'/user/'+id+'/focus'">
                            <Icon type="android-favorite-outline"></Icon>
                            喜欢的文章
                        </router-link>
                    </li>
                </ul>
                <div class="topics_options">
                    <div class="title">
                        我创建的专题
                        <router-link to="/topics">
                            <Button type="text" icon="plus-round">创建一个新专题</Button>
                        </router-link>
                    </div>
                    <ul class="collection">
                        <li v-for="topic in user.create_topics">
                            <router-link :to="'/topics/'+topic.id">
                                <Avatar icon="person" shape="square" :src="topic.cover"></Avatar>
                                {{ topic.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </i-col>
        </div>
    </div>
</template>

<script>
    import IndexHeader from '../../../components/commons/Header.vue'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                user: {
                    create_topics: {}
                }
            }
        },
        components: {
            IndexHeader,
        },
        computed: mapState({
            id: state => state.user.id,
        }),
        created: function () {
            var user = this.$route.params.user

            return this.$axios.get('user/' + user).then(resource => {
                let respond = resource.data
                if (respond.status) {
                    this.user = respond.data.user
                } else {
                    this.$Message.error(respond.message)
                }
            })
        }
    }
</script>