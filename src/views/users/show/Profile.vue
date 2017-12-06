<template>
    <div>
        <Menu mode="horizontal" @on-select="toggle" :active-name="currentView" class="navbar_menu">
            <MenuItem name="Dynamic">
                <Icon type="help-buoy"></Icon>
                动态
            </MenuItem>
            <MenuItem name="ReleaseArticle">
                <Icon type="android-list"></Icon>
                文章
            </MenuItem>
            <MenuItem name="FocusTopic">
                <Icon type="chatbox-working"></Icon>
                评论
            </MenuItem>
        </Menu>
        <component :is="currentView"></component>
    </div>
</template>

<script>
    import ReleaseArticle from '../../../components/users/show/ReleaseArticle'
    import Dynamic from '../../../components/users/show/Dynamic'
    export default {
        data() {
            return {
                currentView:'Dynamic',
            }
        },
        components: {
            ReleaseArticle,
            Dynamic
        },
        methods: {
            toggle(name) {
                this.currentView = name
            }
        }
    }
</script>