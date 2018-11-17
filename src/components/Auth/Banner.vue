<template>
  <div class="wrapper">
    <img class="banner-image" src="../../assets/Login/banner.jpeg">
    <button><img class="sns-btn" src="../../assets/Login/login-facebook.png"></button>
    <button><img class="sns-btn" src="../../assets/Login/login-facebook.png"></button>
    <div class="login-container">
      <span class="login-btn" @click="showLogin = true">로그인</span>
      <span style="border: 1px solid black;"></span>
      <span class="login-btn" @click="showRegister = true">회원가입</span>
    </div>
    <p class="login-find-info" @click="showSearch = true">이메일 비밀번호찾기</p>
    <email-login v-if="showLogin" @close="showLogin = false"></email-login>
    <email-register v-if="showRegister" @close="showRegister = false"></email-register>
    <email-search v-if="showSearch" @close="showSearch = false"></email-search>
  </div>
</template>

<script>
import EmailLogin from './EmailLogin';
import EmailRegister from './EmailRegister';
import EmailSearch from './EmailSearch';
import SNSRegister from './SNSRegister';

export default {
  components: {
    EmailLogin,
    EmailRegister,
    EmailSearch,
    SNSRegister,
  },
  data() {
    return {
      showLogin: false,
      showRegister: false,
      showSearch: false,
    };
  },
  methods: {
    openLogin() {
      this.showLogin = true;
    },
    openRegister() {
      this.showRegister = true;
    },
  },
};
</script>

<style scoped>
  .wrapper {
    margin: 50px;
  }

  .banner-image {
    width: 100%;
    margin: 50px 0 80px 0;
  }

  .sns-btn {
    width: 100%;
    margin: 5px 0;
  }

  .login-container {
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }

  .login-btn {
    padding: 0 25px;
    font-weight: bold;
    /*margin: 10px;*/
  }

  .login-find-info {
    font-weight: lighter;
  }
</style>
