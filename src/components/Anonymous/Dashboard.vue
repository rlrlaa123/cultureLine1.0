<template>
  <div>
    <div class="notice-wrapper">
      <div class="notice-btn-wrapper" @click="fold()">
        <img :src="foldImage">
        <span>{{ foldText }}</span>
      </div>
      <transition name="expand">
        <div class="notice-container-intro" v-show="foldBtn">
          <img class="intro-image" src="../../assets/Notice/logo.png">
          <p>
            인하컬쳐라인은 인하대학교 문화콘텐츠문화경영학과의 선후배간 소통 플랫폼입니다.
            취업부터 진로까지, 수업에서 배울 수 없었던 꿀팁을 얻을 수 있습니다.
          </p>
          <img class="paragraph-line" src="../../assets/Notice/paragraph-line.png">
          <p>
            문화콘텐츠문화경영학과는 인문학적 사유에 기반을 둔 문화콘텐츠 기획과
            창작에 적합한 체계적 교과 프로그램을 운영중입니다.
            동시에, 문화콘텐츠 상품의 마케팅 및 브랜딩에 필요한 분석력,
            표현력 등을 갖춘 창발적 통섭지식인 양성을 목표로 하고 있습니다.
          </p>
        </div>
      </transition>
      <transition name="expand">
        <div class="notice-container-noticeboard" v-show="!foldBtn">
          <div class="notice-container-box">
            <p class="noticeboard-title">
              공지사항
            </p>
            <p class="noticeboard-tutorial">
              <img src="../../assets/Notice/tutorial.png" width="25px">
              인하컬쳐라인 사용법
            </p>
            <div v-for="item in 5" v-bind:key="item">
              <div>{{ item }}</div>
            </div>
          </div>
          <p>관련 사이트</p>
          <div class="notice-link-wrapper">
            <div class="notice-link-container">
              <img src="../../assets/Notice/tutorial.png">
              <p>인하대학교</p>
            </div>
            <div class="notice-link-container">
              <img src="../../assets/Notice/tutorial.png">
              <p>문화콘텐츠문화경영학</p>
            </div>
          </div>
          <div class="notice-link-wrapper">
            <div class="notice-link-container">
              <img src="../../assets/Notice/tutorial.png">
              <p>인하대학교</p>
            </div>
            <div class="notice-link-container">
              <img src="../../assets/Notice/tutorial.png">
              <p>문화콘텐츠문화경영학</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foldBtn: false,
      foldText: '소개글 보기',
      // eslint-disable-next-line
      foldImage: require('../../assets/Notice/arrow-open.png'),
      cards: [
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    };
  },
  methods: {
    fold() {
      if (this.foldBtn) {
        this.foldBtn = false;
        this.foldText = '소개글 보기';
        // eslint-disable-next-line
        this.foldImage = require('../../assets/Notice/arrow-open.png');
      } else {
        this.foldBtn = true;
        this.foldText = '공지사항 보기';
        // eslint-disable-next-line
        this.foldImage = require('../../assets/Notice/arrow-fold.png');
      }
    },
  },
};
</script>

<style scoped>
  .notice-wrapper {
    margin: 20px;
  }

  .notice-btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #265392;
  }

  .notice-btn-wrapper img {
    width: 30px;
    margin-right: 10px;
  }

  /* .notice-container-intro */
  .intro-image {
    width: 80%;
    margin: 50px 20px;
  }

  .notice-container-intro p {
    margin: 0;
    width: 100%;
    text-align: left;
  }

  /* .notice-container-intro */
  .paragraph-line {
    margin: 10px 0;
    height: 3px;
  }

  .notice-container-box {
    width: 100%;
    border: 1px solid #e3e3e3;
    box-shadow: 2px 2px 5px grey;
    border-radius: 20px;
    margin: 20px 0;
    padding: 10px;
    text-align: left;
  }

  /* .notice-container-box */
  .noticeboard-title {
    color: #265392;
    text-align: center;
  }

  /* .notice-container-box */
  .noticeboard-tutorial {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .noticeboard-tutorial img {
    margin-right: 10px;
  }

  .notice-link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
  }

  .notice-link-container {
    width: 100%;
    border: 1px solid #e3e3e3;
    border-radius: 20px;
    box-shadow: 2px 2px 5px #e3e3e3;
    margin: 5px;
    padding: 20px 5px;
  }

  .notice-link-container img {
    width: 50%;
  }

  .notice-link-container p {
    margin: 0;
    color: black;
    font-weight: bold;
    font-size: 10px;
  }

  .expand-enter-active, .expand-leave-active {
    transition: all .5s ease;
    height: 420px;
    overflow: hidden;
  }
  .expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0;
    overflow: hidden;
  }
</style>
