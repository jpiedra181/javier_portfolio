const projects = document.querySelectorAll(".project")
const modal =document.querySelector('.modal')
const info = document.querySelector('projectInfo')
const close = document.querySelector('.close')
const image = document.querySelector('.projectImage')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const link = document.querySelector('.link')
const techs = document.querySelector('.tech')

async function getProject() {
    try{
        const response = await fetch('docs/projects.json')
        const data = await response.json()
        console.log(data)
        projects.forEach((project) => {
            project.addEventListener('click', () => {
                if(project.classList.contains('ecommerce')) {let show = data.projects[0]}
                if(project.classList.contains('todo')) {let show = data.projects[1]}
                if(project.classList.contains('discord')) {let show = data.projects[2]}
                if(project.classList.contains('foodie')) {let show = data.projects[3]}
                if(project.classList.contains('blog')) {let show = data.projects[4]}
                if(project.classList.contains('game')) {let show = data.projects[5]}
                modal.style.display = 'flex'
                modal.classList.add('w-screen h-screen blur-3xl justify-center items-center')
                title.innerHTML = show.title
                description.innerHTML = show.description
                image.src = show.image
                link.href = show.link

            })
        })
    } catch{

    }
}

getProject()




























