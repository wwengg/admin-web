<template>
  <div class="social-signup-container">
    <!-- <div class="sign-btn" @click="wechatHandleClick('wechat')">
      <span class="wx-svg-container"><svg-icon icon-class="wechat" class="icon" /></span>
      WeChat
    </div>
    <div class="sign-btn" @click="tencentHandleClick('tencent')">
      <span class="qq-svg-container"><svg-icon icon-class="qq" class="icon" /></span>
      QQ
    </div> -->
    <div
      class="sign-btn"
      @click="githubHandleClick('github')"
    >
      <span class="wx-svg-container"><svg-icon
        icon-class="wechat"
        class="icon"
      /></span>
      Github
    </div>

    <div
      class="sign-btn"
      @click="wwenggHandleClick('casdoor')"
    >
      <span class="wx-svg-container"><svg-icon
        icon-class="wechat"
        class="icon"
      /></span>
      Casdoor
    </div>

  </div>

</template>

<script>
// import openWindow from '@/utils/open-window'
import { getAuthUrl } from '@/utils/provider'

export default {
  name: 'SocialSignin',
  methods: {
    githubHandleClick() {
      // a91f990e68340cc829ee7dabb21be39c19dedb4d
      const url = getAuthUrl({ name: 'wwengg' }, { type: 'GitHub', name: 'github_wwengg_provider', clientId: 'Iv23liQjM8phwyKzg5R3' }, 'SignUp')
      window.location.href = url
    },
    wwenggHandleClick() {
      window.location.href = this.getSigninUrl()
    },
    wechatHandleClick(thirdpart) {
      alert('ok')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const appid = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      // openWindow(url, thirdpart, 540, 540)
    },
    tencentHandleClick(thirdpart) {
      alert('ok')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, thirdpart, 540, 540)
    }
  }
}
</script>

<style lang="scss" scoped>
.social-signup-container {
  margin: 20px 0;
  .sign-btn {
    display: inline-block;
    cursor: pointer;
    color: #fff;
  }
  .icon {
    color: #fff;
    font-size: 24px;
    margin-top: 8px;
  }
  .wx-svg-container,
  .qq-svg-container {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-top: 1px;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-right: 5px;
  }
  .wx-svg-container {
    background-color: #24da70;
  }
  .qq-svg-container {
    background-color: #6ba2d6;
    margin-left: 50px;
  }
}
</style>
