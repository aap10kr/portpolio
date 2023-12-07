document.addEventListener('DOMContentLoaded', function () {
    // 페이지가 로드될 때 실행되는 코드
    var targetElement = document.getElementById('show'); // 대상 요소의 ID를 설정해야 합니다.
  
    // 만약 대상 요소가 존재한다면
    if (targetElement) {
      // .show 클래스를 추가
      targetElement.classList.add('show');
    }
  });
