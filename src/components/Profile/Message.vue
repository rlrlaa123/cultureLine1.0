<template>
    <div class="modal-mask">
      <div class="modal-wrapper" @click="back">
        <button>x</button>
        돌아가기
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
  /*.modal-enter {*/
    /*opacity: 0;*/
  /*}*/

  /*.modal-leave-active {*/
    /*opacity: 0;*/
  /*}*/

  /*.modal-enter .modal-container,*/
  /*.modal-leave-active .modal-container {*/
    /*-webkit-transform: scale(1.1);*/
    /*transform: scale(1.1);*/
  /*}*/

  .modal-mask {
    position: fixed;
    /*z-index: 9998;*/
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
</style>
