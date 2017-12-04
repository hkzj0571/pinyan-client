<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="16">
                <div class="topic-header">
                    <a class="cover">
                        <img src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240">
                    </a>
                    <Button type="success" class="focus" icon="plus-round" shape="circle">关注</Button>
                    <div class="title">
                        <a class="name" href="/c/1hjajt">简书电影</a>
                    </div>
                    <div class="info">
                        收录了62411篇文章 · 955700人关注
                    </div>
                </div>
            </i-col>
            <i-col :span="7" offset="1"></i-col>
        </div>
    </div>
</template>

<script>
    import IndexHeader from '../../components/commons/Header.vue'

    export default {
        data() {
            return {
                user: {}
            }
        },
        components: {
            IndexHeader,
        },
        created: function () {

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
            float: right;
            margin: 23px 0 23px 16px;
            font-size: 15px;
            padding: 8px 0;
            width: 100px;
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
</style>