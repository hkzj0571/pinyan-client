<template>
    <div>
        <div class="like">
            <div class="btn like-group" :class="{active:article.is_like}">
                <div class="btn-like" @click="like">
                    <a>
                        <Icon type="android-favorite-outline"></Icon>
                        喜欢
                    </a>
                </div>
                <div class="modal-wrap" @click="likeUsers"><a v-text="article.like_count"></a></div>
            </div>
        </div>
        <Modal v-model="like_modal" class="likes_user" title="喜欢的用户">
            <ul>
                <li v-for="user in like_users">
                    <a href="/u/e8d95cca28b8" target="_blank" class="avatar">
                        <Avatar icon="person" :src="user.avatar" size="large"/>
                    </a>
                    <a href="/u/e8d95cca28b8" target="_blank" class="name" v-text="user.name"></a>
                    <Icon :type="user.gender" v-show="user.gender"></Icon>
                    <a href="" class="time" v-text="user.pivot_created_at"></a>
                </li>
                <li class="end" v-show="like_users_page !== false">
                    <Button type="text" @click="getLikeUsers" :loading="get_user_loading">加载更多</Button>
                </li>
                <li class="end" v-show="like_users_page === false">
                    <p>没有更多数据了</p>
                </li>
            </ul>
            <div slot="footer"></div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                like_modal: false,
                get_user_loading: false,
                like_users: [],
                like_users_page: 0,
            }
        },
        computed: {},
        methods: {
            like() {
                this.$axios.post(`article/${this.article.id}/like`, {}).then(resource => {
                    let respond = resource.data
                    this.article.is_like = !this.article.is_like
                    respond.data.type ? this.article.like_count++ : this.article.like_count--
                })
            },
            likeUsers() {
                this.like_modal = true
            },
            getLikeUsers() {
                if (this.like_users_page === false) return false;
                this.get_user_loading = true
                this.like_users_page++
                return this.$axios.post(`article/${this.$route.params.article}/users?page=${this.like_users_page}`, {}).then(resource => {
                    let respond = resource.data
                    if (respond.data.users.length != 0) {
                        this.like_users = this.like_users.concat(respond.data.users)
                    } else {
                        this.like_users_page = false
                    }
                    this.get_user_loading = false
                })
            }
        },
    }
</script>