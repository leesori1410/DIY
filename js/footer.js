// footer.js 파일 내용
const toggleMenu = () => {
    const footerToggleDiv = document.querySelector(".toggle-img img");
    const footerListUl = document.querySelector(".footer-box");

    footerToggleDiv.onclick = () => {
        footerListUl.classList.toggle("show-menu");
        footerListUl.classList.toggle("show-mobile");
    }
}
toggleMenu();

const toggleItems = () => {
    // 문의
    const footercontainerDiv0 = document.querySelectorAll(".explain")[0];
    const mobileItem0 = document.querySelectorAll(".toggle-img")[0];
    
    // SNS
    const footercontainerDiv1 = document.querySelectorAll(".explain")[1];
    const mobileItem1 = document.querySelectorAll(".toggle-img")[1];
        
    // 주소
    const footercontainerDiv2 = document.querySelectorAll(".explain")[2];
    const mobileItem2 = document.querySelectorAll(".toggle-img")[2];
    
    mobileItem0.onclick = () => {
        footercontainerDiv0.classList.toggle("show-mobile");
    }
    mobileItem1.onclick = () => {
        footercontainerDiv1.classList.toggle("show-mobile");
    }
    mobileItem2.onclick = () => {
        footercontainerDiv2.classList.toggle("show-mobile");
    }
}
toggleItems();



