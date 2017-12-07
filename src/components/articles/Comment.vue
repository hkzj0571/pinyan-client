<template>
    <div class="comment-list">
        <div class="new_commet">
            <Avatar icon="person" size="large"/>
            <textarea rows="3" class="ivu-input" v-model="comment.content"
                      @click="vilast = true"></textarea>
            <transition name="fade">
                <div class="function-block" v-show="vilast">
                    <Icon type="android-happy"></Icon>
                    <Button type="text" shape="circle" size="large"
                            @click="vilast = false">取消
                    </Button>
                    <Button type="success"
                            shape="circle"
                            size="large"
                            :disabled="!comment.content"
                            @click="newComment"
                            :loading="loading">发送
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
            <div class="comment" v-for="comment in comments">
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
</template>
<script>
    export default {
        data () {
            return {
                vilast: false,
                comment: {
                    article_id: this.$route.params.article,
                    content: null,
                    reply_id: null,
                },
                loading: false,
                comments:[],
            }
        },
        computed: {},
        props: ['article'],
        created:function () {
            this.$axios.get(`article/${this.$route.params.article}/comments`).then(resource => {
                let respond = resource.data
                this.comments = respond.data.comments
            })
        },
        methods: {
            newComment() {
                this.loading = true

                this.$axios.post('comments/store', this.comment).then(resource => {
                    let respond = resource.data
                    this.loading = false
                    if (respond.status) {
                        this.comment.content = null
                        this.vilast = false
                        this.article.comments_count++
                        this.comments.unshift(respond.data.comment)
                    } else {
                        this.$Message.error(respond.message)
                    }
                })
            },
        },
    }
</script>