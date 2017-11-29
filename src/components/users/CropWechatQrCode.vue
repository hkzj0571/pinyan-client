<template>
    <Upload action="http://up-z2.qiniu.com"
            :max-size="3072"
            :data="token"
            :show-upload-list="false"
            :format="['jpg','jpeg','png','gif']"
            :before-upload="getUploadToken"
            :on-format-error="FormatError"
            :on-success="uploadSucceed"
            :on-error="uploadFail"
            :on-exceeded-size="exceededSize"
    >
        <Spin v-show="crop_vistal" fix>
            <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
            <div>上传中...</div>
        </Spin>
        <Avatar shape="square" v-show="wechat_qrcode" :src="wechat_qrcode" size="large"/>
        <Button type="ghost" icon="android-upload" shape="circle" size="large" v-show="!wechat_qrcode" class="wechat_upload">上传图片</Button>
        <span class="deatroy" v-show="wechat_qrcode" @click="removeQrCode">删除</span>
        <p class="help">上传后会在个人主页显示图标</p>
    </Upload>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                crop_vistal: false,
                token: null,
            }
        },
        components: {},
        computed: mapState({
            wechat_qrcode: state => state.user.wechat_qrcode,
        }),
        methods: {
            FormatError(){
                this.crop_vistal = false
                return this.$Message.error('文件格式错误')
            },
            uploadFail(){
                this.crop_vistal = false
                return this.$Message.error('文件上传失败，请重试')
            },
            exceededSize(){
                this.crop_vistal = false
                return this.$Message.error('图片最大为3M')
            },
            uploadSucceed(response){
                var wechat_qrcode = this.$env.oss_domain + response.key + '?imageView2/1/w/200/h/200/q/75|imageslim'
                this.crop_vistal = false
                this.$axios.put('user/wechat_qrcode', {wechat_qrcode: wechat_qrcode}).then(resource => {
                    let respond = resource.data

                    return respond.status
                        ? this.$store.dispatch('wechat_qrcode_updated', wechat_qrcode).then(() => {
                            this.$Message.success(respond.message)
                        })
                        : this.$Message.error(respond.message)
                })
            },
            getUploadToken(file){
                this.crop_vistal = true

                return this.$axios.get('upload/token', {}).then(resource => {
                    let respond = resource.data
                    this.token = respond.data
                })
            },
            removeQrCode(){
                return this.$axios.get('user/wechat_qrcode', {}).then(resource => {
                    let respond = resource.data

                    return respond.status
                        ? this.$store.dispatch('wechat_qrcode_remove', wechat_qrcode).then(() => {
                            this.$Message.success(respond.message)
                        })
                        : this.$Message.error(respond.message)
                })
            },
        }
    }
</script>