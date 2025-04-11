const projects = document.querySelectorAll(".project")

projects.forEach((project) => {
    try{
        async function getProject() {
            const response = await fetch('docs/projects.json')
            const data = await response.json()
            console.log(data)
        }
    } catch{

    }
})