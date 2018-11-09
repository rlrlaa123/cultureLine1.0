<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
          <img src="../../assets/clear.png" @click="back">
          <span class="header">이메일 찾기</span>
          <span></span>
        </div>
        <div class="modal-body">
          <v-text-field
            label="학번"
            prepend-icon="person"
            light
            color="blue darken-3"
            v-model="stu_id"
          ></v-text-field>
          <v-text-field
            label="이름"
            prepend-icon="lock"
            light
            color="blue darken-3"
            v-model="name"
          ></v-text-field>
        </div>
        <div class="modal-footer">
          <button class="search-btn" @click="submit()">확인</button>
          <div class="search-wrapper">
            <h3>이메일 목록</h3>
            <p>아래 이메일을 클릭하시면 비밀번호 변경 창으로 이동합니다</p>
            <div v-for="email in emails" v-bind:key="email.id">
              <span>{{ email.email}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  props: [''],
  data() {
    return {
      emails: [],
      name: '',
      stu_id: '',
    };
  },
  methods: {
    back() {
      this.$emit('close');
    },
    submit() {
      axios.post('auth/id', {
        stu_id: this.stu_id,
        name: this.name,
      }).then((response) => {
        let myToast;

        if (response.data.length !== 0) {
          myToast = this.$toasted.show(`${response.data.length} 개의 이메일이 검색되었습니다`, {
            containerClass: 'active',
            position: 'bottom-center',
            // fitToScreen: true,
            fullWidth: true,
          });
        } else {
          myToast = this.$toasted.show('입력하신 이름과 학번에 해당하는 이메일이 없습니다', {
            containerClass: 'active',
            position: 'bottom-center',
            // fitToScreen: true,
            fullWidth: true,
          });
        }

        myToast.goAway(1500);
        this.emails = response.data;
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
    box-shadow: 0 2px 3px #e3e3e3;
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
    padding: 0 40px;
    margin-top: 40px;
  }

  .modal-footer {
    padding: 20px 35px;
    text-align: center;
  }

  .search-btn {
    /*width: 120px;*/
    width: 150px;
    height: 45px;
    border-radius: 20px;
    border: 2px solid #3f5898;
    font-size: 18px;
  }

  .search-wrapper {
    text-align: left;
    margin: 30px 0;
  }

  .search-wrapper p {
    font-size: 11px;
    font-weight: lighter;
    margin-left: 10px;
  }

  .search-wrapper div {
    margin: 10px 0;
  }

  .search-wrapper span {
    font-size: 15px;
    font-weight: normal;
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

  .active {
    color: red;
  }
</style>
