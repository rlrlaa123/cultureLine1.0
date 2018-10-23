<template>
  <div class="wrapper">
    <p class="input-label">이메일로 로그인</p>
    <input type="email" id="email" v-model="email" placeholder="Email Address">
    <input type="password" id="password" v-model="password" placeholder="Password">
    <div class="next-btn">
      <a @click="handleSubmit">시작하기</a>
    </div>
    <div class="sns-login" style="background-color: #cc5441;" @click="handleGoogle">
      <img src="../../assets/google.png">
      구글 아이디로 로그인
    </div>

    <div class="wrapper">
      <p class="input-label">이메일로 로그인</p>
      <input type="email" id="email2" v-model="email" placeholder="Email Address">
      <input type="password" id="password2" v-model="password" placeholder="Password">
      <input type="text" id="name" v-model="name" placeholder="Name">
      <input type="text" id="stu_id" v-model="stu_id" placeholder="Student ID">
      <input type="text" id="major" v-model="major" placeholder="Major">
      <div class="next-btn">
        <a @click="register">시작하기</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      stu_id: '',
      major: '',
    };
  },
  created() {
    // const currentdate = new Date();
    // this.currentTime = `${currentdate.getDate()}-
    // ${(currentdate.getMonth() + 1)}-
    // ${currentdate.getFullYear()}@
    // ${currentdate.getHours()}:
    // ${currentdate.getMinutes()}`;
    // axios.get('qna', {
    // }).then((response) => {
    //   this.questions = response.data;
    // }).catch((error) => {
    //   // eslint-disable-next-line
    //   console.error(error);
    // });
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken;
        console.log(result);
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
          // Send token to your backend via HTTPS
          result.user.providerData.forEach((providerData) => {
            console.log(`Signed in with ${providerData.providerId}`);
          });
          console.log(result.user.email);

          axios.post('/social/login/google', {
            token: idToken,
            email: result.user.email,
          }).then((response) => {
            console.log(response);
          }).catch((error) => {
            console.log(error);
          });
        }).catch((error) => {
          // Handle error
          console.log(error);
        });
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      /* eslint-disable */
      console.log(`${errorCode}: ${errorMessage}`);
    });
  },
  methods: {
    test() {
      const creds = firebase.auth().signInWithEmailAndPassword('test@gmail.com', 'testing');
      console.log({ creds });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then((data) => {
            console.log(data);
            const headers = { Authorization: `Bearer ${data}` };
            const me = axios.get('/me', { headers });
            console.log(me);
          });
        }
      });
      // console.log({ token });
      // const headers = { Authorization: `Bearer ${token}` };
      // const me = axios.get('/api/me', { headers });
      // console.log({ me });
    },

    handleSubmit() {
      this.$firebaseAuth.emailLogin(this.email, this.password);
    },

    handleGoogle() {
      this.$store.commit('setRegisterType', 'google');
      this.$firebaseAuth.googleLogin();
    },

    register() {
      axios.post('/auth/register', {
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
        name: this.name,
        stu_id: this.stu_id,
        major: this.major,
      }).then((response) => {
        console.log(response.data);
        if (response.data) {
          this.$firebaseAuth.emailLogin(this.email, this.password);
        }
      })
    }
  }
};
</script>

<style scoped>
  .wrapper {
    margin: auto;
    width: 200px;
  }

  .logo {
    width: 200px;
    margin-bottom: 50px;
  }

  .input-label {
    text-align: left;
  }

  input {
    width: 100%;
    border: 1px solid grey;
    border-radius: 10px;
    height: 40px;
    margin: 10px 0;
  }

  .sns-login img {
    width: 25px;
  }

  .sns-login {
    width: 100%;
    height: 70px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    font-weight: bold;
  }
</style>
