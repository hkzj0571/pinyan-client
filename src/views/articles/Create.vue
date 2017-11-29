<template>
    <div class="layout">
        <div class="container">
            <i-col :span="24">
                <div class="header">
                    <div class="header-logo">
                        <router-link to="/"></router-link>
                    </div>
                    <Button shape="circle" icon="android-share">发布文章</Button>
                </div>
                <div class="line"></div>
                <Input type="textarea" :rows="1" class="article-input" placeholder="请输入文章标题"></Input>
                <quill-editor class="article-quill" ref="newEditor" v-model="content" :options="editorOption"></quill-editor>
            </i-col>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                content: '',
                uniqueId:'sdasdasd',
                editorOption: {
                    placeholder: '请输入正文',
                    modules: {
                        toolbar: [
                            [{'header': 1}, {'header': 2}],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block', 'image'],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'indent': '-1'}, {'indent': '+1'}],
                            ['clean']
                        ]
                    },
                    theme: 'snow'
                }
            }
        },
        methods: {
        },
        computed: {
            editor() {
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    .article-quill {
        padding: 0 0 200px;
        .ql-toolbar {
            padding: 0;
            border: none;
            border-top: 1px solid #e7eaf1;
            margin-bottom: 30px;
            .ql-formats {
                margin-right: 10px;
                padding-right: 10px;
                border-right: 1px solid #e7eaf1;
                button {
                    width: 36px;
                    height: 36px;
                    padding: 6px;
                    margin: 6px 3px 0px;
                    .ql-stroke {
                        stroke: #8590a6;
                    }
                    .ql-fill {
                        fill: #8590a6;
                    }
                    &:hover {
                        background: #f6f7f8;
                    }
                }
                &:last-child {
                    border-right: none;
                }
                .ql-active {
                    .ql-stroke {
                        stroke: #0f88eb;
                    }
                    .ql-fill {
                        fill: #0f88eb;
                    }
                }
            }
        }
        .ql-container {
            border: none;
            .ql-editor {
                color: #495060;
                font-size: 16px;
                p {
                    line-height: 24px;
                    margin: 0 0 1em;
                    img {
                        display: block;
                        margin: 25px auto;
                    }

                    code {
                        line-height: 28px;
                        background: #f6f6f6;
                        color: #495060;
                        padding: 6px 8px;
                        border-radius: 3px;
                        font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
                    }
                }
                .ql-syntax {
                    line-height: 28px;
                    background: #f6f6f6;
                    color: #495060;
                    margin: 1em 0;
                    padding: 16px;
                    border-radius: 6px;
                    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
                }
            }
            .ql-blank::before {
                color: rgb(179, 179, 179);
                font-style: inherit;
                font-size: 16px;
            }
        }
    }

    .article-input {
        height: inherit;
        width: 100%;
        position: relative;
        margin: 35px 0px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        padding: 0px;
        .ivu-input {
            resize: none;
            min-height: 44px;
            display: block;
            width: 100%;
            font-size: 32px;
            line-height: 1.4;
            font-weight: 600;
            box-shadow: none;
            border-width: 0px;
            border-style: initial;
            border-color: initial;
            border-image: initial;
            outline: none;
        }
    }

    .container {
        .header {
            text-align: right;
            display: block;
            padding: 20px 0px 5px;
            .header-logo {
                width: 55px;
                height: 26px;
                border-radius: 3px;
                float: left;
                top: 15px;
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
                background: #ea6f5a;
                color: #fff;
                border:1px solid transparent;
                .ivu-icon {
                    font-size: 18px;
                    vertical-align: -2px;
                }
                &:hover {
                    background: #d66552;
                }
            }
        }
    }
</style>