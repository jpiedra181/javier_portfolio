const buttonTop = document.querySelector(".scrollToTop")

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        buttonTop.style.display = "block"
    } else {
        buttonTop.style.display = "none"
    }
})