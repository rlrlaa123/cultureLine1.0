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
          ></v-text-field>
          <v-text-field
            label="비밀번호 (8자이상 문자, 숫자)"
            prepend-icon="lock"
            light
            color="blue darken-3"
          ></v-text-field>
        </div>
        <div class="modal-footer">
          <button class="login-btn">로그인</button>
          <p class="login-search-btn">아이디/비밀번호 찾기</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [''],
  data() {
    return {
      messsage: '',
    };
  },
  methods: {
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
