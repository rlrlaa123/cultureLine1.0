<template>
  <div>
    <div class="dashboard-category-wrapper">
      <button class="dashboard-category-btn">#카테고리1</button>
      <button class="dashboard-category-btn">#카테고리2</button>
      <button class="dashboard-category-btn">#카테고리3</button>
    </div>
    <div class="dashboard-wrapper" v-for="question in questions"
         v-bind:key="question.id" @click="openShow(question)">
      <div class="dashboard-status-wrapper">
        <div class="dashboard-category">
          <span>{{ question.category }}</span>
        </div>
        <div class="dashboard-header-option">
          <span style="font-size: 10px; color: #7ebce1; float: right;"
                v-if="question.answers.length !== 0">
              답변완료
          </span>
        </div>
      </div>
      <div class="dashboard-header-wrapper">
        <span style="font-size: 20px;">Q.</span>
        <div class="dashboard-header">
          <span class="dashboard-header-title">{{ question.title }}</span>
        </div>
      </div>
      <div class="dashboard-body-wrapper">
        {{ question.contents }}
      </div>
      <div class="current-time">{{ question.created_at }}</div>
      <div class="dashboard-footer-wrapper" v-for="answer in question.answers"
           v-bind:key="answer.id">
        <div class="dashboard-footer-container">
          <div style="display: flex; justify-content: flex-start; font-size: 20px;">
            A.
          </div>
          <div style="display: flex; justify-content: flex-start; align-items: center;">
            <span style="font-weight: bold;">{{ answer.author }}</span>
          </div>
          <div></div>
          <div class="answer-contents">{{ answer.contents }}</div>
        </div>
      </div>
    </div>
    <div class="question-btn" @click="showCreate = true">+</div>
    <create v-if="showCreate" @close="showCreate = false"></create>
    <show v-if="showShow" @close="showShow = false" :question="sendShow"></show>
  </div>
</template>

<script>
import Create from './createQuestion';
import Show from './showQuestion';

