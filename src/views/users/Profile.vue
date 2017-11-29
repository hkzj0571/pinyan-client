<template>
    <Form :model="profile_form"  :label-width="120" class="settings-basic-form">
        <FormItem label="性别" prop="gender">
            <Select size="large">
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
            <Input type="textarea" :rows="4" placeholder="Enter something..."/>
            <p class="help">请用文字描绘出你精彩的人生，会在个人主页右侧展示</p>
        </FormItem>
        <FormItem label="个人站点">
            <i-input placeholder="请输入你的个人站点" size="large"/>
            <p class="help">填写后会在个人主页显示图标</p>
        </FormItem>
        <FormItem label="微信二维码" class="avatar-item" prop="avatar">
            <Avatar shape="square" :src="profile_form.avatar" size="large" />
            <span class="deatroy">删除</span>
            <p class="help">填写后会在个人主页显示图标</p>
        </FormItem>
        <FormItem>
            <Button type="success" shape="circle">保存</Button>
        </FormItem>
    </Form>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                profile_form:{
                    name:null,
                    avatar:null,
                    email:null,
                }
            }
        },
        created:function () {
            this.profile_form.name = this.name
            this.profile_form.avatar = this.avatar
            this.profile_form.email = this.email
        },
        computed: mapState({
            name: state => state.user.name,
            avatar: state => state.user.avatar,
            email: state => state.user.email,
            is_active: state => state.user.is_active,
            authenticated: state => state.user.authenticated,
        }),
    }
</script>

<style lang="scss">
    .settings-basic-form {
        margin-top: 25px;
        .avatar-item {
            .ivu-form-item-label {
                line-height: 80px;
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
                    border: 1px solid #ddd;
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
                .ivu-input {
                    background: hsla(0,0%,71%,.1);
                    max-width: 350px;
                    resize: none;
                }
                p {
                    font-size: 15px;
                }
                .ivu-select {
                    width:250px;
                    .ivu-select-item {
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
                            color: 	#FF6EB4;
                        }
                        .ivu-icon-male {
                            color: 	#6495ED;
                        }
                        .ivu-icon-transgender {
                            color: #43CD80;
                        }
                        .ivu-icon-locked {
                            color: #000;
                        }
                    }
                    .ivu-select-item-selected {
                        background: #eee !important;
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