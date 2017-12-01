<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="16" offset="4">
                <div class="article">

                    <Spin size="large" fix v-if="spin">
                        <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
                        <div>文章加载中...</div>
                    </Spin>
                    <h1 class="title" v-text="article.title"></h1>

                    <!-- 作者区域 -->
                    <div class="author">
                        <a class="avatar" href="/u/36b4d22b6e4d">
                            <img :src="article.user.avatar">
                        </a>
                        <div class="info">
                            <span class="name"><a href="/u/36b4d22b6e4d" v-text="article.user.name"></a></span>
                            <!--<img class="badge-icon" data-toggle="tooltip" title="" src="http://upload.jianshu.io/user_badge/48d31e61-a03c-4506-81a2-d224ac0a2d8b" alt="48d31e61 a03c 4506 81a2 d224ac0a2d8b" data-original-title="简书版权">-->
                            <!-- 关注用户按钮 -->
                            <!--<a class="btn btn-success follow"><i class="iconfont ic-follow"></i><span>关注</span></a>-->
                            <!-- 文章数据信息 -->
                            <div class="meta">
                                <span class="publish-time" v-text="article.created_at">2017.11.30 10:11*</span>
                                <span class="wordage">字数 2264</span>
                                <span class="views-count">阅读 54</span><span class="comments-count">评论 1</span><span
                                    class="likes-count">喜欢 2</span></div>
                        </div>
                        <!-- 如果是当前作者，加入编辑按钮 -->
                    </div>
                    <!-- -->

                    <!-- 文章内容 -->
                    <div class="content" v-html="article.content">
                    </div>
                </div>
            </i-col>
        </div>
    </div>
</template>
<script>
    import IndexHeader from '../../components/commons/Header.vue'

    export default {
        data() {
            return {
                spin:true,
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
        created: function () {
            return this.$axios.get('article/' + this.$route.params.id, {}).then(resource => {
                let respond = resource.data
                this.article = respond.data.article
                this.spin = false
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
            margin: 20px 0 0;
            font-size: 34px;
            font-weight: 700;
            line-height: 1.3;
        }
        .author {
            margin: 30px 0 40px;
            .avatar {
                width: 48px;
                height: 48px;
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
                    }
                }
                .meta {
                    margin-top: 5px;
                    font-size: 12px;
                    color: #969696;
                    span {
                        padding-right: 5px;
                    }
                }
            }
        }
        .content {
            color: #262626;
            font-size: 16px;
            p {
                line-height: 26px;
                margin: 0 0 .75em;

                img {
                    display: block;
                    margin: 25px auto;
                }

                code {
                    line-height: 28px;
                    background: #f6f6f6;
                    color: #262626;
                    padding: 6px 8px;
                    border-radius: 3px;
                    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
                }
            }
            .ql-syntax {
                display: block;
                white-space: normal;
                line-height: 28px;
                background: #f6f6f6;
                color: #262626;
                margin: 1em 0;
                padding: 16px;
                border-radius: 6px;
                font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
            }
            h1,h2,h3,h4,h5,h7 {
                margin-bottom: 25px;
            }
        }
    }
</style>
