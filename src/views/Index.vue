<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="16">
                <Carousel autoplay loop v-model="value2" class="index-carousel">
                    <CarouselItem v-for="i in 10">
                        <div class="item">
                            <img src="//upload.jianshu.io/admin_banners/web_images/3924/931b127da83d69101bb158583779dcc1a1991065.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540">
                        </div>
                    </CarouselItem>
                </Carousel>
                <div class="line"></div>
                <div class="index-list" v-for="x in 10">
                    <a class="wrap-img" href="/p/17e0d08ed8ec" target="_blank">
                        <img class="  img-blur-done"
                             src="//upload-images.jianshu.io/upload_images/2669904-2ba71dd6ec51914d.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
                             alt="120">
                    </a>
                    <div class="content">
                        <div class="author">
                            <a class="avatar" target="_blank" href="/u/24200641ff1a">
                                <img src="//upload.jianshu.io/users/upload_avatars/2669904/5e349b10c3f7?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                                     alt="64">
                            </a>
                            <div class="info">
                                <a class="nickname" target="_blank" href="/u/24200641ff1a">罗衣一时聚</a>
                                <span class="time" data-shared-at="2017-11-24T18:57:11+08:00">三小时前</span>
                            </div>
                        </div>
                        <a class="title" target="_blank" href="/p/17e0d08ed8ec">那个在红蓝黄中长大的女孩，后来怎样了？</a>
                        <p class="abstract">
                            01 昨天，手机被各种红蓝黄幼儿园事件刷屏。我们许是太久没有八卦了，又或者是天性纯良，看不得世界黑暗的一面。于是一群人在寝室义愤填膺，讲述着自己从各处看到的新闻，也对三色幼儿...
                        </p>
                        <div class="meta">
                            <a class="collection-tag" target="_blank" href="/c/20f7f4031550">社会热点</a>
                            <a target="_blank" href="/p/17e0d08ed8ec">
                                <Icon type="eye"></Icon>
                                2702
                            </a> <a target="_blank" href="/p/17e0d08ed8ec#comments">
                            <Icon type="chatbox-working"></Icon>
                            79
                        </a> <span><Icon type="android-favorite"></Icon> 94</span>
                        </div>
                    </div>
                </div>
            </i-col>
            <i-col :span="7" offset="1">
                <Card class="index-topad" dis-hover>
                    <p slot="title">
                        <Icon type="flame"></Icon>
                        热门专题
                    </p>
                    <router-link to="/" slot="extra">
                        查看更多
                        <Icon type="chevron-right"></Icon>
                    </router-link>
                    <div class="index-topics">
                        <Button type="ghost">
                            短篇小说
                        </Button>
                        <Button type="ghost">
                            时差党
                        </Button>
                        <Button type="ghost">
                            生活家
                        </Button>
                        <Button type="ghost">
                            社会热点
                        </Button>
                        <Button type="ghost">
                            谈谈情，说说爱
                        </Button>
                        <Button type="ghost">
                            读书，散文
                        </Button>
                    </div>
                </Card>
                <div class="line"></div>


                <div class="recommended-authors">
                    <div class="title">
                        <Icon type="ribbon-b" class="recommend"></Icon>
                        <span>推荐作者</span>
                        <a class="show-all">
                            查看全部
                            <Icon type="chevron-right"></Icon>
                        </a>
                    </div>
                    <ul class="list">
                        <li v-for="i in 5">
                            <a href="/u/78f970537a5e?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="avatar">
                                <img src="//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
                            <a class="follow" state="0">
                                <Icon type="plus-round"></Icon>
                                关注
                            </a>
                            <a href="/u/78f970537a5e?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="name">
                                名贵的考拉熊
                            </a>
                            <p>
                                写了134.1k字 · 10.4k喜欢
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="qrcode">
                    <router-link to="https://juejin.im/app" target="_blank">
                        <img src="../assets/images/qrcode.png" class="qr-img">
                    </router-link>
                    <div class="info">
                        <span class="headline">下载品言手机APP<Icon type="chevron-right"></Icon></span>
                        <span class="desc">十年一品温如言</span>
                    </div>
                </div>
            </i-col>
        </div>
    </div>
</template>
<script>
    import IndexHeader from '../components/commons/Header.vue'
    export default {
        data() {
            return {
                value2: 0
            }
        },
        components: {
            IndexHeader
        },
    }
</script>

