const plus = () => {
    console.log("tlfgod");
    const plusButton = document.getElementsByClassName("plus")[0];

    const inDiv = document.getElementsByClassName("in")[0];

    plusButton.onclick = () => {
        inDiv.classList.toggle("focus-show");
        console.log(inDiv)
        console.log("snfma");
    }
}
plus();