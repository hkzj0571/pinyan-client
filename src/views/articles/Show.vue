<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="18" offset="3">
                <div class="article">

                    <Spin size="large" fix v-if="spin">
                        <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
                        <div>文章加载中...</div>
                    </Spin>
                    <h1 class="title" v-text="article.title"></h1>
                    <div class="author">
                        <a class="avatar" href="/u/36b4d22b6e4d">
                            <img :src="article.user.avatar">
                        </a>
                        <div class="info">
                            <span class="name"><a href="/u/36b4d22b6e4d" v-text="article.user.name"></a></span>
                            <!--<img class="badge-icon" data-toggle="tooltip" title="" src="http://upload.jianshu.io/user_badge/48d31e61-a03c-4506-81a2-d224ac0a2d8b" alt="48d31e61 a03c 4506 81a2 d224ac0a2d8b" data-original-title="简书版权">-->
                            <p class="describe">山無陵，江水為竭。冬雷震震，夏雨雪。天地合，乃敢與君絕。</p>
                            <div class="meta">
                                <span><Icon type="android-time"></Icon>{{ article.created_at }}</span>
                                <span>阅读 3027</span>
                                <span>评论 241</span>
                                <span>喜欢 94</span>
                            </div>
                        </div>

                        <Button class="btn-edit" type="success" v-if="is_author" icon="android-create" shape="circle">编辑文章</Button>
                        <Button class="btn-focus" type="success" icon="plus-round" shape="circle">关注</Button>
                    </div>
                    <div class="content" v-html="article.content">
                    </div>
                    <div class="footer">
                        <a class="topic" href="/nb/18630507">
                            <Icon type="android-bookmark"></Icon>
                            <span>短篇小说</span>
                        </a>
                        <div class="copyright">© 著作权归作者所有</div>
                        <div class="options">
                            <a href=""><Icon type="flag"></Icon>举报文章</a>
                        </div>
                    </div>

                    <share></share>
                </div>
            </i-col>
        </div>
    </div>
</template>
<script>
    import 'vue-social-share/dist/client.css'
    import IndexHeader from '../../components/commons/Header.vue'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                spin: true,
                article: {
                    id: null,
                    title: null,
                    content: null,
                    read_count: null,
                    topic: {},
                    user: {},
                }
            }
        },
        components: {
            IndexHeader
        },
        computed: {
            is_author:function () {
              return this.id == this.article.user.id
            },
            ...mapState({
                id: state => state.user.id,
            })
        },
        created: function () {
            return this.$axios.get('article/' + this.$route.params.id, {}).then(resource => {
                this.spin = false
                let respond = resource.data
                this.article = respond.data.article
            })
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
            .btn-edit,.btn-focus {
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
    }
</style>
