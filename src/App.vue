<template>
    <div id="app">
        <router-view/>
        <BackTop></BackTop>
        <!--<i-col :span="24">-->
            <!--<div class="layout-copy">-->
                <!--2011-2016 &copy; 品言-->
            <!--</div>-->
        <!--</i-col>-->
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .layout-copy{
        display: block;
        text-align: center;
        padding: 20px 0 40px;
        color: #9ea7b4;
    }
</style>