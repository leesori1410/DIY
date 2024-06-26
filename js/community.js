function getData(post) {
    const titleH6Text = post.getElementsByClassName("title")[0].innerText;
    const postImgSrc = post.getElementsByClassName("post-img")[0].src;
    const writingPText = post.getElementsByClassName("writing")[0].innerText;
    // console.log(titleH6Text);
    // console.log(postImgSrc);
    // console.log(writingPText);
    setData(titleH6Text, postImgSrc, writingPText);
}

function setData(title, img, writing) {
    const focusDiv = document.getElementsByClassName("focus")[0];
    focusDiv.innerHTML = `<div class="focus-container">
                <h6 class="focus-title">${title}<i class="bi bi-arrows-angle-contract"></i></h6>
                <img src="${img}" alt="" class="focus-img">
                <p class="focus-writing">${writing}</p>            
            </div>\n`;
    focusDiv.classList.toggle("focus-show");
    const toggleI = focusDiv.getElementsByTagName("i")[0];
    // console.log(toggleI);
    toggleI.onclick = () => {
        focusDiv.classList.toggle("focus-show");
        focusDiv.classList.toggle("blur");
    }
}