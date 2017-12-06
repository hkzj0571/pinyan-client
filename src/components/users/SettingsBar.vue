<template>
    <Menu class="drak_bar" :active-name="$route.meta.menu_active">
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