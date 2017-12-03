<template>
    <Tabs class="profile" :animated="false">
        <Icon type=""></Icon>
        <TabPane label="喜欢的文章" icon="android-list">
            <ul class="user_focus_article">
                <li class="have-img">
                    <a class="wrap-img">
                        <img src="//upload-images.jianshu.io/upload_images/1988937-35f99f7190f401ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240">
                    </a>
                    <div class="content">
                        <div class="author">
                            <a class="avatar" href="/u/9019674f5808">
                                <img src="//upload.jianshu.io/users/upload_avatars/1988937/8d349eed9902.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
                            </a>
                            <div class="info">
                                <a class="nickname" href="/u/9019674f5808">Soul麦芽</a>
                                <span class="time" data-shared-at="2017-12-03T09:32:24+08:00">14小时前</span>
                            </div>
                        </div>
                        <a class="title" href="/p/2365e02d9688">“一个人喝醉酒的时候最孤独”</a>
                        <p class="abstract">
                            如果一个人住，千万不要在下午时睡午觉，一觉睡到六七点等你一睁开眼，看着朦胧黑暗的天空，看着空放的房间，会有一种被全世界遗弃的感觉，孤独在那一刻体现的淋漓尽致。 01 周末的地...
                        </p>
                        <div class="meta">
                            <a href="/p/2365e02d9688">
                                <i class="iconfont ic-list-read"></i> 5270
                            </a> <a target="_blank" href="/p/2365e02d9688#comments">
                            <i class="iconfont ic-list-comments"></i> 196
                        </a> <a href="/p/2365e02d9688">
                            <i class="iconfont ic-list-like"></i> 247
                        </a> <a href="/p/2365e02d9688">
                            <i class="iconfont ic-list-money"></i> 7
                        </a> <a class="cancel" data-note-id="20514104">
                            取消喜欢
                        </a>
                        </div>
                    </div>
                </li>
                <li class="end">
                    <Button type="text" icon="chevron-down" :loading="loading_article" v-show="!article_end"
                            @click="getArticles">加载更多
                    </Button>
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
            }
        }
    }
</script>

<style lang="scss">

</style>