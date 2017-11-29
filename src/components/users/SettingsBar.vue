<template>
    <Menu class="settings-bar" active-name="basic">

        <MenuItem name="basic">
            <router-link to="/settings/basic">
                <div class="icon">
                    <Icon type="android-settings"></Icon>
                </div>
                基础设置
            </router-link>
        </MenuItem>
        <MenuItem name="profile">
            <router-link to="/settings/profile">
                <div class="icon">
                    <Icon type="person"></Icon>
                </div>
                个人资料
            </router-link>
        </MenuItem>
        <MenuItem name="badge">
            <router-link to="/settings/badge">
                <div class="icon">
                    <Icon type="ribbon-b"></Icon>
                </div>
                我的徽章
            </router-link>
        </MenuItem>
    </Menu>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .settings-bar {
        margin-top: 25px;
        width: 100%;
        .ivu-menu-item {
            border: none !important;
            padding: 0;
            a {
                border-radius: 6px;
                font-size: 15px;
                color: #495060;
                display: block;
                padding: 12px 24px;
                .icon {
                    margin-right: 15px;
                    width: 32px;
                    height: 32px;
                    text-align: center;
                    color: #fff;
                    background-color: #a0a0a0;
                    border-radius: 4px;
                    display: inline-block;
                    vertical-align: middle;
                    .ivu-icon {
                        margin: 6px 0 0 1px;
                        font-size: 18px;
                        display: block;
                    }
                }
                &:hover {
                    background: #f0f0f0;
                }
            }
            &:hover {
                background: none;
            }
        }
        .ivu-menu-item-active {
            border: none !important;
            background: none !important;
            a {
                color: #495060 !important;
                border: none !important;
                background: #f0f0f0;
            }
        }
        &:after {
            display: none !important;
        }
    }
</style>