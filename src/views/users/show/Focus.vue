<template>
    <Tabs class="profile" :animated="false">
        <Icon type=""></Icon>
        <TabPane label="喜欢的文章" icon="android-list">
            <ul class="profile_articles">
                <transition-group name="fade">
                    <li v-for="(article,index) in articles" :class="{'have-img':article.cover}" :key="index">
                    <router-link class="wrap-img" :to="'/article/'+article.id" v-if="article.cover">
                        <img :src="article.cover">
                    </router-link>
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
                        <router-link class="title" :to="'/article/'+article.id" v-text="article.title"></router-link>
                        <p class="abstract" v-text="article.content"></p>
                        <div class="meta">
                            <a class="topic" href="/c/71a87e510a58" v-text="article.topic.name"></a>
                            <a href=""><Icon type="eye"></Icon>{{ article.read_count }}</a>
                            <a href=""><Icon type="chatbox-working"></Icon>{{ article.comments_count }}</a>
                            <a href=""><Icon type="android-favorite"></Icon>{{ article.like_count }}</a>
                            <a href="javascript:void(0);" class="destroy" @click="cancelLike(article,index)"><Icon type="trash-b"></Icon>取消喜欢</a>
                        </div>
                    </div>
                </li>
                </transition-group>
                <li class="end">
                    <Button type="text" icon="chevron-down" :loading="loading_article" v-show="!article_end" @click="getArticles">加载更多</Button>
                    <Button type="text" v-show="article_end">加载完毕</Button>
                </li>
            </ul>
        </TabPane>
        <TabPane label="关注的专题" icon="android-bookmark">标签二的内容</TabPane>
    </Tabs>
</template>

<script>
    export default {
        data() {
            return {
                loading_article: false,
                article_end: false,
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
                this.$axios.post('user/focus_article?page=' + this.article_page, {}).then(resource => {
                    this.loading_article = false
                    if (resource.data.data.articles.length === 0) {
                        this.article_end = true
                    }
                    this.articles = this.articles.concat(resource.data.data.articles)
                })
            },
            cancelLike(article,index){
                this.articles.splice(index,1)
            }
        }
    }
</script>