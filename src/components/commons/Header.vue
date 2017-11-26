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
                    <MenuItem name="3" class="header-search">
                        <i-input placeholder="搜索" icon="ios-search"/>
                    </MenuItem>
                    <MenuItem name="4" class="header-register">
                        <router-link to="/login">
                            <Button>登陆</Button>
                        </router-link>
                    </MenuItem>
                </div>
            </div>
        </Menu>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .header-logo{
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
    .header-nav{
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
                border:none !important;
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
                border-radius: 20px;
                font-size: 13px;
                color: #ea6f5a;
                background-color: transparent;
                &:hover {
                    color: #ec6149;
                    border-color: #ec6149;
                    background-color: rgba(236,97,73,.05);
                }
            }
        }
    }
</style>