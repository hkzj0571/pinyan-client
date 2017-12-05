<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="16">
                <div class="topic-header">
                    <a class="cover">
                        <img :src="topic.cover">
                    </a>
                    <Button type="success" class="focus" :class="{active:is_focus}" :icon="focus_cion" shape="circle" @click="toggleFocus">{{ focus_text }}</Button>
                    <div class="title">
                        <a class="name" href="/c/1hjajt" v-text="topic.name"></a>
                    </div>
                    <div class="info">
                        收录了 {{ topic.article_count }} 篇文章 · {{ topic.follower_count }} 人关注
                    </div>
                </div>
                <router-view></router-view>
            </i-col>
            <i-col :span="7" offset="1">
                <div class="aside">
                    <p class="title">专题公告</p>
                    <div class="description" v-html="topic.describe"></div>
                    <div class="share">
                        <span>分享到</span>
                        <share :config="{disabled:['google','facebook','diandian','tencent','linkedin','twitter']}"></share>
                    </div>
                    <div class="manage">
                        <p class="title">管理员</p>
                        <ul class="collection">
                            <li v-for="user in topic.manages">
                                <a :href="'/topics/'+topic.id">
                                    <Avatar icon="person" shape="square" :src="user.avatar"></Avatar>
                                    {{ user.name }}
                                    <span class="tag" v-if="user.pivot. is_creator == 1">创建者</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="user-action" v-if="topic.creator.id == user_id">
                        <router-link :to="'/topics/'+topic.id+'/edit'">
                            <Button type="text" icon="android-create">编辑专题</Button>
                        </router-link>
                        <!--<Button type="text" icon="android-delete">删除专题</Button>-->
                    </div>
                </div>
            </i-col>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import 'vue-social-share/dist/client.css'
    import IndexHeader from '../../components/commons/Header.vue'

    export default {
        data() {
            return {
                is_focus: false,
                topic: {
                    creator:{}
                },
            }
        },
        components: {
            IndexHeader,
        },
        computed: {
            focus_cion() {
                return this.is_focus ? 'checkmark-round' : 'plus-round'
            },
            focus_text() {
                return this.is_focus ? '已关注' : '关注'
            },
            ...mapState({
                user_id: state => state.user.id,
            })
        },
        methods: {
            toggleFocus() {
                this.is_focus = !this.is_focus
                this.$axios.post(`topics/${this.$route.params.topic}/focus`, {}).then(resource => {
                    let respond = resource.data
                    respond.data.type == 'attached' ? this.topic.follower_count++ : this.topic.follower_count--
                })
            },
        },
        created: function () {
            this.$axios.post(`topics/${this.$route.params.topic}/is_focus`, {}).then(resource => {
                let respond = resource.data
                this.is_focus = respond.data.is_focus
            })

            this.$axios.post(`topics/${this.$route.params.topic}`, {}).then(resource => {
                let respond = resource.data
                this.topic = respond.data.topic
            })
        }
    }
</script>

<style lang="scss">
    .topic-header {
        margin-top: 25px;
        margin-bottom: 35px;
        .cover {
            float: left;
            width: 80px;
            height: 80px;
            display: block;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
                border: 1px solid #ddd;
                border-radius: 10%;
            }
        }
        .focus {
            border: 1px solid #42c02e;
            color: #42c02e;
            background: #fff;
            float: right;
            margin: 23px 0 23px 16px;
            font-size: 15px;
            padding: 8px 0;
            width: 100px;
            &:hover {
                background-color: rgba(59, 194, 29, .05);
            }
        }
        .active, .active:hover {
            background: #42c02e;
            color: #fff;
        }
        .title {
            padding: 10px 0 0 100px;
            .name {
                display: inline;
                font-size: 21px;
                font-weight: 700;
                vertical-align: middle;
                color: #262626;
            }
        }
        .info {
            margin-top: 10px;
            padding-left: 100px;
            font-size: 14px;
            color: #969696;
        }
    }

    .topic_menus {
        li {
            padding: 0px 25px !important;
            font-size: 15px;
            font-weight: 700;
            color: #969696 !important;
            &:hover {
                color: #646464 !important;
                border-bottom: 2px solid #646464 !important;
            }
            .ivu-icon {
                font-size: 23px;
                vertical-align: -3px;
            }
        }
        .ivu-menu-item-active {
            color: #646464 !important;
            border-bottom: 2px solid #646464 !important;
        }
        &:after {
            background: #f0f0f0 !important;
        }
    }

    .aside {
        margin-top: 25px;
        display: block;
        .title {
            float: left;
            margin-bottom: 10px;
            font-size: 14px;
            color: #969696;
        }
        .description {
            position: relative;
            margin-bottom: 20px;
            padding: 0 0 16px;
            text-align: left;
            font-size: 14px;
            border-bottom: 1px solid #f0f0f0;
            clear: both;
            word-break: break-word !important;
        }
        .share {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f0f0f0;
            line-height: 45px;
            span {
                font-size: 14px;
                vertical-align: middle;
            }
            .social-share {
                display: inline-block;
                float: right;
            }
        }
        .user-action {
            .ivu-btn {
                margin-right: 15px;
                padding: 0;
                color: #969696;
                &:hover {
                    color: #262626;
                }
                .ivu-icon {
                    font-size: 16px;
                    vertical-align: -1px;
                }
            }
        }
        .manage {
            .title {
                float: left;
                margin-bottom: 10px;
                font-size: 14px;
                color: #969696;
            }
            .collection {
                margin-bottom: 16px;
                padding-bottom: 16px;
                list-style: none;
                border-bottom: 1px solid #f0f0f0;
                clear: both;
                li {
                    margin-bottom: 15px;
                    a {
                        font-size: 14px;
                        color: #262626;
                        .ivu-avatar {
                            margin-right: 10px;
                        }
                    }
                    .tag {
                        padding: 1px 3px;
                        margin-left: 2px;
                        border-radius: 3px;
                        font-size: 12px;
                        color: #ea6f5a;
                        border: 1px solid #ea6f5a;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>