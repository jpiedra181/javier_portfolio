const menuIconOpen = document.querySelector('.menuIconOpen')
const menuIconClose = document.querySelector('.menuIconClose')
const menuItems = document.querySelector('.menuItems')
const items = document.querySelectorAll('.item')
const langBtn = document.getElementById('langBtn')

// Menu Icon
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

// Change the language
let currentLang = localStorage.getItem('lang') || 'en'

function updateLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang]
    });
    langBtn.textContent = lang === 'en' ? 'ES' : 'EN'
    localStorage.setItem('lang', lang)
  }
  
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en'
    updateLanguage(currentLang)
  });
  
  // Init
  updateLanguage(currentLang);