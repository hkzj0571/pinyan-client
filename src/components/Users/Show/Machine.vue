<template>
    <ul class="machines_list">
        <transition-group name="fade">
            <li v-for="(machine,index) in machines" :key="index">
                <NewArticle v-if="machine.action == 'article'" :machine="machine"></NewArticle>
                <Comment v-if="machine.action == 'comment'" :machine="machine"></Comment>
                <Reply v-if="machine.action == 'reply'" :machine="machine"></Reply>
                <Like v-if="machine.action == 'like'" :machine="machine"></Like>
            </li>
        </transition-group>
        <li class="end">
            <Button type="text" icon="chevron-down" :loading="loading" v-show="!end" @click="getMachines">加载更多</Button>
            <Button type="text" v-show="end">加载完毕</Button>
        </li>
    </ul>
</template>

<script>
    import NewArticle from '../Machines/Article'
    import Comment from '../Machines/Comment'
    import Reply from '../Machines/Reply'
    import Like from '../Machines/Like'
    export default {
        data() {
            return {
                loading: false,
                end: false,
                page: 0,
                machines: []
            }
        },
        created: function () {
            this.getMachines()
        },
        components: {
            NewArticle,
            Comment,
            Reply,
            Like
        },
        methods: {
            getMachines(){
                this.loading = true
                this.page++
                this.$axios.get('user/machines?page=' + this.page, {}).then(resource => {
                    this.loading = false
                    if (resource.data.data.machines.length === 0) {
                        this.end = true
                    }
                    this.machines = this.machines.concat(resource.data.data.machines)
                })
            }
        }
    }
</script>