const menuIconOpen = document.querySelector('.menuIconOpen')
const menuIconClose = document.querySelector('.menuIconClose')
const menuItems = document.querySelector('.menuItems')
const items = document.querySelectorAll('.item')


menuIconOpen.addEventListener('click', () => {
    menuIconOpen.style.display = "none"
    menuIconClose.style.display = "block"
    menuItems.style.display = "block"
    items.forEach(item => {
        item.addEventListener('click', () => {
            menuIconOpen.style.display = "block"
            menuIconClose.style.display = "none"
            menuItems.style.display = "none"
        })
    })
})

menuIconClose.addEventListener('click', () => {
    menuIconOpen.style.display = "block"
    menuIconClose.style.display = "none"
    menuItems.style.display = "none"
})