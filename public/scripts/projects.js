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
                console.log(project)
                let show
                if(project.classList.contains('ecommerce')) {show = data.projects[0]}
                if(project.classList.contains('todo')) {show = data.projects[1]}
                if(project.classList.contains('discord')) {show = data.projects[2]}
                if(project.classList.contains('foodie')) {show = data.projects[3]}
                if(project.classList.contains('blog')) {show = data.projects[4]}
                if(project.classList.contains('game')) {show = data.projects[5]}
                console.log(show)
                modal.style.display = 'block'
                modal.classList.add('w-screen h-screen blur-3xl justify-center items-center')
                title.innerHTML = show.title
                description.innerHTML = show.description
                image.src = show.image
                link.href = show.link

            })
        })
    } catch (error){
        console.error('Failed to load JSON:', error);
    }
}

getProject()




























