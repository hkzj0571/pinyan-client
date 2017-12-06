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
                    <div class="description" v-text="topic.describe"></div>
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
                                    <span class="tag" v-if="user.is_creator == 1">创建者</span>
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