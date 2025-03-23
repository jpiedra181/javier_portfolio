const buttonMode = document.querySelector('button.mode')
const iconMode = document.querySelector('.icon-mode')
const logo = document.querySelector('.logo')
const resume = document.querySelector('.resume')
const github = document.querySelector('.github')
const menuIcon = document.querySelector('.menuIcon')


buttonMode.addEventListener('click', () => {
    document.body.style.color = document.body.style.color === 'white' ? 'black' : 'white'
    if(iconMode.src.includes('dark_mode')) {
        document.body.style.background = 'black'
        iconMode.src = './src/assets/light_mode.svg'
        logo.src = './src/assets/white_logo.svg'
        github.src = './src/assets/github-mark-white.svg'
        menuIcon.src = './src/assets/menu_icon_white.svg'
        resume.style.background = 'white'
        resume.style.color = 'black'
        resume.onmouseover = function () {
            resume.style.background = "#8898aa";
          };
          
          resume.onmouseout = function () {
            resume.style.background = "white";
          };
    } else {
        document.body.style.background = 'radial-gradient(circle, #fae6f7, #faf9fa)'
        iconMode.src = './src/assets/dark_mode.svg'
        logo.src = './src/assets/black_logo.svg'
        github.src = './src/assets/github-mark.svg'
        menuIcon.src = './src/assets/menu_icon_black.svg'
        resume.style.background = 'black'
        resume.style.color = 'white'
        resume.onmouseover = function () {
            resume.style.background = "#8898aa";
          };
          
          resume.onmouseout = function () {
            resume.style.background = "black";
          };
    }
})