
const toggleMenu = () => {
    // HTML 요소 -> js
    const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; // .nav-toggle 가져오자 
    // 선언된 navToggleDiv를 사용
    const toggleI = navToggleDiv.getElementsByTagName("i")[0];             // .nav-toggle > <i> 가져오자

    // event
    navToggleDiv.onclick = () => {
        // toggle icon 바꾸자 : bi-list <-> bi-x-lg
        // event .toggle()
        toggleI.classList.toggle("bi-lsit");
        toggleI.classList.toggle("bi-x-lg");
        // toggleI.classList.add("bi-list");
        // toggleI.classList.remove("bi-x-lg");
        // toggleI.classList.add("bi-lg");
        // toggleI.classList.remove("bi-list");
    }

}
toggleMenu();