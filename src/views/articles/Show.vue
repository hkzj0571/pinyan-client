<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="18" offset="3">
                <div class="article-detail">
                    <h1 class="title" v-text="article.title"></h1>
                    <div class="author">
                        <a class="avatar" href="/u/36b4d22b6e4d">
                            <img :src="article.user.avatar">
                        </a>
                        <div class="info">
                            <span class="name"><a href="/u/36b4d22b6e4d" v-text="article.user.name"></a></span>
                            <!--<img class="badge-icon" data-toggle="tooltip" title="" src="http://upload.jianshu.io/user_badge/48d31e61-a03c-4506-81a2-d224ac0a2d8b" alt="48d31e61 a03c 4506 81a2 d224ac0a2d8b" data-original-title="简书版权">-->
                            <p class="describe" v-text="article.user.describe"></p>
                            <div class="meta">
                                <span><Icon type="android-time"></Icon>{{ article.created_at }}</span>
                                <span>阅读 {{ article.read_count }}</span>
                                <span>评论 {{ article.comments_count }}</span>
                                <span>喜欢 {{ article.like_count }}</span>
                            </div>
                        </div>

                        <router-link :to="'/article/'+article.id+'/edit'" v-if="is_author">
                            <Button class="btn-edit" type="success" icon="android-create" shape="circle">
                                编辑文章
                            </Button>
                        </router-link>
                    </div>
                    <div class="content" v-html="article.content">
                    </div>
                    <div class="footer">
                        <a class="topic" href="/nb/18630507">
                            <Icon type="android-bookmark"></Icon>
                            <span v-text="article.topic.name"></span>
                        </a>
                        <div class="copyright">© 著作权归作者所有</div>
                        <div class="options">
                            <a href="">
                                <Icon type="flag"></Icon>
                                举报文章</a>
                        </div>
                    </div>
                    <div class="author-detail">
                        <div class="info">
                            <a class="avatar" href="/u/203d799b2d7b">
                                <img :src="article.user.avatar">
                            </a>
                            <Button class="btn-focus" type="success" icon="plus-round" shape="circle">关注</Button>
                            <a class="title" href="/u/203d799b2d7b" v-text="article.user.name"></a>
                            <Icon :type="article.user.gender" v-show="article.user.gender"></Icon>
                            <p class="describe" v-text="article.user.describe"></p>
                            <p>写了 160748 字，被 29902 人关注，获得了 9191 个喜欢</p></div>
                        <div class="signature">【文学】专题主编
                            1/2文化策划人，1/2职业写手
                            此生无长，唯写字谋生
                            写文章是要打磨的手艺活
                            所有文章，谢绝转载
                            我已委托“维权骑士”（rightknights.com）为我的文章进行维权行动。
                        </div>
                    </div>
                    <div class="appreciates">
                        <p>向来很慢。幸好写文章是件慢的事。</p>
                        <Button type="warning" icon="coffee" size="large" shape="circle">赞赏支持</Button>
                        <div class="supporter">
                            <ul class="support-list">
                                <li>
                                    <a target="_blank" href="/u/eee6e7dea98c" class="avatar">
                                        <img src="//upload.jianshu.io/users/upload_avatars/3354589/c5a5c2aa-eeb3-4e50-8ac5-a0798375e016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar">
                                        <img src="http://wx.qlogo.cn/mmopen/EcOKiaZLsUY9FuML88x9hy6yAoRn5shyc28p2ibzb7x6XXdNOKYZBhZcbwk3nx4wHm1qDuZ4c6lfulRUmRFBWZ77R3jJXvCg6q/0">
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar">
                                        <img src="http://cdn2.jianshu.io/assets/default_avatar/wechat-771371d5741b0c32cd805caeb48ad6c0.png">
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar">
                                        <img src="http://cdn2.jianshu.io/assets/default_avatar/wechat-771371d5741b0c32cd805caeb48ad6c0.png">
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar">
                                        <img src="http://cdn2.jianshu.io/assets/default_avatar/wechat-771371d5741b0c32cd805caeb48ad6c0.png">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="meta-bottom">
                        <div class="like">
                            <div class="btn like-group" :class="{active:is_like}">
                                <div class="btn-like" @click="like">
                                    <a>
                                        <Icon type="android-favorite-outline"></Icon>
                                        喜欢
                                    </a>
                                </div>
                                <div class="modal-wrap" @click="likeUsers"><a v-text="article.like_count"></a></div>
                            </div>
                        </div>
                        <share></share>
                    </div>
                    <div class="comment-list">
                        <div class="new_commet">
                            <Avatar icon="person" size="large"/>
                            <textarea rows="3" class="ivu-input" v-model="comment.content"
                                      @click="show_comment_option = true"></textarea>
                            <transition name="fade">
                                <div class="function-block" v-show="show_comment_option">
                                    <Icon type="android-happy"></Icon>
                                    <Button type="text" shape="circle" size="large"
                                            @click="show_comment_option = false">取消
                                    </Button>
                                    <Button type="success"
                                            shape="circle"
                                            size="large"
                                            :disabled="!comment.content"
                                            @click="newComment"
                                            :loading="comment_loading"
                                    >发送
                                    </Button>
                                </div>
                            </transition>
                        </div>
                        <div class="normal-comment-list">
                            <div class="top-title">
                                <span>{{ article.comments_count }}条评论</span>
                                <a class="author-only">只看作者</a>
                                <a class="close-btn" style="display: none;">关闭评论</a>
                                <div class="pull-right">
                                    <a class="active">按喜欢排序</a>
                                    <a>按时间正序</a>
                                    <a>按时间倒序</a>
                                </div>
                            </div>
                            <div class="comment" v-for="comment in article.comments">
                                <div class="author">
                                    <Avatar icon="person" :src="comment.user.avatar" size="large"/>
                                    <div class="info">
                                        <a href="/u/4f5335659dc7" class="name" v-text="comment.user.name"></a>
                                        <div class="meta"><span v-text="comment.created_at"></span></div>
                                    </div>
                                </div>
                                <div class="comment-wrap">
                                    <p v-text="comment.content"></p>
                                    <div class="tool-group">
                                        <a>
                                            <Icon type="thumbsup"></Icon>
                                            <span>{{ comment.vote_count }}</span></a>
                                        <a>
                                            <Icon type="chatbox-working"></Icon>
                                            <span>回复</span></a>
                                        <a>
                                            <Icon type="flag"></Icon>
                                            <span>举报</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </i-col>
        </div>
        <Modal v-model="like_modal" class="likes_user" title="喜欢的用户">
            <ul>
                <li v-for="user in like_users">
                    <a href="/u/e8d95cca28b8" target="_blank" class="avatar">
                        <Avatar icon="person" :src="user.avatar" size="large"/>
                    </a>
                    <a href="/u/e8d95cca28b8" target="_blank" class="name" v-text="user.name"></a>
                    <Icon :type="user.gender" v-show="user.gender"></Icon>
                    <a href="" class="time" v-text="user.created_at"></a>
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
    import 'vue-social-share/dist/client.css'
    import IndexHeader from '../../components/commons/Header.vue'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                show_comment_option: false,
                article: {
                    id: null,
                    title: null,
                    content: null,
                    read_count: null,
                    topic: {},
                    user: {},
                    comments: {},
                },
                comment_loading: false,
                is_like: false,
                like_modal: false,
                get_user_loading: false,
                comment: {
                    article_id: null,
                    content: null,
                    reply_id: null,
                },
                like_users: [],
                like_users_page: 0,
            }
        },
        components: {
            IndexHeader
        },
        computed: {
            is_author: function () {
                return this.id == this.article.user.id
            },
            ...mapState({
                id: state => state.user.id,
            })
        },
        created: function () {
            this.comment.article_id = this.$route.params.id

            this.$axios.get('article/' + this.$route.params.article, {}).then(resource => {
                let respond = resource.data
                this.article = respond.data.article
            })

            this.$axios.post(`article/${this.$route.params.article}/is_like`, {}).then(resource => {
                let respond = resource.data
                this.is_like = respond.data.is_like
            })

            this.getLikeUsers()

        },
        methods: {
            newComment() {
                this.comment_loading = true

                this.$axios.post('comments/store', this.comment).then(resource => {
                    let respond = resource.data
                    this.comment_loading = false
                    if (respond.status) {
                        this.comment.content = null
                        this.show_comment_option = false
                        this.article.comments.unshift(respond.data.comment)
                    } else {
                        this.$Message.error(respond.message)
                    }
                })
            },
            like() {
                this.$axios.post(`article/${this.article.id}/like`, {}).then(resource => {
                    let respond = resource.data
                    this.is_like = !this.is_like
                    respond.data.type == 'attached' ? this.article.like_count++ : this.article.like_count--
                })
            },
            likeUsers() {
                this.like_modal = true
            },
            getLikeUsers() {

                if (this.like_users_page === false) return false;
                this.get_user_loading = true
                this.like_users_page++
                return this.$axios.post(`article/${this.$route.params.article}/like_users?page=${this.like_users_page}`, {}).then(resource => {
                    let respond = resource.data
                    if (respond.data.users.length != 0) {
                        this.like_users = this.like_users.concat(respond.data.users)
                    } else {
                        this.like_users_page = false
                    }
                    this.get_user_loading = false
                })
            }
        }
    }
</script>