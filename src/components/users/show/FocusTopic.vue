<template>
    <ul class="topics_list">
        <transition-group name="fade">
            <li v-for="(topic,index) in topics" :key="index">
                <router-link class="cover" to="/c/1hjajt">
                    <Avatar :src="topic.cover" shape="square" size="large"></Avatar>
                </router-link>
                <div class="info">
                    <a class="title" href="/c/1hjajt" v-text="topic.name"></a>
                    <div class="meta">收录了 {{ topic.article_count }} 篇文章，{{ topic.follower_count }} 人关注</div>
                </div>
                <Button icon="checkmark-round" shape="circle" size="large" @click="cancel(topic,index)">已关注</Button>
            </li>
        </transition-group>
        <li class="end">
            <Button type="text" icon="chevron-down" :loading="loading" v-show="!end" @click="getTopics">加载更多</Button>
            <Button type="text" v-show="end">加载完毕</Button>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                end: false,
                page: 0,
                topics: []
            }
        },
        created: function () {
            this.getTopics()
        },
        methods: {
            getTopics() {
                this.loading = true
                this.page++
                this.$axios.post('user/focus_topics?page=' + this.page, {}).then(resource => {
                    this.loading = false
                    if (resource.data.data.topics.length === 0) {
                        this.end = true
                    }
                    this.topics = this.topics.concat(resource.data.data.topics)
                })
            },
            cancel(topic, index) {
                this.topics.splice(index, 1)
            }
        }
    }
</script>

<style lang="scss">
    .topics_list {
        margin: 25px auto;
        li {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #f0f0f0;
            line-height: normal;
            .ivu-avatar {
                width: 52px;
                height: 52px;
                margin-right: 8px;
                vertical-align: middle;
                display: inline-block;
            }
            .info {
                vertical-align: middle;
                display: inline-block;
                max-width: 450px;
                .title {
                    font-size: 15px;
                    font-weight: 700;
                    color: #333;
                }
                .meta {
                    padding-top: 5px;
                    font-size: 12px;
                    color: #969696;
                }
            }
            .ivu-btn {
                color: #8c8c8c;
                float: right;
                margin-top: 8px;
                &:hover {
                    border: 1px solid #dddee1;
                }
            }
        }
        .end {
            text-align: center;
            .ivu-btn {
                float: inherit;
                border: none !important;
            }
            border-bottom: none;
        }
    }
</style>