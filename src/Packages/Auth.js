import Vue from 'vue';

export default () => {
  Vue.auth = {
    token: '',
    expiration: '',
    // set token
    setToken: (token, expiration) => {
      this.token = token;
      this.expiration = expiration;
    },

    // get token
    getToken: () => this.token,

    // destroy token
    // isAuthenticated
    isAuthenticated: () => {
      if (this.token) {
        return true;
      }
      return false;
    },
  };
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => Vue.auth,
    },
  });
};
