<template>
    <div class="auth-card">
        <Tabs value="login" :animated="true" class="auth-card-nav">
            <TabPane label="登录" name="login">
                <Form>
                    <FormItem>
                        <i-input placeholder="请输入您的邮箱" icon="android-mail"/>
                    </FormItem>
                    <FormItem>
                        <i-input placeholder="请输入您的密码" icon="locked"/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" shape="circle" size="large" long>登录</Button>
                    </FormItem>
                    <FormItem>
                        <p class="tips"><a href="">忘记密码</a></p>
                    </FormItem>

                </Form>
            </TabPane>
            <TabPane label="注册" name="register">
                <Form>
                    <FormItem>
                        <i-input placeholder="请设置您的昵称" icon="android-person"/>
                    </FormItem>
                    <FormItem>
                        <i-input placeholder="请输入您的邮箱" icon="android-mail"/>
                    </FormItem>
                    <FormItem>
                        <i-input placeholder="请设置您的密码" icon="locked"/>
                    </FormItem>
                    <FormItem>
                        <Button type="success" shape="circle" size="large" long>注册</Button>
                    </FormItem>
                    <FormItem>
                        <p class="tips">
                            点击 “注册” 即表示您同意并愿意遵守品言<br>
                            <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">《用户协议》</a>
                            与 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">《隐私政策》</a>
                        </p>
                    </FormItem>
                </Form>
            </TabPane>
        </Tabs>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>

<style lang="scss">
    .auth-card {
        width: 400px;
        margin: 60px auto 0;
        padding: 50px 50px 10px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, .1);
        vertical-align: middle;
        display: inline-block;
        .auth-card-nav {
            .ivu-tabs-bar {
                border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                margin-bottom: 35px;
                .ivu-tabs-nav {
                    float: inherit;
                    margin: 0 auto;
                    text-align: center;
                    padding-bottom: 20px;
                    .ivu-tabs-tab {
                        float: inherit;
                        color: #9fadc7;
                        font-size: 17px;
                    }
                    .ivu-tabs-ink-bar {
                        display: none !important;
                    }
                    .ivu-tabs-tab-active {
                        color: #57a3f3;
                    }

                }
            }
            .ivu-form-item {
                .ivu-icon {
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 20px;
                    left: 0;
                    right: inherit;
                }
                .ivu-input {
                    font-size: 14px;
                    height: 40px;
                    padding-left: 40px;
                    padding-right: inherit;
                    box-shadow: none !important;
                }
                .ivu-btn {
                    height: 40px;
                }
                .tips {
                    text-align: center;
                    color: #969696;
                    font-size: 13px;
                }
            }
        }
    }
</style>