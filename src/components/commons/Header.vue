<template>
    <div class="header">
        <Menu mode="horizontal" active-name="1">
            <div class="header-logo">
                <router-link to="/"></router-link>
            </div>
            <div class="container">
                <div class="header-nav">
                    <MenuItem name="1">
                        <Icon type="android-compass"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="fireball"></Icon>
                        热门
                    </MenuItem>
                    <MenuItem name="5">
                        <Icon type="android-hangout"></Icon>
                        话题
                    </MenuItem>
                    <MenuItem name="3" class="header-search">
                        <i-input placeholder="搜索" icon="ios-search"/>
                    </MenuItem>
                    <MenuItem name="4" class="header-register" v-if="!authenticated">
                        <router-link to="/login">
                            <Button shape="circle">登陆</Button>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="4" class="header-user" v-if="authenticated">
                        <Dropdown trigger="click">
                            <a href="javascript:void(0)">
                                <Avatar :src="avatar" shape="square" size="large"/>
                            </a>
                            <DropdownMenu slot="list">
                                <router-link to="login">
                                    <DropdownItem name="profile">
                                        <Icon type="person"></Icon>
                                        主页
                                    </DropdownItem>
                                </router-link>
                                <DropdownItem name="setting">
                                    <Icon type="android-settings"></Icon>
                                    设置
                                </DropdownItem>
                                <a href="javascript:void(0);" @click="logout">
                                    <DropdownItem name="logout">
                                        <Icon type="power"></Icon>
                                        退出
                                    </DropdownItem>
                                </a>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem name="3" class="header-notification" v-if="authenticated">
                        <Dropdown trigger="click">
                            <a href="javascript:void(0)">
                                <Badge count="" overflow-count="10">
                                <Icon type="android-notifications"></Icon>
                                </Badge>
                            </a>
                            <DropdownMenu slot="list">
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                </div>
            </div>
        </Menu>
        <div class="container no-active" v-if="authenticated && !is_active">
            <Alert show-icon>
                <template slot="desc">我们已经向您的邮箱地址 {{ email }} 发送了一封账号验证邮件， 为了你的账号安全，请尽快验证。</template>
            </Alert>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {}
        },
        computed: mapState({
            name: state => state.user.name,
            avatar: state => state.user.avatar,
            email: state => state.user.email,
            is_active: state => state.user.is_active,
            authenticated: state => state.user.authenticated,
        }),
        methods: {
            logout: function () {
                if (this.authenticated) {
                    this.$axios.get('logout').then(resource => {
                        let respond = resource.data
                        return respond.status ? this.$store.dispatch('unthenticated').then(() => {
                            return this.$Message.success(respond.message)
                        }) : this.$Message.error(respond.message)
                    })
                }
            }
        },
        mounted: function () {

        }
    }
</script>
<style lang="scss">
    .header-logo {
        width: 55px;
        height: 26px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
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

    .header-nav {
        margin: 0 auto;
        .ivu-menu-item {
            float: inherit;
            display: inline-block;
            font-size: 14px;
            border-bottom: none !important;
            .ivu-icon {
                font-size: 24px;
                vertical-align: -3px;
            }
        }
        .header-search {
            top: -2px;
            width: 300px;
            margin-left: 25px;
            .ivu-input {
                height: 34px;
                line-height: 34px;
                border-radius: 36px;
                background: #eee;
                border: none !important;
                box-shadow: none !important;
                font-size: 14px;
                padding-left: 18px;
            }
            .ivu-icon {
                width: 34px;
                height: 34px;
                line-height: 34px;
                padding-right: 15px;
            }
        }
        .header-register {
            float: right;
            .ivu-btn {
                width: 60px;
                height: 32px;
                line-height: 20px;
                margin: 0px;
                border: 1px solid rgba(236, 97, 73, 0.7);
                font-size: 13px;
                color: #ea6f5a;
                background-color: transparent;
                &:hover {
                    color: #ec6149;
                    border-color: #ec6149;
                    background-color: rgba(236, 97, 73, .05);
                }
            }
        }
        .header-user, .header-notification {
            float: right;
            .ivu-dropdown {
                .ivu-dropdown-rel {
                    a {
                        .ivu-badge {
                            .ivu-icon {
                                color: #969696;
                                font-size: 25px;
                            }
                            .ivu-badge-count {
                                background: #FF3030;
                                box-shadow: 0 0 0 2px #fff;
                            }
                        }
                    }
                }
                .ivu-select-dropdown {
                    .ivu-dropdown-menu {
                        .ivu-dropdown-item {
                            text-align: center;
                            font-size: 14px !important;
                            .ivu-icon {
                                font-size: 20px;
                                margin-right: 10px;
                                color: #ea6f5a;
                            }
                            &:hover {
                                background: #f4f8fb;
                            }
                        }
                    }
                }
            }
        }
    }

    .no-active {
        margin-top: 25px !important;
        .ivu-alert-desc {
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>