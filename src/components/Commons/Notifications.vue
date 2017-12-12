<template>
    <MenuItem name="3" class="header-notification">
        <Dropdown trigger="click">
            <a href="javascript:void(0)">
                <Badge :count="count" overflow-count="10">
                    <Icon type="android-notifications"></Icon>
                </Badge>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>王文阳、靳一辰、唐凯丰 回答了 如何评价卢本伟带其粉丝恶毒辱骂质疑开挂者的视频av16995376？</DropdownItem>
                <DropdownItem></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </MenuItem>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                notifications:[],
            }
        },
        computed: {
            count() {
                return this.notifications.length
            },
            ...mapState({
                id: state => state.user.id,
            })
        },
        methods: {
            connection() {
                this.$echo.private('App.Models.User.' + this.id)
                    .notification((notification) => {
                        this.notifications.push(notification)
                        console.log(notification)
                    })
            }
        },
        created: function () {
            this.connection()
        }
    }
</script>