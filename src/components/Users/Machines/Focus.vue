<template>
    <div class="content">
        <div class="author">
            <router-link :to="{name:'user.show.profile',params:{user:id}}">
                <Avatar :src="avatar" size="large"></Avatar>
            </router-link>
            <div class="info">
                <router-link class="nickname" v-text="name"
                             :to="{name:'user.show.profile',params:{user:id}}"></router-link>
                <span>关注了专题 <span class="speacd">·</span> {{ topic.focus_at }}</span>
            </div>
        </div>
        <div class="focus-detail">
            <div class="info">
                <router-link to="/" class="tag">
                    <img :src="topic.cover">
                </router-link>
                <router-link class="index-btn" to="/">
                    专题主页
                    <Icon type="chevron-right"></Icon>
                </router-link>
                <router-link class="title" to="/c/1hjajt" v-text="topic.name"></router-link>
                <p>收录了 {{ topic.article_count }} 篇文章 · {{ topic.follower_count }} 人关注</p>
            </div>
            <div class="signature" v-text="topic.describe"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                topic: this.machine.topic,
            }
        },
        props: ['machine'],
        computed: mapState({
            id: state => state.user.id,
            name: state => state.user.name,
            avatar: state => state.user.avatar,
        }),
        created: function () {
        },
        methods: {}
    }
</script>