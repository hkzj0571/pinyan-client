<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="16" class="left">
                <div class="user-detail">
                    <a href="/u/36b4d22b6e4d" class="avatar">
                        <img :src="user.avatar"></a>
                    <div class="info">
                        <span class="name"><a href="/u/36b4d22b6e4d" v-text="user.name"></a></span>
                        <Icon :type="user.gender" v-show="user.gender"></Icon>
                        <ul class="options">
                            <li>
                                <div class="meta-block">
                                    <a href="/users/06201a8515a3/following">
                                        <p>10</p>
                                        关注
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="meta-block">
                                    <a href="/users/06201a8515a3/following">
                                        <p>10</p>
                                        粉丝
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="meta-block">
                                    <a href="/users/06201a8515a3/following">
                                        <p>10</p>
                                        文章
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <router-view/>
            </i-col>
            <i-col :span="7" offset="1" class="right">
                <div class="title">
                    <span>个人介绍</span>
                </div>
                <div class="description">
                    <div class="resume" v-text="user.resume"></div>
                </div>
                <ul class="synamic">
                    <li>
                        <a href="/users/06201a8515a3/subscriptions">
                            <Icon type="android-person"></Icon>
                            关注的用户</a>
                    </li>
                    <li>
                        <a href="/users/06201a8515a3/subscriptions">
                            <Icon type="android-bookmark"></Icon>
                            关注的专题</a>
                    </li>
                    <li>
                        <router-link :to="'/user/'+id+'/focus'">
                            <Icon type="android-favorite-outline"></Icon>喜欢的文章
                        </router-link>
                    </li>
                </ul>
            </i-col>
        </div>
    </div>
</template>

<script>
    import IndexHeader from '../../../components/commons/Header.vue'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                user: {}
            }
        },
        components: {
            IndexHeader,
        },
        computed: mapState({
            id: state => state.user.id,
        }),
        created: function () {
            var user = this.$route.params.user

            return this.$axios.get('user/' + user).then(resource => {
                let respond = resource.data
                if (respond.status) {
                    this.user = respond.data.user
                } else {
                    this.$Message.error(respond.message)
                }
            })
        }
    }
</script>

<style lang="scss">
    .container {
        .right {
            margin-top: 30px;
            .title {
                margin-bottom: 10px;
                span {
                    margin-bottom: 10px;
                    font-size: 14px;
                    color: #969696;
                }
            }
            .description {
                position: relative;
                margin-bottom: 16px;
                padding: 0 0 16px;
                text-align: left;
                font-size: 0;
                border-bottom: 1px solid #f0f0f0;
                clear: both;
                word-break: break-word !important;
                .resume {
                    margin-bottom: 10px;
                    line-height: 20px;
                    font-size: 14px;
                }
            }
            .synamic {
                padding: 5px 0;
                margin-bottom: 15px;
                list-style: none;
                border-bottom: 1px solid #f0f0f0;
                clear: both;
                li {
                    margin-bottom: 10px;
                    line-height: 20px;
                    a {
                        font-size: 15px;
                        color: #262626;
                        line-height: 30px;
                        .ivu-icon {
                            font-size: 20px;
                            vertical-align: -2px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
        .left {
            margin-top: 30px;
            .user-detail {
                margin-bottom: 20px;
                .avatar {
                    width: 75px;
                    height: 75px;
                    vertical-align: middle;
                    display: inline-block;
                    cursor: pointer;
                    img {
                        border: 1px solid #ddd;
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
                        vertical-align: middle;
                        a {
                            display: inline;
                            font-size: 21px;
                            font-weight: 700;
                            vertical-align: middle;
                            color: #262626;
                        }
                    }
                    .ivu-icon {
                        font-size: 21px;
                        vertical-align: -5px;
                    }
                    .ivu-icon-male {
                        color: #6495ED;
                    }
                    .ivu-icon-female {
                        color: #FF6EB4;
                    }
                    .ivu-icon-transgender {
                        color: #43CD80;
                    }
                    .ivu-icon-locked {
                        color: #000;
                    }
                    .options {
                        margin-top: 5px;
                        li {
                            display: inline-block;
                            .meta-block {
                                text-align: center;
                                font-size: 12px;
                                margin: 0 7px 6px 0;
                                padding: 0 7px 0 0;
                                border-right: 1px solid #f0f0f0;
                                a {
                                    color: #969696;
                                    p {
                                        margin-bottom: -3px;
                                        font-size: 15px;
                                        color: #333;
                                    }
                                }
                            }
                            &:last-child {
                                .meta-block {
                                    border-right: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>