/////////////////////////스크롤 스크립트

gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
    },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth + 100;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth,
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});




/////////////////////////롤러 스크립트
  
  // 롤링 배너 복제본 생성
  let roller = document.querySelector('.rolling-list');
  roller.id = 'roller1'; // 아이디 부여

  let clone = roller.cloneNode(true)
  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  clone.id = 'roller2';
  document.querySelector('.wrap').appendChild(clone); // wrap 하위 자식으로 부착

  document.querySelector('#roller1').style.left = '0px';
  document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
  // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

  roller.classList.add('original');
  clone.classList.add('clone');