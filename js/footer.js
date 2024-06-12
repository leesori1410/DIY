// toggle 함수를 정의합니다.
function toggle() {
    // "footer-list" 클래스를 가진 모든 요소를 가져와 footerList 변수에 저장합니다.
    var footerList = document.getElementsByClassName("footer-list")[0];
    
    // footerList의 각 요소를 반복합니다.
    for (var i = 0; i < footerList.length; i++) {
        // 현재 요소가 "show" 클래스를 가지고 있는지 확인합니다.
        if (footerList[i].classList.contains("show")) {
            // 만약 "show" 클래스를 가지고 있다면, "show" 클래스를 제거합니다.
            footerList[i].classList.remove("show");
        } else {
            // 만약 "show" 클래스를 가지고 있지 않다면, "show" 클래스를 추가합니다.
            footerList[i].classList.add("show");
        }
    }
}