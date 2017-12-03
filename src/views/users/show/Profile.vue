<template>
    <Tabs class="profile" :animated="false">
        <TabPane label="动态" icon="help-buoy">标签二的内容</TabPane>
        <TabPane label="文章" icon="android-list">
            <ul class="user-articlesa">
                <li v-for="article in articles">
                    <div class="content">
                        <div class="author">
                            <router-link to="/">
                                <Avatar icon="person" :src="article.user.avatar"/>
                            </router-link>
                            <div class="info">
                                <a class="nickname" href="" v-text="article.user.name"></a>
                                <span class="time" v-text="article.created_at"></span>
                            </div>
                        </div>
                        <a class="title" href="" v-text="article.title"></a>
                        <p class="abstract" v-text="article.content"></p>
                        <div class="meta">
                            <a href=""><Icon type="eye"></Icon>{{ article.read_count }}</a>
                            <a href=""><Icon type="chatbox-working"></Icon>{{ article.comments_count }}</a>
                            <a href=""><Icon type="android-favorite"></Icon>{{ article.like_count }}</a>
                        </div>
                    </div>
                </li>
                <li class="end">
                    <Button type="text" icon="chevron-down" :loading="loading_article" v-show="!article_end" @click="getArticles">加载更多</Button>
                    <Button type="text" v-show="article_end">加载完毕</Button>
                </li>
            </ul>
        </TabPane>
        <TabPane label="评论" icon="chatbox-working">标签一的内容</TabPane>
    </Tabs>
</template>

<script>
    export default {
        data() {
            return {
                loading_article:false,
                article_end:false,
                article_page: 0,
                articles: []
            }
        },
        created: function () {
            this.getArticles()
        },
        methods: {
            getArticles() {
                this.loading_article = true
                this.article_page++
                this.$axios.post('user/articles?page=' + this.article_page, {}).then(resource => {
                    this.loading_article = false
                    if (resource.data.data.articles.length === 0) {
                        this.article_end = true
                    }
                    this.articles = this.articles.concat(resource.data.data.articles)
                })
            }
        }
    }
</script>

<style lang="scss">
    .profile {
        .ivu-tabs-bar {
            border-bottom: 1px solid #f0f0f0;
            .ivu-tabs-nav-container {
                .ivu-tabs-nav-wrap {
                    .ivu-tabs-nav-scroll {
                        .ivu-tabs-nav {
                            adding-bottom: 5px;
                            .ivu-tabs-ink-bar {
                                background-color: #646464;
                            }
                            .ivu-tabs-tab-active {
                                color: #646464 !important;
                            }
                            .ivu-tabs-tab {
                                padding: 13px 20px;
                                font-size: 15px;
                                font-weight: 700;
                                color: #969696;
                                line-height: 25px;
                                .ivu-icon {
                                    font-size: 21px;
                                    vertical-align: -3px;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    .user-articlesa {
        li {
            position: relative;
            width: 100%;
            margin: 0 0 17px;
            padding: 0 2px 17px 0;
            border-bottom: 1px solid #f0f0f0;
            word-wrap: break-word;
            line-height: 20px;
            .content {
                .author {
                    margin-bottom: 14px;
                    font-size: 13px;
                    .ivu-avatar {
                        margin-right: 5px;
                    }
                    .info {
                        display: inline-block;
                        vertical-align: middle;
                        .nickname {
                            color: #262626;
                            vertical-align: middle;
                        }
                        .time {
                            display: inline-block;
                            padding-left: 3px;
                            color: #969696;
                            vertical-align: middle;
                        }
                    }
                }
                .title {
                    color: #262626;
                    margin: -7px 0 4px;
                    display: inherit;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.5;
                }
                .abstract {
                    margin:10px auto;
                    font-size: 13px;
                    line-height: 24px;
                }
                .meta {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    a {
                        margin-right: 10px;
                        color: #b4b4b4;
                        font-size: 14px;
                        .ivu-icon {
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .end {
            text-align: center;
            border-bottom: none;
            .ivu-btn {
                color: #969696;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
</style>