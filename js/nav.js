// 

const toggleMenu = () => {
    const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; 
    const navListUl = document.getElementsByClassName("nav-list")[0];  
    const toggleI = navToggleDiv.getElementsByTagName("i")[0]; 

    navToggleDiv.onclick = () => {
        navListUl.classList.toggle("nav-show");

        toggleI.classList.toggle("bi-lsit");
        toggleI.classList.toggle("bi-x-lg");
        
    }
}
toggleMenu();

const DIYlistMouseover = () => {
    const navListUl = document.getElementsByClassName("nav-list")[0];  
    const DIYListUl = document.getElementsByClassName("DIY-list")[0];
    navListUl.onmouseover = DIYListUl.onmouseover = () => {
        // console.log("navListUl 누름");
        DIYListUl.classList.add("top"); 
    }
    navListUl.onmouseout = DIYListUl.onmouseout = () => {
        // console.log("DIYListUl 땜");
        DIYListUl.classList.remove("top"); 
    }
}
DIYlistMouseover();


const DIYtoggle  = () => {
    const navDIYLI = document.getElementsByClassName("nav-DIY")[0];
    const toggleI = navDIYLI.getElementsByTagName("i")[0];
    const DIYUl = document.getElementsByClassName("DIY")[0];
    toggleI.onclick = () => {
        toggleI.classList.toggle("bi-caret-down-fill");
        toggleI.classList.toggle("bi-caret-down");
        DIYUl.classList.toggle("nav-show");
    }
}
DIYtoggle();