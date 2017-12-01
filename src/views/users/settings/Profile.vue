<template>
    <Form :model="profile_form" ref="profile_form" :rules="rules" :label-width="120" class="settings-basic-form">
        <FormItem label="性别">
            <Select size="large" v-model="profile_form.gender">
                <Option value="female" label="女">
                    <Icon type="female"></Icon>
                    <span>女</span>
                </Option>
                <Option value="male" label="男">
                    <Icon type="male"></Icon>
                    <span>男</span>
                </Option>
                <Option value="transgender" label="跨性别者">
                    <Icon type="transgender"></Icon>
                    <span>跨性别者</span>
                </Option>
                <Option value="locked" label="保密">
                    <Icon type="locked"></Icon>
                    <span>保密</span>
                </Option>
            </Select>
        </FormItem>
        <FormItem label="个人简介" prop="describe">
            <Input type="textarea" :rows="4" v-model="profile_form.describe" placeholder="Enter something..."/>
            <p class="help">请填写您的个人描述，会在个人主页右侧展示</p>
        </FormItem>
        <FormItem label="个人站点" prop="website">
            <i-input placeholder="请输入你的个人站点" v-model="profile_form.website" size="large"/>
            <p class="help">填写后会在个人主页显示图标</p>
        </FormItem>
        <FormItem label="微信二维码" class="wechat-item">
            <CropWechatQrCode></CropWechatQrCode>
        </FormItem>
        <FormItem>
            <Button type="success" shape="circle" @click="onSubmit('profile_form')">保存</Button>
        </FormItem>
    </Form>
</template>

<script>
    import CropWechatQrCode from '../../../components/users/CropWechatQrCode.vue'
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                rules: {
                    describe: [
                        {max: 1000, message: '个人描述最多只能填写 1000 字', trigger: 'blur'}
                    ],
                    website: [
                        {max: 100, message: '网址最长为 100 位', trigger: 'blur'}
                    ],
                },
                profile_form: {
                    gender: null,
                    describe: null,
                    website: null,
                }
            }
        },
        components: {
            CropWechatQrCode
        },
        created: function () {
            this.profile_form.gender = this.gender
            this.profile_form.describe = this.describe
            this.profile_form.website = this.website
        },
        computed: mapState({
            gender: state => state.user.gender,
            describe: state => state.user.describe,
            website: state => state.user.website,
        }),
        methods: {
            onSubmit(name){
                this.$refs[name].validate((valid) => {
                    if (!valid) return

                    this.$axios.put('user/profile', this.profile_form).then(resource => {
                        let respond = resource.data
                        return respond.status
                            ? this.$store.dispatch('profile_updated',this.profile_form).then(() => {
                                return this.$Message.success(respond.message)
                            })
                            : this.$Message.error(respond.message)
                    })
                })
            },
        }
    }
</script>

<style lang="scss">
    .settings-basic-form {
        margin-top: 25px;
        .avatar-item,.wechat-item {
            .ivu-form-item-label {
                line-height: 80px;
            }
            .ivu-form-item-content {
                line-height: 100px;
            }
        }
        .wechat-item {
            .ivu-avatar {
                img {
                    padding: 4px;
                    line-height: 1.42857143;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 4px;
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
                    width: 250px;
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
        }
    }
</style>