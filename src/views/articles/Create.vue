<template>
    <div class="layout">
        <div class="container">
            <i-col :span="16" offset="4">
                <div class="header">
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
                                <Option :value="topic.id" :label="topic.name" v-for="topic in topics" >
                                    <img :src="topic.cover">
                                    <span>{{ topic.name }}</span>
                                </Option>
                            </Select>
                            <Button type="ghost" @click="store">确定发布</Button>
                        </div>
                    </Dropdown>
                </div>
                <div class="line"></div>
                <div class="article-fored">
                    <Input type="textarea" v-model="article_form.title" :rows="1" class="article-input"
                           placeholder="请输入文章标题"></Input>
                    <ArticleQuill v-model="article_form.content"></ArticleQuill>
                </div>
            </i-col>
        </div>
    </div>
</template>
<script>
    import ArticleQuill from '../../components/articles/Quill.vue'
    export default {
        data () {
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
            getTopics (query) {
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
            store(){

            },
        }
    }
</script>

<style lang="scss">
    .container {
        .header {
            text-align: right;
            display: block;
            padding: 30px 0px 5px;
            .header-logo {
                width: 55px;
                height: 26px;
                border-radius: 3px;
                float: left;
                top: 0px;
                left: 20px;
                background: url(../../assets/images/min-logo.png) no-repeat;
                background-size: 100% 100%;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .ivu-btn {
                background: none;
                color: #ea6f5a;
                border: none;
                font-size: 14px;
                .ivu-icon {
                    font-size: 18px;
                    vertical-align: -2px;
                    float: right;
                    margin-left: 5px;
                }
            }
            .topic-select {
                width: 250px;
                padding: 15px 25px;
                text-align: center;
                p {
                    color: #495060;
                    font-size: 15px;
                    font-weight: 400;
                    margin-bottom: 25px;
                }
                .ivu-select-dropdown {
                    .ivu-select-dropdown-list {
                        .ivu-select-item {
                            text-align: left;
                            padding: 6px 12px;
                            img {
                                width: 36px;
                                height: 36px;
                                margin-right: 5px;
                                line-height: 36px;
                                display: inline-block;
                                vertical-align: -10px;
                                border-radius: 3px;
                            }
                            span {
                                color: #495060;
                                font-size: 15px;
                                line-height: 36px;
                                display: inline-block;
                            }
                            &:hover {
                                background: #f7f8f9;
                            }
                        }
                        .ivu-select-item-selected {
                            background: #f7f8f9 !important;
                        }
                    }
                }
                .ivu-btn-ghost {
                    color: #ea6f5a;
                    background-color: transparenta;
                    border: 1px solid #ea6f5a;
                    font-size: 13px;
                    margin-top: 25px;
                }
            }
        }
    }

    .article-fored {
        margin-top: 25px;
    }
</style>