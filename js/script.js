const gnb = new Vue({
  el: '#gnb',
  data: {
    gnbArr: [
      {
        title: 'ABOUT',
        url: 'javascript:void(0)',
        depth2: [
          {
            title: '온뮤직 소개',
            url: 'javascript:void(0)',
          },
          {
            title: '오시는 길',
            url: 'javascript:void(0)',
          },
          {
            title: '시설 안내',
            url: 'javascript:void(0)',
          },
        ]
      },
      {
        title: 'TRAINER',
        url: 'javascript:void(0)',
        depth2: [
          {
            title: '보컬',
            url: 'javascript:void(0)',
          },
          {
            title: '댄스',
            url: 'javascript:void(0)',
          },
          {
            title: '미디 / 작곡',
            url: 'javascript:void(0)',
          },
          {
            title: '랩',
            url: 'javascript:void(0)',
          },
          {
            title: '피아노 / 기타',
            url: 'javascript:void(0)',
          },
        ]
      },
      {
        title: 'CLASS',
        url: 'javascript:void(0)',
        depth2: [
          {
            title: '입시',
            url: 'javascript:void(0)',
          },
          {
            title: '오디션',
            url: 'javascript:void(0)',
          },
          {
            title: '키즈',
            url: 'javascript:void(0)',
          },
          {
            title: '취미',
            url: 'javascript:void(0)',
          },
        ]
      },
      {
        title: 'NOTICE',
        url: 'javascript:void(0)',
        depth2: [
          {
            title: '공지사항',
            url: 'javascript:void(0)',
          },
          {
            title: '입시 합격',
            url: 'javascript:void(0)',
          },
          {
            title: '오디션 합격',
            url: 'javascript:void(0)',
          },
        ]
      },
      {
        title: 'CONTACT',
        url: 'javascript:void(0)',
        depth2: [
          {
            title: '컨택트',
            url: 'javascript:void(0)',
          },
          {
            title: '상담신청',
            url: 'javascript:void(0)',
          },
          {
            title: '협력업체',
            url: 'javascript:void(0)',
          },
        ]
      },
    ],
    showDepth2: false,
  },
  methods: {
    gnbHover() {
      if(event.type === 'mouseover') {
        this.showDepth2 = true;
      } else {
        this.showDepth2 = false;
      }
    }
  }
})

const floatingArea = new Vue({
  el: '.floating-area',
  data: {
    expendBtn: {
      href: 'javascript:void(0)',
      imgSrc: 'img/common/btn_menu.png',
      imgAlt: '메뉴버튼',
    },
    isMenuShow: false,
    menuArr: [
      {
        href: 'javascript:void(0)',
        imgSrc: 'img/common/btn_consulting.png',
        imgAlt: '상담신청',
      },
      {
        href: 'javascript:void(0)',
        imgSrc: 'img/common/btn_kakao.png',
        imgAlt: '카카오톡',
      },
      {
        href: 'javascript:void(0)',
        imgSrc: 'img/common/btn_plus.png',
        imgAlt: 'contact 페이지',
      },
    ],
    topBtn: {
      href: 'javascript:void(0)',
      imgSrc: 'img/common/btn_more.png',
      imgAlt: '페이지 맨위로 이동'
    }
  },
  methods: {
    menuBtn() {
      this.isMenuShow = !this.isMenuShow;
    }
  }
})