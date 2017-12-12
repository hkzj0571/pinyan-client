<template>
    <div>
        <DropdownItem v-if="isCommented">
            <div class="head">
                <router-link to="/">
                    <Avatar :src="notification.data.user.avatar"></Avatar>
                    <span class="name" v-text="notification.data.user.name"></span>
                </router-link>
                <span class="time" v-text="notification.data.comment.created_at"></span>
            </div>
            <div class="body">commented on your article</div>
        </DropdownItem>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: ['notification'],
        components: {},
        computed: {
            isCommented() {
                return this.notification.type == 'App\\Notifications\\ArticleBeCommented'
            }
        },
        methods: {},
    }
</script>