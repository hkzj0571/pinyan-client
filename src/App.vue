<template>
    <div id="app">
        <router-view/>
        <BackTop></BackTop>
        <div class="layout-copy">
            <p>2011-2017 &copy; 品言</p>
            <p>关于我们 · 建议反馈 · 源码地址 · 商务合作 · 友情链接</p>
            <p>Developed By Seaony,Powered By Laravel and Vue.js</p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .layout-copy {
        clear: both;
        font-size: 14px;
        display: block;
        text-align: center;
        padding: 20px 0 40px;
        color: #9ea7b4;
        p {
            margin: 15px auto;
        }
    }
</style>