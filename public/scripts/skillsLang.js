// Change the language
// let currentLangHero = localStorage.getItem('lang') || 'en'

function updateLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang]
    })
}
  
// Init
updateLanguage(localStorage.getItem('lang') || 'en')