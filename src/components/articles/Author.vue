<template>
    <div class="author-detail">
        <div class="info">
            <router-link class="avatar" :to="{name:'user.show.profile',params:{user:user.id}}">
                <img :src="user.avatar">
            </router-link>
            <Button class="btn-focus" type="success" icon="plus-round" shape="circle" :loading="loading"
                    @click="follow">关注
            </Button>
            <router-link class="title" :to="{name:'user.show.profile',params:{user:user.id}}"
                         v-text="user.name"></router-link>
            <Icon :type="user.gender" v-show="user.gender"></Icon>
            <p class="describe" v-text="user.describe"></p>
            <p>发布了 {{ user.article_count }} 篇文章，关注了 {{ user.follower_count }} 人 ，被 {{ user.follower_count }} 人关注</p>
        </div>
        <div class="signature" v-text="user.resume"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
            }
        },
        props: ['user'],
        computed: {},
        methods: {
            follow() {
                this.loading = true
                this.$axios.post('user/follow',{user_id:this.user.id}).then(respond => {

                })
            }
        },
    }
</script>