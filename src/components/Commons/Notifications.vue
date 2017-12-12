<template>
    <MenuItem name="3" class="header-notification">
        <Dropdown trigger="click">
            <a href="javascript:void(0)">
                <Badge :count="count" overflow-count="10">
                    <Icon type="android-notifications"></Icon>
                </Badge>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem class="header">
                    <Icon type="android-notifications"></Icon>Notifications
                </DropdownItem>
                <DropdownItem class="empty" v-show="count == 0">
                    <Icon type="android-drafts"></Icon>
                    You have not any notifications
                </DropdownItem>
                <div class="detail">
                    <Detail v-for="(notification,index) in notifications" :key="index" :notification="notification"></Detail>
                </div>
                <DropdownItem class="footer">
                    <Button type="text" icon="android-settings" class="setting">Settings</Button>
                    <Button type="text" class="show">View all</Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </MenuItem>
</template>
<script>
    import Detail from './Notifications/Detail'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {}
        },
        components: {
            Detail,
        },
        computed: {
            count() {
                return this.notifications.length
            },
            ...mapState({
                id: state => state.user.id,
                notifications: state => state.notifications.content,
            })
        },
        methods: {
            connection() {
                this.$echo.private('App.Models.User.' + this.id)
                    .notification((notification) => {
                        this.$store.dispatch('new_notification',notification)
                    })
            }
        },
        created: function () {
            this.connection()
        }
    }
</script>