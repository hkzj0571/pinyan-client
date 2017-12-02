<template>
    <div class="layout-auth">
        <div class="logo">
            <router-link to="/">
                <img src="../../assets/images/logo.png">
            </router-link>
        </div>
        <i-col span="8" offset="8" class="center">
            <AuthCard></AuthCard>
        </i-col>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import AuthCard from '../../components/auth/AuthCard.vue'

    export default {
        data() {
            return {}
        },
        components: {
            AuthCard
        },
        computed: mapState({
            authenticated: state => state.user.authenticated,
        }),
        created: function () {
            if (this.authenticated) {
                return this.$router.push('/')
            }
        }
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

    .center {
        text-align: center;
    }

    .layout-auth {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #eef5f9;
    }
</style>