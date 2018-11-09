<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
          <img src="../../assets/clear.png" @click="back">
          <span class="header">회원가입</span>
          <span></span>
        </div>
        <div class="modal-body">
          <div class="profile-container" v-show="!profileShow">
            <img class="user-image" :src="profileSet">
            <img class="profile-image" src="../../assets/Login/login-profile.png"
                 @click="profileShow = true">
          </div>
          <div class="profile-selector-wrapper" v-show="profileShow">
            <span @click="profileShow = false">X</span>
            <span>프로필 선택</span>
            <div class="profile-selector-container">
              <img class="profile-images" :src="profile.src"
                   v-for="profile in profiles" v-bind:key="profile.id"
                   @click="selectProfile(profile.id)"
              >
            </div>
          </div>
          <v-text-field
            label="이름"
            light
            color="blue darken-3"
          ></v-text-field>
          <v-text-field
            label="전공"
            light
            color="blue darken-3"
          ></v-text-field>
          <v-text-field
            label="학번"
            light
            color="blue darken-3"
          ></v-text-field>
          <v-text-field
            label="example@naver.com"
            light
            color="blue darken-3"
          ></v-text-field>
          <v-text-field
            label="비밀번호 (8자이상 문자,숫자)"
            light
            color="blue darken-3"
          ></v-text-field>
        </div>
        <div class="modal-footer">
          <button class="register-btn">회원가입완료</button>
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
      // eslint-disable-next-line
      profileSet: require('../../assets/Login/user-temp.png'),
      profiles: [],
      profileShow: false,
      isActive: false,
    };
  },
  created() {
    for (let i = 1; i <= 12; i += 1) {
      // eslint-disable-next-line
      this.profiles.push({ id: i, src: require(`../../assets/Login/Profile/profile-${i}.png`) });
    }
  },
  methods: {
    back() {
      this.$emit('close');
    },
    selectProfile(id) {
      this.profileSet = this.profiles[id - 1].src;
      this.profileShow = false;
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
    box-shadow: 0 2px 3px #e3e3e3;
    margin-bottom: 10px;
  }

  .profile-container {
    text-align: center;
  }

  .user-image {
    width: 100px;
    margin-left: 10px;
  }

  .profile-image {
    width: 25px;
  }

  .profile-selector-wrapper {
    color: #21569b;
  }

  .profile-selector-wrapper span:nth-child(1) {
    color: #53a6d7;
    font-size: 20px;
    margin-right: 10px;
  }

  .profile-selector-wrapper span:nth-child(3) {
    margin-top: 5px;
    float: right;
  }

  .profile-selector-container {
    margin-top: 10px;
  }

  .profile-images {
    width: 20%;
    margin: 2.5% 2.5%;
    /*margin: auto;*/
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
    padding-top: 0;
  }

  .modal-footer {
    padding: 35px;
    padding-top: 0;
    text-align: center;
  }

  .register-btn {
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
