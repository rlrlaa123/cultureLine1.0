<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
          <img src="../../assets/clear.png" @click="back">
          <span class="header">질문 & 답변</span>
          <span></span>
        </div>
        <div class="modal-body">
          <span style="font-size: 20px;">Q.</span>
          <p class="modal-title">{{ question.title }}</p>
          <p>{{ question.contents }}</p>
          <div class="content-menu">
            <div class="created-at">{{ question.created_at }}</div>
            <div class="content-edit">
              <button>글 수정</button>
              <button>글 삭제</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="comment-menu">
            <div>
            <span style="color: #7ebce1;">
              {{ question.answers.length }}
            </span>개 답변
            </div>
            <div>
              <button class="create-btn">답변하기</button>
            </div>
          </div>
          <div class="comment-wrapper" v-for="answer in question.answers"
               v-bind:key="answer.id">
            <!--&ndash;&gt;-->
            <div class="comment-header">
              <img src="../../assets/clear.png">
              <span>{{ answer.author }}</span>
              <span style="font-weight: lighter; font-size: 13px;">멘토 정보</span>
            </div>
            <div class="comment-body">
              <p>{{ answer.contents }}</p>
              <span style="font-weight: lighter; font-size: 11px; color: grey;">
                {{ answer.created_at }}
              </span>
              <div class="comment-status">
                <div style="display: inline-block;">
                  <button>
                    <img src="../../assets/clear.png" @click="answer.like +=1">
                    <span style="margin-left: 5px; font-size: 11px;">
                      {{ answer.like }}
                    </span>
                  </button>
                </div>
                <div style="display: inline-block;">
                  <button>
                    <img src="../../assets/clear.png" @click="answer.dislike +=1">
                    <span style="margin-left: 5px; font-size: 11px;">
                      {{ answer.dislike }}
                    </span>
                  </button>
                </div>
                <div class="comment-warn">
                  신고
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['question'],
  data() {
    return {
      messsage: '',
    };
  },
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
    background-color: white;
    width: 100%;
    height: 100vh;
    text-align: left;
    font-size: 15px;
    overflow: scroll;
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

  .modal-body {
    background-color: white;
    padding: 10px 0;
    margin: 0 20px;
    border-bottom: 1px solid #e3e3e3;
  }

  .modal-title {
    font-weight: bold;
    /*font-size: 13px;*/
  }

  .content-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content-edit button {
    font-weight: lighter;
    font-size: 10px;
    margin: 0 2.5px;
  }

  .created-at {
    font-weight: lighter;
    font-size: 13px;
  }

  .modal-footer {
    padding: 10px 0;
    margin: 0 20px;
  }

  .comment-wrapper {
    margin: 10px 0;
    border-top: 1px solid black;
  }

  .comment-wrapper img {
    width: 20px;
  }

  .comment-menu {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
  }

  .comment-header {
    display: grid;
    grid-template-columns: 10% 60% 30%;
    border-bottom: 1px solid #e3e3e3;
    padding: 10px 5px;
    align-items: flex-end;
  }

  .create-btn {
    background-color: #7ebce1;
    color: white;
    padding: 5px;
    width: 70px;
    margin: auto;
    border-radius: 5px;
  }

  .comment-body {
    padding: 10px;
  }

  .comment-status {
    margin-top: 10px;
  }

  .comment-status button {
    width: 70px;
    height: 30px;
    border: 1px solid #e3e3e3;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .comment-status img {
    width: 20px;
  }

  .comment-warn {
    display: inline-block;
    float: right;
    margin-top: 5px;
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
