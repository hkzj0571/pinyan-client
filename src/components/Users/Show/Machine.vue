<template>
    <ul class="machines_list">
        <transition-group name="fade">
            <li v-for="(follower,index) in machines" :key="index">

            </li>
        </transition-group>
        <li class="end">
            <Button type="text" icon="chevron-down" :loading="loading" v-show="!end" @click="getMachines">加载更多</Button>
            <Button type="text" v-show="end">加载完毕</Button>
        </li>
    </ul>
</template>

<script>
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