export default {
  components: {
    Create,
    Show,
  },
  data() {
    return {
      currentTime: null,
      showCreate: false,
      showShow: false,
      sendShow: {},
      questions: [
        {
          id: 0,
          title: '문과계열이 네이버 카카오 들어가려면 스펙 어느정도 돼야할까요?',
          author: 'Gon Giribala',
          contents: '현재 2학년 콘텐츠과를 다니고 있습니다. 토익940' +
          '학점 3.71, 목표가 네이버 카카오같은 기업인데 제가 노릴만한 자리가 많이 적을까요?',
          category: '#카테고리1',
          created_at: '2018-07-18',
          answers: [
            {
              id: 1,
              author: '삼성sds',
              contents: '토익점수 높네요. IT 기업에 관심있다면 전산하는 친구랑 같이 사이트를 만드는 프로젝트를 해보면 도움이 될듯합니다.',
              like: 3,
              created_at: '2018-07-18',
            },
            {
              id: 2,
              author: '한국청소년정책연구원',
              contents: '현재 네이버 합격자들의 평균 스펙은 ' +
              '1. 평균 학점 (85% 보유): 3.64점 ' +
              '2. 토익 보유자 평균 (36% 보유): 800점',
              like: 0,
              created_at: '2018-07-18',
            },
            {
              id: 3,
              author: '카카오',
              contents: '네이버나 카카오 같은 IT 기업의 기획에는 전략 기획과 비즈니스 기획, 서비스 기획이 있습니다.',
              like: 0,
              created_at: '2018-07-18',
            },
          ],
        },
        {
          id: 1,
          title: 'IT 직무 재취업 희망',
          author: '러블리 하루',
          contents: '중소기업에서 개발자로 1년반이상 근무중인 25세 여성입니다.' +
          ' 학교는 서울 하위권 4년제 컴공 졸업 3.5/4.3 입니다. ' +
          '영어점수는 없고, 자격증은 ocjp 하나 있습니다.' +
          ' 현재 대기업혁력으로 tv 검색 및 추천서비스 관련' +
          '업무중입니다. 직무 관련새선, 코딩실력이 띄어난 것은 ' +
          '아니지만 제게 주어진 개발은',
          category: '#카테고리2',
          created_at: '2018-07-18',
          answers: [
            {
              id: 1,
              author: '포스코',
              contents: '실력만 괜찮으시다면 충분히 가능성은 있습니다.' +
              ' 다만 부족해보이는 스펙이 문제가 되겠네요.' +
              '지금 회사 다니면서 차근히 스펙을 올리셔야 할 것 같습니다. ' +
              '최소 기사자격증은 보유해야하고, 영어점수도' +
              '준비하셔야 겠네요... 자소서를',
              like: 2,
              created_at: '2018-07-18',
            },
            {
              id: 2,
              author: '현대모비스',
              contents: '저는 이직 추천드립니다. 왜냐하면 IT분야이기 때문입니다. ' +
              '특히 카카오 같은 경우 시험만으로 경력직을 채용합니다.',
              like: 0,
              created_at: '2018-07-18',
            },
          ],
        },
        {
          id: 2,
          title: 'UX분야, 서비스 기획 관련 분야 취업 질문드리고 싶습니다.',
          author: 'Jeongseok',
          contents: '안녕하세요 IT에 관심많은 대학생 000입니다. 내년 2월 졸업예정을 앞두고 있는' +
          '4학년이라 취업 준비를 하고있는데요. 저는 UX 분야, 서비스 기획에 관심이 있습니다. (특히 네이버에' +
          '관심이 많습니다.)',
          category: '#카테고리3',
          created_at: '2018-07-18',
          answers: [
            {
              id: 1,
              author: '컴투스',
              contents: '안녕하세요, 전 다음 카카오 서비스 기획자입니다. 냉정하게 조언을 드리자면' +
              '결론적으로 지금 스펙으로는 네이버에 지원하기는 어려울 듯 싶습니다.',
              like: 0,
              created_at: '2018-07-18',
            },
          ],
        },
      ],
    };
  },
  methods: {
    openShow(data) {
      this.showShow = true;
      this.sendShow = data;
    },
  },
};
</script>

<style scoped>
  .dashboard-category-wrapper {
    margin-top: 10px;
  }

  .dashboard-category-btn {
    margin: 0 5px;
  }

  .dashboard-status-wrapper {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-bottom: 10px;
  }

  .dashboard-wrapper {
    width: 90%;
    height: auto;
    border: 1px solid #e3e3e3;
    border-radius: 15px;
    margin: 10px auto;
    background-color: white;
    padding: 20px 20px 5px 20px;
  }

  .dashboard-header-wrapper {
    display: grid;
    grid-template-columns: 10% 75% 15%;
  }

  .dashboard-header-wrapper img {
    width: 25px;
  }

  .dashboard-header {
    display: flex;
    align-items: center;
    font-size: 10px;
    padding-left: 10px;
  }

  .dashboard-header img {
    width: 15px;
  }

  .dashboard-header-title {
    display: block;
    font-size: 12px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin: 0;
    text-align: left;
  }

  .dashboard-header-option {
    font-size: 20px;
  }

  .dashboard-body-wrapper {
    text-align: left;
    margin-top: 10px;
  }

  .dashboard-footer-wrapper {
    text-align: left;
    font-size: 11px;
    padding: 10px 0;
    border-top: 1px solid #e3e3e3;
  }

  .dashboard-footer-container {
    display: grid;
    grid-template-columns: 10% 80%;
  }

  .dashboard-footer-wrapper img {
    width: 15px;
  }

  .question-btn {
    position: fixed;
    right: 5%;
    bottom: 5%;
    background-color: #7ebce1;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    box-shadow: 0.5px 0.5px 5px 1px #aaaaaa;
  }

  .current-time {
    font-size: 10px;
    text-align: left;
    margin: 5px 0;
  }

  .answer-contents {
    display: block;
    font-size: 12px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }

</style>
