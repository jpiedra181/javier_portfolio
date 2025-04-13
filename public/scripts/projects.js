const projects = document.querySelectorAll(".project")
const modal =document.querySelector('.modal')
const info = document.querySelector('projectInfo')
const close = document.querySelector('.close')
const image = document.querySelector('.projectImage')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const link = document.querySelector('.link')
const techs = document.querySelector('.tech')

// Change the language
let currentLang = localStorage.getItem('lang') || 'en'

const response = ''


async function getProject() {
    try{
        if(currentLang === 'en') {
            response = await fetch('docs/projects_en.json')    
        } else{
            response = await fetch('docs/projects_es.json')
        }
        const data = await response.json()
        projects.forEach((project) => {
            project.addEventListener('click', () => {
                techs.innerHTML = ''
                let show
                if(project.classList.contains('ecommerce')) {show = data.projects[0]}
                if(project.classList.contains('todo')) {show = data.projects[1]}
                if(project.classList.contains('discord')) {show = data.projects[2]}
                if(project.classList.contains('foodie')) {show = data.projects[3]}
                if(project.classList.contains('blog')) {show = data.projects[4]}
                if(project.classList.contains('game')) {show = data.projects[5]}
                console.log(show)
                modal.style.display = 'flex'
                title.innerHTML = show.title
                description.innerHTML = show.description
                image.src = show.image
                link.href = show.link
                if(show.technologies.isHTML) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/html_icon.svg'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isCSS) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/css_icon.svg'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isTailwind) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/tailwindcss_icon.svg'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isJavaScript) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/javascript_icon.svg'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isFigma) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/figma.png'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isAstro) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/astro_icon.png'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isReact) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/react_icon.png'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }
                if(show.technologies.isTypeScript) {
                    const list = document.createElement('li')
                    const icon = document.createElement('img')
                    icon.src = 'icons/typescript_icon.png'
                    icon.classList.add('w-8', 'h-8')
                    list.appendChild(icon)
                    techs.appendChild(list)
                }

                close.addEventListener('click', () => {
                    modal.style.display = 'none'
                })
            })
        })
    } catch (error){
        console.error('Failed to load JSON:', error);
    }
}

getProject()




























