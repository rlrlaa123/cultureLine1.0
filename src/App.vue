<template>
  <div id="app">
    <!--<button @click="login = true">로그인</button>-->
    <!--<button @click="login = false">로그아웃</button>-->
    <login v-if="!login" @login="login = true"></login>
    <div v-else>
      <header>
        <div>
          <img src="./assets/title_logo.png" width="120px">
        </div>
        <div>
          <img src="./assets/message.png" width="50px">
          <img src="./assets/search.png" width="50px">
        </div>
      </header>
      <v-tabs fixed-tabs>
        <v-tab>
          공지사항
        </v-tab>
        <v-tab>
          질문 & 답변
        </v-tab>
        <v-tab>
          프로필
        </v-tab>
        <v-tab-item>
          <a-dashboard></a-dashboard>
        </v-tab-item>
        <v-tab-item>
          <q-a-dashboard></q-a-dashboard>
        </v-tab-item>
        <v-tab-item>
          <profile></profile>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import QADashboard from './components/QNA/Dashboard';
import ADashboard from './components/Notice/Dashboard';
import Profile from './components/Profile/Profile';
import Login from './components/Auth/Banner';

export default {
  name: 'App',
  components: {
    QADashboard,
    ADashboard,
    Profile,
    Login,
  },
  data() {
    return {
      login: this.$auth.isAuthenticated(),
    };
  },
  created() {
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 13px;
  }

  header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 10px;
  }

  header div:nth-child(1) {
    width: 50%;
    text-align: left;
  }

  header div:nth-child(2) {
    width: 50%;
    text-align: right;
  }

  header h2 {
    display: inline-block;
  }

  .v-tabs__slider-wrapper {
    border-bottom: 2px solid #265392;
  }

  .v-tabs__items {
    background-color: white;
  }

  .v-tabs__container {
    color: #265392;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .validation-error {
    color: red;
  }
</style>
