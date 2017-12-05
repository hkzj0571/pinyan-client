<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="18" offset="3">
                <div class="topic-fored">
                    <Form :label-width="120" class="create-topic-form">
                        <FormItem label="专题封面" class="wechat-item">
                            <CropCover v-model="topic.cover"></CropCover>
                        </FormItem>
                        <FormItem label="专题名称" prop="describe">
                            <Input v-model="topic.name" />
                            <p class="help">请填写专题的名称，唯一且不可重复</p>
                        </FormItem>
                        <FormItem label="专题描述" prop="describe">
                            <Input type="textarea" :rows="5" v-model="topic.describe" />
                            <p class="help">请填写专题的描述</p>
                        </FormItem>
                        <FormItem>
                            <Button type="success" shape="circle" @click="update" :disabled="!is_create">更新专题</Button>
                        </FormItem>
                    </Form>
                </div>
            </i-col>
        </div>
    </div>
</template>
<script>
    import IndexHeader from '../../components/commons/Header'
    import CropCover from '../../components/topics/CropCover'

    export default {
        data() {
            return {
                topic:{}
            }
        },
        components: {
            CropCover,
            IndexHeader
        },
        methods: {
            update(){
                this.$axios.put(`topics/${this.$route.params.topic}`,this.topic).then(resource => {
                    let respond = resource.data
                    if (respond.status) {
                        this.$router.push('/topics/'+this.$route.params.topic)
                        this.$Message.success(respond.message)
                    } else {
                        this.$Message.error(respond.message)
                    }
                })
            }
        },
        computed: {
            is_create(){
                return this.topic.cover && this.topic.name && this.topic.describe;
            }
        },
        created:function () {
            return this.$axios.post(`topics/${this.$route.params.topic}`, {}).then(resource => {
                let respond = resource.data
                this.topic = respond.data.topic
            })
        }
    }
</script>

<style lang="scss">
    .topic-fored {
        margin-top: 25px;
        .create-topic-form {
            margin-top: 25px;
            .avatar-item, .wechat-item {
                .ivu-form-item-label {
                    line-height: 80px;
                }
                .ivu-form-item-content {
                    line-height: 100px;
                }
            }
            .wechat-item {
                .ivu-avatar {
                    background: none;
                    img {
                        border-radius: 10px;
                        background: none;
                        border: 1px solid #ddd;
                    }
                }
            }
            .ivu-form-item {
                border-bottom: 1px solid #f0f0f0;
                padding-bottom: 20px;
                .ivu-form-item-label {
                    text-align: left;
                    font-size: 15px;
                    color: #969696;
                }
                .ivu-form-item-content {
                    .ivu-btn-success {
                        padding: 6px 35px;
                        font-size: 15px;
                    }
                    .ivu-avatar {
                        width: 100px;
                        height: 100px;
                        cursor: pointer;
                    }
                    .deatroy {
                        color: #969696;
                        cursor: pointer;
                        margin-left: 25px;
                        display: none;
                        &:hover {
                            color: #000;
                        }
                    }
                    .ivu-spin {
                        width: 100px;
                        height: 105px;
                        cursor: pointer;
                        line-height: 40px;
                        display: inline-block;
                    }
                    .wechat_upload {
                        color: #19be6b;
                        border: 1px solid #19be6b;
                        .ivu-icon {
                            font-size: 20px;
                            vertical-align: -3px;
                        }
                    }
                    .ivu-upload {
                        display: inline-block;
                    }
                    .ivu-input {
                        background: hsla(0, 0%, 71%, .1);
                        max-width: 350px;
                        resize: none;
                    }
                    p {
                        font-size: 15px;
                    }
                    .ivu-select {
                        width: 150px;
                        .ivu-select-item {
                            color: #495060;
                            padding: 12px 24px;
                            font-size: 14px !important;
                            .ivu-icon {
                                display: inline-block;
                                width: 20px;
                                height: 20px;
                                line-height: 20px;
                                text-align: center;
                                font-size: 17px;
                                margin-right: 5px;
                            }
                            .ivu-icon-female {
                                color: #FF6EB4;
                            }
                            .ivu-icon-male {
                                color: #6495ED;
                            }
                            .ivu-icon-transgender {
                                color: #43CD80;
                            }
                            .ivu-icon-locked {
                                color: #000;
                            }
                            &:hover {
                                color: #495060;
                                background: #f7f8f9;
                            }
                        }
                        .ivu-select-item-selected {
                            background: #f7f8f9 !important;
                        }
                    }
                    &:hover {
                        .deatroy {
                            display: inline-block;
                        }
                    }
                    .help {
                        margin: 0;
                        padding: 8px 0 0;
                        font-size: 12px;
                        color: #969696;
                        clear: both;
                        line-height: 20px;
                        margin-top: 10px;
                    }
                }
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }
</style>