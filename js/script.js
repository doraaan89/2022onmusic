const gnb = new Vue({
  el: '#gnb',
  data: {
    gnbArr: [
      {
        title: 'ABOUT',
        url: 'about.html',
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
        url: 'trainer.html',
        depth2: [
          {
            title: '보컬',
            url: '#vocal',
          },
          {
            title: '댄스',
            url: '#dance',
          },
          {
            title: '미디 / 작곡',
            url: '#midi',
          },
          {
            title: '랩',
            url: '#rap',
          },
          {
            title: '피아노 / 기타',
            url: '#piano',
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
        url: 'contact.html',
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
      imgSrc: 'img/common/btn_top.png',
      imgAlt: '페이지 맨위로 이동'
    }
  },
  methods: {
    menuBtn() {
      this.isMenuShow = !this.isMenuShow;
    },
    scrollTop() {
      // document.documentElement.scrollTop = 0;
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
});

const trainer = new Vue({
	el: '.trainer-content',
	data() {
		return {
			trainerArr: [
				{
					id: 'vocal',
					ceo: true,
					trainer: [
						{
							name: 'ttt',
							profileImg: '',
						}
					]
				},
			],
		}
	}
});

const facility = new Vue({
  el: '.main.facility',
  data: {
    imgIndex: 0,
    imgArr: [
      'temp/facility/시설사진/1.jpg',
      'temp/facility/시설사진/2.jpg',
      'temp/facility/시설사진/3.jpg',
      'temp/facility/시설사진/4.jpg',
      'temp/facility/시설사진/5.jpg',
      'temp/facility/시설사진/6.jpg',
      'temp/facility/시설사진/7.jpg',
      'temp/facility/시설사진/8.jpg',
      'temp/facility/시설사진/9.jpg',
      'temp/facility/시설사진/10.jpg',
      'temp/facility/시설사진/11.jpg',
      'temp/facility/시설사진/12.jpg',
    ]
  },
  methods: {
    prevBtn() {
      if (this.imgIndex < 1) {
        this.imgIndex = 11;
      } else if (this.imgIndex > 11) {
        this.imgIndex = 0;
      } else {
        this.imgIndex--;
      }
    },
    nextBtn() {
      if (this.imgIndex > 10) {
        this.imgIndex = 0;
      } else {
        this.imgIndex++;
      }
    }
  }
})
