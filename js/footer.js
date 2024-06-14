const footerToggleMenu = () => {

    const footerToggleDiv0 = document.getElementsByClassName("footer-box")[0];
    const toggleI0 = footerToggleDiv0.getElementsByClassName("bi")[0];
    const footerExplainUl0 = footerToggleDiv0.getElementsByClassName("explain")[0];

    const footerToggleDiv1 = document.getElementsByClassName("footer-box")[1];
    const toggleI1 = footerToggleDiv1.getElementsByClassName("bi")[0];
    const footerExplainUl1 = footerToggleDiv1.getElementsByClassName("explain")[0];

    const footerToggleDiv2 = document.getElementsByClassName("footer-box")[2];
    const toggleI2 = footerToggleDiv2.getElementsByClassName("bi")[0];
    const footerExplainUl2 = footerToggleDiv2.getElementsByClassName("explain")[0];

    toggleI0.onclick = () => {
        toggleI0.classList.toggle("bi-plus-lg");
        toggleI0.classList.toggle("bi-dash-lg");

        footerExplainUl0.classList.toggle("show");
    }

    toggleI1.onclick = () => {
        toggleI1.classList.toggle("bi-plus-lg");
        toggleI1.classList.toggle("bi-dash-lg");

        footerExplainUl1.classList.toggle("show");
    }

    toggleI2.onclick = () => {
        toggleI2.classList.toggle("bi-plus-lg");
        toggleI2.classList.toggle("bi-dash-lg");

        footerExplainUl2.classList.toggle("show");
    }
};
footerToggleMenu();