// Change the language
let currentLang = localStorage.getItem('lang') || 'en'

function updateLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang]
    });
}
  
// Init
updateLanguage(currentLang);