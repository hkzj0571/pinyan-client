<template>
    <div>
        <Menu mode="horizontal" @on-select="toggle" :active-name="currentView" class="navbar_menu">
            <MenuItem name="Followed">
                我关注的人
            </MenuItem>
            <MenuItem name="Follower">
                关注我的人
            </MenuItem>
        </Menu>
        <component :is="currentView"></component>
    </div>
</template>

<script>
    import Followed from '../../../components/users/show/Followed'
    import Follower from '../../../components/users/show/Follower'
    export default {
        data() {
            return {
                currentView: 'Followed',
            }
        },
        created: function () {
        },
        components: {
            Followed,
            Follower
        },
        methods: {
            toggle(name) {
                this.currentView = name
            }
        }
    }
</script>