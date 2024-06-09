const toggleMenu = () => {
    // HTML 요소 -> js
    const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; // .nav-toggle 가져오자 
    const navListUl = document.getElementsByClassName("nav-spread")[0];      // .nav-list 가져오자
    // 선언된 navToggleDiv를 사용
    const toggleI = navToggleDiv.getElementsByTagName("i")[0];
    const navMobile = document.getElementsByClassName("nav-mobile")[0];             // .nav-toggle > <i> 가져오자

    // event
    navToggleDiv.onclick = () => {
        // class에 show-menu를 붙이거나/때자
        navListUl.classList.toggle("show-menu");
        navMobile.classList.toggle("show-mobile");

        // toggle icon 바꾸자 : bi-list <-> bi-x-lg
        // event .toggle()
        toggleI.classList.toggle("bi-lsit");
        toggleI.classList.toggle("bi-x-lg");
        
    }

}
toggleMenu();

const toggleItems = () => {
    // 악세사리
    const containerDiv0 = document.getElementsByClassName("container")[0];
    const mobileItem0 = document.getElementsByClassName("mobile-item")[0];
    const mobileToggleI0 = mobileItem0.getElementsByTagName("i")[0];
    
    // 케이크
    const containerDiv1 = document.getElementsByClassName("container")[1];
    const mobileItem1 = document.getElementsByClassName("mobile-item")[1];
    const mobileToggleI1 = mobileItem1.getElementsByTagName("i")[1];
    
    // 간식
    const containerDiv2 = document.getElementsByClassName("container")[2];
    const mobileItem2 = document.getElementsByClassName("mobile-item")[2];
    const mobileToggleI2 = mobileItem2.getElementsByTagName("i")[2];
    
    mobileItem0.onclick = () => {
        containerDiv0.classList.toggle("show-mobile");
        mobileToggleI0.classList.toggle("bi-chevron-down");
        mobileToggleI0.classList.toggle("bi-chevron-up");
    }
    mobileItem1.onclick = () => {
        containerDiv1.classList.toggle("show-mobile");
        mobileToggleI1.classList.toggle("bi-chevron-down");
        mobileToggleI1.classList.toggle("bi-chevron-up");
    }
    mobileItem2.onclick = () => {
        containerDiv2.classList.toggle("show-mobile");
        mobileToggleI2.classList.toggle("bi-chevron-down");
        mobileToggleI2.classList.toggle("bi-chevron-up");
    }
}
toggleItems();