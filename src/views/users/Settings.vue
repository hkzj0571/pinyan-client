<template>
    <div class="layout">
        <IndexHeader></IndexHeader>
        <div class="container">
            <i-col :span="7">
                <SettingsBar></SettingsBar>
            </i-col>
            <i-col :span="16" offset="1">
                <router-view/>
            </i-col>
        </div>
    </div>
</template>

<script>
    import IndexHeader from '../../components/commons/Header.vue'
    import SettingsBar from '../../components/users/SettingsBar.vue'
    export default {
        components: {
            IndexHeader,
            SettingsBar
        },
    }
</script>

<style lang="scss">

</style>