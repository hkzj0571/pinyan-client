<template>
    <!--<i-col class="activeload" span="8" offset="8">-->
        <!--<Spin v-show="is_active" class="actived" fix>-->
            <!--<Icon type="checkmark-circled" size=50></Icon>-->
            <!--<div>账号已成功激活</div>-->
        <!--</Spin>-->
        <!--<Spin v-show="!is_active" fix>-->
            <!--<Icon type="load-c" size=50    class="spin-icon-load"></Icon>-->
            <!--<div>账号激活中</div>-->
        <!--</Spin>-->
    <!--</i-col>-->
</template>
<script>
    export default {
        data() {
            return {}
        },
        created: function () {
            var token = this.$route.params.token

            this.$store.dispatch('actived', {token:token}).then((message) => {
                return this.$Message.success(message)
            }).catch((message) => {
                return this.$Message.error(message)
            })

            this.$router.push('/login')
        }
    }
</script>

<!--<style lang="scss">-->
    <!--.activeload {-->
        <!--margin-top: 200px;-->
        <!--.ivu-spin-text {-->
            <!--.spin-icon-load {-->
                <!--animation: ani-demo-spin 1s linear infinite;-->
            <!--}-->
            <!--div {-->
                <!--font-size: 14px;-->
                <!--margin-top: 10px;-->
            <!--}-->
        <!--}-->
        <!--.actived {-->
            <!--.ivu-spin-text {-->
                <!--.ivu-icon {-->
                    <!--color: #47cb89;-->
                <!--}-->
                <!--div {-->
                    <!--color: #47cb89;-->
                    <!--font-size: 16px;-->
                    <!--font-weight: 500;-->
                    <!--margin-top: 10px;-->
                <!--}-->

            <!--}-->
        <!--}-->
    <!--}-->

    <!--@keyframes ani-demo-spin {-->
        <!--from {-->
            <!--transform: rotate(0deg);-->
        <!--}-->
        <!--50% {-->
            <!--transform: rotate(180deg);-->
        <!--}-->
        <!--to {-->
            <!--transform: rotate(360deg);-->
        <!--}-->
    <!--}-->
<!--</style>-->