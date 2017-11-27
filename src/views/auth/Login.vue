<template>
    <div class="layout-auth">
        <div class="logo">
            <router-link to="/">
                <img src="../../assets/images/logo.png">
            </router-link>
        </div>
        <i-col span="8" offset="8">
            <AuthCard></AuthCard>
        </i-col>
    </div>
</template>
<script>
    import AuthCard from '../../components/auth/AuthCard.vue'
    export default {
        data() {
            return {}
        },
        components: {
            AuthCard
        },
    }
</script>

<style lang="scss">
    .logo {
        position: absolute;
        top: 56px;
        margin-left: 50px;
        img {
            width: 100px;
        }
    }

    .layout-auth {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #eef5f9;
    }
</style>