const projects = document.querySelectorAll(".project")

async function getProject() {
    try{
        const response = await fetch('docs/projects.json')
        const data = await response.json()
        console.log(data)
        projects.forEach((project) => {

        })
    } catch{

    }
}

getProject()




























