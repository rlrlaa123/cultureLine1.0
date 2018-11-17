<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
          <img src="../../assets/clear.png" @click="back">
          <span class="header">비밀번호 찾기</span>
          <span></span>
        </div>
        <div class="modal-body">
          <v-text-field
            label="새 비밀번호 (8자 이상 문자, 숫자)"
            light
            color="blue darken-3"
            v-model="password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="비밀번호 확인"
            light
            color="blue darken-3"
            v-model="passwordConfirm"
            type="password"
          ></v-text-field>
        </div>
        <div class="modal-footer">
          <button class="login-btn" @click="submit()">확인</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  props: ['email'],
  data() {
    return {
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    submit() {
      if (this.password === this.passwordConfirm) {
        axios.post('auth/pw', {
          email: this.email,
          password: this.password,
        }).then(() => {
          const myToast = this.$toasted.show('비밀번호가 정상적으로 변경되었습니다', {
            containerClass: 'active',
            position: 'bottom-center',
            fullWidth: true,
          });

          myToast.goAway(1500);
          this.$emit('toLogin');
        });
      } else {
        const myToast = this.$toasted.show('같은 비밀번호를 입력해주세요', {
          containerClass: 'active',
          position: 'bottom-center',
          fullWidth: true,
        });

        myToast.goAway(1500);
      }
    },
    back() {
      this.$emit('close');
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
    padding: 30px;
  }

  .modal-footer {
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
