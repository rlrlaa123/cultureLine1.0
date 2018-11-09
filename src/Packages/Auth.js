import Vue from 'vue';

export default () => {
  Vue.auth = {
    // set token
    setToken: (token, expiration) => {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
    },

    // get token
    getToken: false,

    // destroy token
    // isAuthenticated
    isAuthenticated: false,
  };
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => Vue.auth,
    },
  });
};
