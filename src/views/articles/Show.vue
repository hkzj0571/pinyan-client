<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="18" offset="3">
                <div class="article">
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

                        <Button class="btn-edit" type="success" v-if="is_author" icon="android-create" shape="circle">
                            编辑文章
                        </Button>
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
                                    <a target="_blank" href="/u/eee6e7dea98c" class="avatar"><img
                                            src="//upload.jianshu.io/users/upload_avatars/3354589/c5a5c2aa-eeb3-4e50-8ac5-a0798375e016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar"><img
                                            src="http://wx.qlogo.cn/mmopen/EcOKiaZLsUY9FuML88x9hy6yAoRn5shyc28p2ibzb7x6XXdNOKYZBhZcbwk3nx4wHm1qDuZ4c6lfulRUmRFBWZ77R3jJXvCg6q/0"></a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar"><img
                                            src="http://cdn2.jianshu.io/assets/default_avatar/wechat-771371d5741b0c32cd805caeb48ad6c0.png"></a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar"><img
                                            src="http://cdn2.jianshu.io/assets/default_avatar/wechat-771371d5741b0c32cd805caeb48ad6c0.png"></a>
                                </li>
                                <li>
                                    <a target="_blank" href="javascript:void(0)" class="avatar"><img
                                            src="http://cdn2.jianshu.io/assets/default_avatar/wechat-771371d5741b0c32cd805caeb48ad6c0.png"></a>
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
                get_user_loading:false,
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

            this.$axios.get('article/' + this.$route.params.id, {}).then(resource => {
                let respond = resource.data
                this.article = respond.data.article
            })

            this.$axios.post(`article/${this.$route.params.id}/is_like`, {}).then(resource => {
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
                return this.$axios.post(`article/${this.$route.params.id}/like_users?page=${this.like_users_page}`, {}).then(resource => {
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

<style lang="scss">
    .article {
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 40px;
        .title {
            word-break: break-word !important;
            word-break: break-all;
            margin: 20px 0 20px;
            font-size: 34px;
            font-weight: 700;
            line-height: 1.3;
        }
        .author {
            margin: 40px 0 40px;
            .avatar {
                width: 75px;
                height: 75px;
                vertical-align: middle;
                display: inline-block;
                cursor: pointer;
                img {
                    border: 1px solid #ddd;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .info {
                vertical-align: middle;
                display: inline-block;
                margin-left: 8px;
                .name {
                    margin-right: 3px;
                    font-size: 16px;
                    vertical-align: middle;
                    a {
                        color: #262626;
                        font-size: 17px;
                        font-weight: 500;
                    }
                }
                .meta {
                    margin-top: 8px;
                    font-size: 12px;
                    color: #969696;
                    span {
                        padding: 0px 5px;
                        border-right: 1px solid #e7eaf1;
                        .ivu-icon {
                            margin-right: 5px;
                            font-size: 14px;
                            vertical-align: -1px;
                        }
                        &:first-child {
                            padding-left: 0;
                        }
                        &:last-child {
                            border-right: 0;
                        }
                    }
                }
                .describe {
                    margin-top: 5px;
                }
            }
            .btn-edit, .btn-focus {
                float: right;
                background: #fff;
                color: #19be6b;
                border: 1px solid #19be6b;
                margin: 19px 10px;
                .ivu-icon {
                    font-size: 16px;
                    vertical-align: -1px;
                }
                &:hover {
                    background: #19be6b;
                    color: #fff;
                }
            }
        }
        .content {
            color: #262626;
            font-size: 16px;
            blockquote {
                margin: 20px 0;
                background-color: #f5f8fc;
                padding: 1rem;
                color: #8796A8;
                font-size: 14px;
                overflow-y: auto;
                border-left: none;
                line-height: 26px;
                font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
            }
            p {
                line-height: 26px;
                margin: 0 0 .75em;
                img {
                    display: block;
                    margin: 25px auto;
                }
            }
            code {
                line-height: 26px;
                background: #f6f6f6;
                color: #262626 !important;
                white-space: pre;
                overflow-y: auto;
                padding: 6px 8px;
                font-size: 14px;
                border-radius: 3px;
                font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
            }
            .ql-syntax {
                display: block;
                line-height: 28px;
                background: #f6f6f6;
                white-space: pre;
                color: #262626;
                font-size: 14px;
                overflow-y: auto;
                margin: 1em 0;
                padding: 16px;
                border-radius: 6px;
                font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
            }
            h1, h2, h3, h4, h5, h7 {
                margin: 25px auto;
            }
            ul {
                li {
                    margin: 10px auto;
                }
            }
        }
        .footer {
            margin: 40px 0 30px;
            .topic {
                font-size: 12px;
                color: #9b9b9b;
                .ivu-icon {
                    font-size: 15px;
                    vertical-align: -1px;
                    margin-right: 3px;
                }
                &:hover {
                    text-decoration: underline;
                }
            }
            .copyright {
                float: right;
                margin-top: 5px;
                font-size: 12px;
                line-height: 1.7;
                color: #9b9b9b;

            }
            .options {
                float: right;
                margin-top: 5px;
                font-size: 12px;
                line-height: 1.7;
                color: #9b9b9b;
                margin-right: 25px;
                a {
                    font-size: 12px;
                    color: #9b9b9b;
                    .ivu-icon {
                        margin-right: 3px;
                    }
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        .author-detail {
            padding: 15px;
            background-color: hsla(0, 0%, 71%, .1);
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            font-size: 12px;
            .info {
                min-height: 75px;
                .avatar {
                    float: left;
                    margin-right: 10px;
                    width: 75px;
                    height: 75px;
                    display: block;
                    cursor: pointer;
                    img {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        vertical-align: middle;
                    }
                }
                .btn-focus {
                    float: right;
                    margin-top: 16.5px;
                    padding: 8px 0;
                    width: 100px;
                    font-size: 16px;
                }
                .title {
                    color: #262626;
                    margin-right: 3px;
                    font-size: 18px;
                    line-height: 1.8;
                    vertical-align: middle;
                }
                p {
                    margin-bottom: 0;
                    color: #969696;
                }
                .ivu-icon {
                    font-size: 15px;
                    vertical-align: middle;
                    margin-left: 5px;
                }
                .describe {
                    margin-bottom: 5px;
                    color: #262626;
                }
                .ivu-icon-male {
                    color: #6495ED;
                }
                .ivu-icon-female {
                    color: #FF6EB4;
                }
                .ivu-icon-transgender {
                    color: #43CD80;
                }
                .ivu-icon-locked {
                    color: #000;
                }
            }
            .signature {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e1e1e1;
                color: #969696;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .appreciates {
            border-bottom: 1px solid #f0f0f0;
            padding: 30px 0 20px;
            text-align: center;
            clear: both;
            p {
                padding: 0 30px;
                margin-bottom: 20px;
                min-height: 24px;
                font-size: 17px;
            }
            .ivu-btn {
                background: #ea6f5a;
                color: #fff;
                border: 1px solid #ea6f5a;
                margin: 20px auto 35px;
                .ivu-icon {
                    font-size: 20px;
                    vertical-align: -2px;
                }
            }
            .supporter {
                height: 50px;
                .support-list {
                    list-style: none;
                    display: inline-block;
                    li {
                        margin: 0 -5px;
                        display: inline-block;
                        a {
                            width: 40px;
                            height: 40px;
                            display: block;
                            cursor: pointer;
                            img {
                                width: 100%;
                                height: 100%;
                                border: 1px solid #ddd;
                                border-radius: 50%;
                                border: 3px solid #fff;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
        .meta-bottom {
            margin-top: 30px;
            margin-bottom: 80px;
            .like {
                display: inline-block;
                .btn {
                    padding: 13px 0 15px;
                    font-size: 0;
                    border: 1px solid #ea6f5a;
                    border-radius: 40px;
                    .btn-like {
                        font-size: 19px;
                        display: inline-block;
                        a {
                            color: #ea6f5a;
                            padding: 18px 15px 18px 30px;
                            .ivu-icon {
                                font-size: 25px;
                                vertical-align: -3px;
                                margin-right: 10px;
                            }
                        }
                    }
                    .modal-wrap {
                        font-size: 18px;
                        border-left: 1px solid rgba(236, 97, 73, .4);
                        display: inline-block;
                        a {
                            color: #ea6f5a;
                            padding: 18px 30px 18px 17px;
                        }
                    }
                    &:hover {
                        background-color: rgba(236, 97, 73, .05);
                    }
                }
                .active {
                    background-color: #ea6f5a;
                    .btn-like {
                        a {
                            color: #fff;
                        }
                    }
                    .modal-wrap {
                        border-left: 1px solid #fff;
                        a {
                            color: #fff;
                        }
                    }
                    &:hover {
                        background-color: #ea6f5a;
                    }
                }
            }
            .social-share {
                float: right;
                height: 58px;
                line-height: 58px;
                a {
                    line-height: 30px;
                }
            }
        }
        .comment-list {
            .new_commet {
                position: relative;
                margin-left: 48px;
                .ivu-avatar {
                    position: absolute;
                    left: -48px;
                }
                .ivu-input {
                    border: 1px solid #f0f0f0;
                    resize: none;
                    padding: 10px;
                    background-color: hsla(0, 0%, 71%, .1);
                }
                .function-block {
                    text-align: right;
                    margin-top: 15px;
                    .ivu-btn {
                        margin-left: 15px;
                    }
                    .ivu-btn-text {
                        color: #969696;
                    }
                    .ivu-icon {
                        float: left;
                        font-size: 27px;
                        color: #969696;
                    }
                    .ivu-btn-success {
                        .ivu-icon {
                            font-size: 18px;
                            color: #fff;
                            line-height: 21px;
                        }
                    }
                }
            }
            .normal-comment-list {
                margin-top: 30px;
                .top-title {
                    padding-bottom: 20px;
                    font-size: 17px;
                    font-weight: 700;
                    border-bottom: 1px solid #f0f0f0;
                    span {
                        vertical-align: middle;
                    }
                    .author-only {
                        margin-left: 10px;
                        padding: 4px 8px;
                        font-size: 12px;
                        color: #969696;
                        border: 1px solid #e1e1e1;
                        border-radius: 12px;
                    }
                    .pull-right {
                        float: right;
                        a {
                            margin-left: 10px;
                            font-size: 12px;
                            font-weight: 400;
                            color: #969696;
                            display: inline-block;
                        }
                        .active {
                            color: #262626;
                        }
                    }
                }
                .comment {
                    padding: 20px 0 30px;
                    border-bottom: 1px solid #f0f0f0;
                    .author {
                        margin-bottom: 15px;
                        .info {
                            display: inline-block;
                            vertical-align: middle;
                            .name {
                                font-size: 15px;
                                color: #333;
                            }
                            .meta {
                                margin-top: 0px;
                                font-size: 12px;
                                color: #969696;
                                span {
                                    margin-right: 6px;
                                }
                            }
                        }
                    }
                    .comment-wrap {
                        p {
                            font-size: 16px;
                            margin: 15px 0;
                            line-height: 1.5;
                            font-size: 16px;
                            word-break: break-word;
                        }
                        .tool-group {
                            a {
                                margin-right: 10px;
                                color: #969696;
                                display: inline-block;
                                span {
                                    vertical-align: middle;
                                    font-size: 14px;
                                }
                                .ivu-icon {
                                    font-size: 14px;
                                    vertical-align: -2px;
                                    margin-right: 3px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .likes_user {
        .ivu-modal-header-inner {
            font-size: 17px;
            font-weight: 500;
            color: #262626;
        }
        .ivu-modal-footer {
            display: none;
        }

    }

    .ivu-modal-body {
        padding: 0;
        overflow: auto;
        ul {
            height: 500px;
            overflow: auto;
            li {
                padding: 15px;
                border-bottom: 1px solid #f0f0f0;
                .name {
                    font-size: 16px;
                    color: #333;
                    vertical-align: middle;
                    display: inline-block;
                }
                .avatar {
                    margin-right: 5px;
                }
                .time {
                    float: right;
                    margin-top: 7px;
                    font-size: 12px;
                    color: #969696;
                }
                .ivu-btn {
                    color: #2d8cf0;
                }
                .ivu-icon {
                    font-size: 18px;
                    vertical-align: middle;
                    margin-left: 5px;
                }
                .ivu-icon-male {
                    color: #6495ED;
                }
                .ivu-icon-female {
                    color: #FF6EB4;
                }
                .ivu-icon-transgender {
                    color: #43CD80;
                }
                .ivu-icon-locked {
                    color: #000;
                }
            }
            .end {
                text-align: center;
                p {
                    display: block;
                    text-align: center;
                    margin-top: 7px;
                    font-size: 12px;
                    color: #969696;
                }
            }
        }
    }

    .ivu-modal-mask {
        background-color: rgba(55, 55, 55, .1);
    }
</style>
