<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
          <img src="../../assets/clear.png" @click="back">
          <span class="header">로그인</span>
          <span></span>
        </div>
        <div class="modal-body">
          <v-text-field
            label="아이디"
            prepend-icon="person"
            light
            color="blue darken-3"
            type="email"
            v-model="email"
          ></v-text-field>
          <p class="validation-error" v-if="errors.email">{{ errors.email[0] }}</p>
          <v-text-field
            label="비밀번호 (8자이상 문자, 숫자)"
            prepend-icon="lock"
            light
            color="blue darken-3"
            type="password"
            v-model="password"
          ></v-text-field>
          <p class="validation-error" v-if="errors.password">{{ errors.password[0] }}</p>
        </div>
        <div class="modal-footer">
          <button class="login-btn" @click="submit()">로그인</button>
          <p class="login-search-btn" @click="showSearch = true">아이디/비밀번호 찾기</p>
        </div>
      </div>
      <email-search v-if="showSearch" @close="showSearch = false" @toLogin="exit()"></email-search>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';
import EmailSearch from './EmailSearch';

export default {
  props: [''],
  components: {
    EmailSearch,
  },
  data() {
    return {
      showSearch: false,
      email: '',
      password: '',
      errors: {},
    };
  },
  methods: {
    back() {
      this.$emit('close');
    },
    exit() {
      this.$emit('close');
      this.showSearch = false;
    },
    submit() {
      axios.post('auth/ios/login', {
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
      }).then((response) => {
        if (!response.data.access_token) {
          this.errors = response.data;
        } else {
          this.$auth.setToken(response.data.access_token, response.data.expiration);
          this.$auth.setToken(response.data.access_token);

          this.$emit('loginSuccess');
          this.$emit('close');
        }
      }).catch(() => {
        const myToast = this.$toasted.show('서버와의 문제가 생겼습니다. 아이디와 비밀번호를 확인해보세요.', {
          containerClass: 'active',
          position: 'bottom-center',
          // fitToScreen: true,
          fullWidth: true,
        });

        myToast.goAway(1500);
      });
    },
  },
};
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
    height: 100vh;
    text-align: left;
    font-size: 15px;
    overflow: scroll;
  }

  .modal-header {
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: white;
    padding: 15px;
  }

  .modal-header img {
    width: 15px;
    margin-right: 15px;
  }

  .header {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }

  .modal-body {
    background-color: white;
    padding: 40px;
    margin-top: 50px;
  }

  .modal-footer {
    padding: 35px;
    text-align: center;
  }

  .login-btn {
    /*width: 120px;*/
    width: 200px;
    height: 45px;
    border-radius: 20px;
    border: 2px solid #3f5898;
    font-size: 18px;
  }

  .login-search-btn {
    margin: 15px 0;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
