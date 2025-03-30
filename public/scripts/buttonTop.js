const buttonTop = document.getElementById("scrollToTop")

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        buttonTop.style.display = "block"
    } else {
        buttonTop.style.display = "none"
    }
})

buttonTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})