<style lang="scss">
    .index-carousel {
        margin: 15px auto;
        .ivu-carousel-item {
            .item {
                img {
                    width: 100%;
                    height: 300px;
                }
            }
        }
    }

    .index-topad {
        margin-top: 25px;
        height: 300px;
        .ivu-card-head {
            p {
                color: #ea6f5a;
                .ivu-icon {
                    font-size: 22px;
                    vertical-align: -3px;
                    margin-right: 8px;
                }
            }
        }
        .ivu-card-extra {
            a {
                font-size: 12px;
                color: #969696;
            }
        }
        .ivu-card-body {
            .index-topics {
                .ivu-btn {
                    background: #f7f7f7;
                    margin: 0 10px 10px 0px;
                    &:hover {
                        color: #495060;
                        border-color: #dddee1;
                    }
                }
            }
        }
    }

    .index-list {
        position: relative;
        width: 100%;
        margin: 0 0 17px;
        padding: 0 2px 17px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        .wrap-img {
            position: absolute;
            top: 50%;
            margin-top: -68px;
            right: 0;
            width: 150px;
            height: 120px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 4px;
                border: 1px solid #f0f0f0;
            }
        }
        .content {
            padding-right: 160px;
            .author {
                margin-bottom: 14px;
                font-size: 13px;
                .avatar {
                    width: 32px;
                    height: 32px;
                    display: block;
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0 5px 0 0;
                    img {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        vertical-align: middle;
                    }
                }
                .info {
                    display: inline-block;
                    vertical-align: middle;
                    .nickname {
                        color: #495060;
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
                margin: -7px 0 4px;
                display: inherit;
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
                color: #495060;
            }
            .abstract {
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
            }
            .meta {
                padding-right: 0 !important;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                .collection-tag {
                    display: inline-block;
                    padding: 3px 6px;
                    margin-top: -1px;
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 1;
                    vertical-align: middle;
                    color: #ea6f5a !important;
                    border: 1px solid rgba(236, 97, 73, .7);
                    border-radius: 3px;
                }
                a {
                    margin-right: 10px;
                    color: #b4b4b4;
                }
                span {
                    margin-right: 10px;
                    color: #b4b4b4;
                }
                .ivu-icon {
                    font-size: 18px;
                    vertical-align: -2px;
                    margin-right: 5px;
                }
            }
        }
    }

    .recommended-authors {
        margin-bottom: 20px;
        padding-top: 0;
        font-size: 13px;
        text-align: center;
        .title {
            margin-bottom: 20px;
            text-align: left;
            .recommend {
                font-size: 25px;
                color: #42c02e;
                vertical-align: -5px;
                margin-right: 5px;
            }
            span {
                font-size: 14px;
                color: #42c02e;
            }
            .show-all {
                float: right;
                display: inline-block;
                font-size: 12px;
                color: #969696;
                margin-top: 3px;
            }
        }
        .list {
            margin: 0 0 20px;
            text-align: left;
            list-style: none;
            li {
                margin-top: 15px;
                .avatar {
                    float: left;
                    width: 48px;
                    height: 48px;
                    margin-right: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        display: block;
                        cursor: pointer;
                    }
                }
                .follow {
                    .ivu-icon {
                        margin-right: 5px;
                    }
                    float: right;
                    margin-top: 12px;
                    padding: 0;
                    font-size: 13px;
                    color: #42c02e;
                }
                .name {
                    color: #2f2f2f;
                    padding-top: 5px;
                    margin-right: 60px;
                    font-size: 14px;
                    display: block;
                }
                p {
                    margin-top: 2px;
                    font-size: 12px;
                    color: #969696;
                }
            }
        }
    }

    .qrcode {
        cursor: pointer;
        padding: 10px 22px;
        border-radius: 3px;
        background: linear-gradient(90deg,#11998e,#38ef7d);
        a {
            width: 60px;
            height: 60px;
            display: block;
            cursor: pointer;
            display: inline-block;
            vertical-align: middle;
            margin: 0 5px 0 0;
            img {
                width: 100%;
                height: 100%;
                vertical-align: middle;
            }
        }
        .info {
            vertical-align: middle;
            display: inline-block;
            margin-left: 8px;
            .headline {
                color: #fff;
                font-size: 16px;
                vertical-align: middle;
                .ivu-icon {
                    margin-left: 5px;
                }
            }
            .desc {
                margin-top: 4px;
                font-size: 13px;
                color: #fff;
                display: block;
            }
        }
    }
</style>