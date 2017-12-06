<template>
    <div class="layout">
        <div class="container">
            <i-col :span="18" offset="3">
                <div class="article-header">
                    <div class="header-logo">
                        <router-link to="/"></router-link>
                    </div>
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Button shape="circle" icon="arrow-down-b">发布文章</Button>
                        </a>
                        <div class="topic-select" slot="list">
                            <p>请选择专题</p>
                            <Select v-model="article_form.topic_id"
                                    filterable
                                    placeholder="请输入专题关键词"
                                    :remote-method="getTopics"
                                    :loading="topic_loading"
                                    remote>
                                <Option :value="topic.id" :label="topic.name" v-for="topic in topics">
                                    <img :src="topic.cover">
                                    <span>{{ topic.name }}</span>
                                </Option>
                            </Select>
                            <Button type="ghost" @click="store" :disabled="!create_validate">确定发布</Button>
                        </div>
                    </Dropdown>
                </div>
                <div class="line"></div>
                <div class="article-fored">
                    <Input type="textarea" v-model="article_form.title" :rows="1" class="double_title" placeholder="请输入文章标题"/>
                    <ArticleQuill v-model="article_form.content"></ArticleQuill>
                </div>
            </i-col>
        </div>
    </div>
</template>
<script>
    import ArticleQuill from '../../components/articles/Quill.vue'

    export default {
        data() {
            return {
                topics: [],
                topic_loading: false,
                article_form: {
                    content: null,
                    title: null,
                    topic_id: null,
                }
            }
        },
        components: {
            ArticleQuill
        },
        methods: {
            getTopics(query) {
                if (query !== '') {
                    this.topic_loading = true
                    this.$axios.post('article/select_topic', {query: query}).then(resource => {
                        let respond = resource.data
                        this.topic_loading = false
                        return respond.status
                            ? this.topics = respond.data.topics
                            : this.$Message.error(respond.message)
                    })
                } else {
                    this.topics = []
                }
            },
            store() {
                this.$axios.post('article/store', this.article_form).then(resource => {
                    let respond = resource.data
                    if (respond.status){
                        this.$router.push('/')
                        this.$Message.success('文章发布成功')
                    } else {
                        this.$Message.error(respond.message)
                    }
                })
            },
        },
        computed: {
            create_validate: function () {
                return this.article_form.title && this.article_form.topic_id && this.article_form.content
            }
        },
    }
</script>