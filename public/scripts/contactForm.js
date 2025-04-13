const form = document.getElementById('form')
const result = document.getElementById('result')
const message = document.getElementById('message')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
})

// Change the language
// let currentLangHero = localStorage.getItem('lang') || 'en'

function updateLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang]
    })
    if (lang === 'es') {
        message.placeholder = 'Escribe aquí tu mensaje...';
      } else {
        message.placeholder = 'Write here your message...';
      }
}
  
// Init
updateLanguage(localStorage.getItem('lang') || 'en')