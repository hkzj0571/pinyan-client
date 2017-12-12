<template>
    <MenuItem name="3" class="header-notification">
        <Dropdown trigger="click">
            <a href="javascript:void(0)">
                <Badge count="" overflow-count="10">
                    <Icon type="android-notifications"></Icon>
                </Badge>
            </a>
            <DropdownMenu slot="list">
            </DropdownMenu>
        </Dropdown>
    </MenuItem>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: mapState({
            id: state => state.user.id,
            name: state => state.user.name,
            avatar: state => state.user.avatar,
            email: state => state.user.email,
            is_active: state => state.user.is_active,
            authenticated: state => state.user.authenticated,
        }),
        methods: {
            notifications() {
                this.$echo.channel('users')
                    .listen('ArticleBeLike', (e) => {
                        console.log(e)
                    });
            }
        },
        created: function () {
            this.notifications()
        }
    }
</script>