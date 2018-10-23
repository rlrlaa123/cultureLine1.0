<template>
  <div>
    <!--<v-slide-x-transition>-->
      <!--<div class="profile-wrapper" v-show="showProfile">-->
        <!--<div class="profile-info" style="text-align: center;">-->
          <!--<img src="../../assets/user.png" style="width: 40px;">-->
        <!--</div>-->
        <!--<div class="profile-info">이름: {{ user.name }}</div>-->
        <!--<div class="profile-info">학번: {{ user.grade }}학번</div>-->
        <!--<div class="profile-info">휴대폰 번호: {{ user.phone }}</div>-->
        <!--<div class="profile-info">이메일: {{ user.email }}</div>-->
        <!--<div class="profile-info">카카오 ID: {{ user.kakaoID }}</div>-->
        <!--<div class="profile-info" @click="toggleMessage">-->
          <!--<button class="message-btn">쪽지 보내기</button>-->
          <!--<span style="float: right;">></span>-->
        <!--</div>-->
        <!--<div style="margin: 15px 0;"></div>-->
        <!--&lt;!&ndash;<div style="margin: 5px 0;">
        * 푸쉬알람, 진동, 소리는 스토리보드처럼 설정으로 빼는게 좋을까요?
        </div>&ndash;&gt;-->
        <!--<div class="profile-info" style="display: flex; justify-content: space-between">-->
          <!--푸쉬알람-->
          <!--<div>-->
            <!--<v-switch v-model="push" height=18px-->
                      <!--color="blue lighten-3" light hide-details></v-switch>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="profile-info" style="display: flex; justify-content: space-between">-->
          <!--진동-->
          <!--<div>-->
            <!--<v-switch v-model="vibration" height=18px-->
                      <!--color="blue lighten-3" light hide-details></v-switch>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="profile-info" style="display: flex; justify-content: space-between">-->
          <!--소리-->
          <!--<div>-->
            <!--<v-switch v-model="sound" height=18px-->
                      <!--color="blue lighten-3" light hide-details></v-switch>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="profile-info" @click="toggleInquiry">-->
          <!--<button class="message-btn">문의하기</button>-->
          <!--<span style="float: right;">></span>-->
        <!--</div>-->
        <!--<div class="profile-info" @click="toggleLeave">-->
          <!--<button class="message-btn">탈퇴하기</button>-->
          <!--<span style="float: right;">></span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</v-slide-x-transition>-->
    <!--<v-slide-x-transition>-->
      <!--<div v-show="showMessage" @click="toggleMessage">-->
        <!--<div>메세지 보내기</div>-->
        <!--<div>돌아가기</div>-->
      <!--</div>-->
    <!--</v-slide-x-transition>-->
    <!--<v-slide-x-transition>-->
      <!--<div v-show="showInquiry" @click="toggleInquiry">-->
        <!--<div>문의하기</div>-->
        <!--<div>돌아가기</div>-->
      <!--</div>-->
    <!--</v-slide-x-transition>-->
    <!--<v-slide-x-transition>-->
      <!--<div v-show="showLeave" @click="toggleLeave">-->
        <!--<div>탙퇴하기</div>-->
        <!--<div>돌아가기</div>-->
      <!--</div>-->
    <!--</v-slide-x-transition>-->
  </div>
</template>

<script>
import Message from './Message';

export default {
  components: {
    Message,
  },
  data() {
    return {
      showProfile: true,
      showMessage: false,
      showInquiry: false,
      showLeave: false,
      push: false,
      vibration: false,
      sound: false,
      user: {
        name: '문명준',
        grade: 12,
        phone: '01012345678',
        email: 'example@naver.com',
        kakaoID: 'hello123',
      },
    };
  },
  methods: {
    toggleMessage() {
      if (this.showMessage) {
        this.showMessage = false;
        this.showProfile = true;
      } else {
        this.showMessage = true;
        this.showProfile = false;
      }
    },
    toggleInquiry() {
      if (this.showInquiry) {
        this.showInquiry = false;
        this.showProfile = true;
      } else {
        this.showInquiry = true;
        this.showProfile = false;
      }
    },
    toggleLeave() {
      if (this.showLeave) {
        this.showLeave = false;
        this.showProfile = true;
      } else {
        this.showLeave = true;
        this.showProfile = false;
      }
    },
  },
};
</script>

<style scoped>
  .profile-wrapper {
    margin-bottom: 50px;
    margin-top: 40px;
    border-top: 1px solid #e3e3e3;
    height: 100%;
  }

  .profile-info {
    background-color: white;
    border-bottom: 1px solid #e3e3e3;
    text-align: left;
    padding: 10px;
  }

  .message-btn {
    margin: auto;
  }

  .v-input {
    margin: 0;
  }
</style>
