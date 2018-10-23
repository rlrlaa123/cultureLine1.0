<template>
  <transition name="modal">
    <!--<div class="modal-mask">-->
      <!--<div class="modal-wrapper">-->
        <!--<div class="modal-header">-->
          <!--<img src="../../assets/cancel.png" @click="back">-->
          <!--<span class="header">글쓰기</span>-->
          <!--<div>-->
            <!--<button class="header-btn">작성하기</button>-->
          <!--</div>-->
        <!--</div>-->
        <!--<select>-->
          <!--<option>질문 유형을 선택하세요...</option>-->
          <!--<option>카테고리</option>-->
          <!--<option>카테고리</option>-->
          <!--<option>카테고리</option>-->
        <!--</select>-->
        <!--<div class="modal-body">-->
          <!--<div class="modal-input">-->
            <!--<input type="text" class="input-title" placeholder="제목">-->
            <!--<textarea-autosize-->
              <!--class="textarea"-->
              <!--:min-height="30"-->
              <!--:max-height="350"-->
              <!--placeholder="질문을 입력해주세요..."-->
            <!--&gt;Type something here...</textarea-autosize>-->
          <!--</div>-->
          <!--<div class="modal-image"></div>-->
        <!--</div>-->
        <!--<div class="modal-footer"></div>-->
      <!--</div>-->
    <!--</div>-->
  </transition>
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
    background-color: #f3f3f3;
    width: 100%;
    height: 100vh;
  }

  .modal-header {
    display: grid;
    grid-template-columns: 10% 70% 20%;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #e3e3e3;
    padding: 10px;
  }

  .modal-header img {
    width: 15px;
  }

  .header {
    text-align: left;
    font-size: 15px;
    font-weight: bold;
  }

  .header-btn {
    background-color: #7ebce1;
    color: white;
    padding: 5px;
    width: 65px;
    margin: auto;
    border-radius: 5px;
  }

  .modal-body {
    background-color: white;
  }

  .input-title {
    width: 100%;
    font-size: 13px;
    padding: 5px;
    border-bottom: 0.5px solid #e3e3e3;
  }

  .textarea {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    overflow: visible;
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

  select {
    width: 100%;
    /*width: 200px; !* 원하는 너비설정 *!*/
    padding: .8em .5em; /* 여백으로 높이 설정 */
    font-family: inherit; /* 폰트 상속 */
    /*background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 95% 50%;*/
    /*!* 네이티브 화살표 대체 *! border: 1px solid #e3e3e3;*/
    border-bottom: 1px solid #e3e3e3;
    background-color: white;
    border-radius: 0; /* iOS 둥근모서리 제거 */
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
    font-weight: lighter;
  }
</style>
