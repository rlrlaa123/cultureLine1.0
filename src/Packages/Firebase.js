/* eslint-disable */
import firebase from 'firebase/app';
import 'firebase/auth';
import router from '../router/index';
import axios from 'axios';

/* eslint no-param-reassign: "error" */
export default (Vue) => {
  Vue.firebaseAuth = {
    register(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log('Register succeded', user);
        router.push({ path: '/conversation' });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode + ': ' + errorMessage);
      });
    },
    emailLogin(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log('Login succeded', user);
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          // console.log(idToken);
          axios.post('/auth/login', {
            token: idToken,
            email: email,
            password: password,
          }).then((response) => {
            console.log(response);
          }).catch((error) => {
            console.log(error);
          });
          // ...
        }).catch(function(error) {
          // Handle error
        });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode + ': ' + errorMessage);
      });
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(() => {
        return firebase.auth().getRedirectResult();
      }).then((result) => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result);

      }).catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    },
    logout() {
      firebase.auth().signOut().then(() => {
      }).catch((error) => {
        // An error happened.
        alert(`Error: ${error}`);
      });
    },
    currentUser() {
      return firebase.auth().currentUser;
    }
  };
  Object.defineProperties(Vue.prototype, {
    $firebaseAuth: {
      get: () => Vue.firebaseAuth,
    },
  });
};
