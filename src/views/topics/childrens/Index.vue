<template>
    <div>
        <Menu mode="horizontal" @on-select="toggle" :active-name="currentView" class="navbar_menu">
            <MenuItem name="NewArticle">
                <Icon type="android-time"></Icon>
                最新文章
            </MenuItem>
            <MenuItem name="HotArticle">
                <Icon type="flame"></Icon>
                热门文章
            </MenuItem>
            <MenuItem name="HotArticle">
                <Icon type="trophy"></Icon>
                最佳榜单
            </MenuItem>
            <MenuItem name="FineAuthor">
                <Icon type="ribbon-b"></Icon>
                优秀作者
            </MenuItem>
        </Menu>
        <component :is="currentView"></component>
    </div>
</template>

<script>
    import FineAuthor from '../../../components/topics/indexs/FineAuthor.vue'
    import HotArticle from '../../../components/topics/indexs/HotArticle.vue'
    import NewArticle from '../../../components/topics/indexs/NewArticle.vue'

    export default {
        data() {
            return {
                currentView: 'NewArticle'
            }
        },
        components: {
            FineAuthor,
            HotArticle,
            NewArticle,
        },
        methods: {
            toggle(name) {
                this.currentView = name
            }
        },
        created: function () {

        }
    }
</script>