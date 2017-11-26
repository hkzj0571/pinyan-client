<template>
    <div class="layout-auth">
        <div class="logo">
            <router-link to="/">
                <img src="../../assets/images/logo.png">
            </router-link>
        </div>
        <Row>
            <i-col span="8" offset="8">
                <AuthCard></AuthCard>
            </i-col>
        </Row>

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
    .container {

    }

    .logo {
        position: absolute;
        top: 56px;
        margin-left: 50px;
        z-index: 10;
        img {
            width: 100px;
        }
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .layout-auth {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #eef5f9;
    }
</style>