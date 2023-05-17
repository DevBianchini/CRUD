adicionarTarefa()

//pegará o id do usuario que está logado pra usar na task
let idLogado;
for(let i = 0; i < Storage.length; i++) {
    if(Storage[i].isLogged) {
        idLogado = Storage[i].id
    }
}

let taskTitle = document.querySelector("#title").value
let description = document.querySelector("#description").value

document.querySelector("#addBtn").addEventListener("click", (e) => {
    e.preventDefault()
    let taskTitle = document.querySelector("#title").value
    let description = document.querySelector("#description").value

    if(!taskTitle || !description) {
        alert("Digite algo")
    } else {
        const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
    
        console.log(tasks)
        const task = {
            title: taskTitle,
            description: description,
            id: tasks.length + 1,
            idUser: idLogado
        }
    
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        //console.log(localStorage.getItem("tasks"))
        addTask.classList = "top caixa"
        
        document.querySelector(".noTaskTodo").style.display = "none"
        let aFazer = document.querySelector(".todo"); //div a fazer
        let divTask = document.createElement("div")
        divTask.classList.add("task")
    
        let firstDiv = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerHTML = document.querySelector("#title").value
        let paragrafo = document.createElement("p")
        paragrafo.classList.add("hide")
        paragrafo.innerHTML = document.querySelector("#description").value
        firstDiv.appendChild(h3)
        firstDiv.appendChild(paragrafo)
        
        let secondDiv = document.createElement("div")
        secondDiv.classList.add("taskBtn")
        let edit = document.createElement("button")
        edit.innerHTML = "Editar"
        secondDiv.appendChild(edit)
        let more = document.createElement("button")
        more.innerHTML = "Mais"
        more.classList.add("moreTodo")
        secondDiv.appendChild(more)
        let doing = document.createElement("button")
        doing.innerHTML = "Fazendo"
        secondDiv.appendChild(doing)

        divTask.appendChild(firstDiv)
        divTask.appendChild(secondDiv)
        aFazer.appendChild(divTask)
    }


})

function adicionarTarefa() {
    // LÓGICA QUE PEGA AS TAREFAS ESPECIFICAS ====
        let userID;
        let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
        let userTeste = JSON.parse(localStorage.getItem("users"))
        for(let i = 0; i < userTeste.length; i++) {
            if(userTeste[i].isLogged) {
                userID = userTeste[i].id
            }
        }
        for(let i = 0; i < tasks.length; i++) {
            if(userID === tasks[i].idUser) {
                document.querySelector(".noTaskTodo").style.display = "none"
                let aFazer = document.querySelector(".todo"); //div a fazer
                let divTask = document.createElement("div")
                divTask.classList.add("task")
            
                let firstDiv = document.createElement("div")
                let h3 = document.createElement("h3")
                h3.innerHTML = tasks[i].title
                let paragrafo = document.createElement("p")
                paragrafo.classList.add("hide")
                paragrafo.innerHTML = document.querySelector("#description").value
                firstDiv.appendChild(h3)
                firstDiv.appendChild(paragrafo)
                
                let secondDiv = document.createElement("div")
                secondDiv.classList.add("taskBtn")
                let edit = document.createElement("button")
                edit.innerHTML = "Editar"
                secondDiv.appendChild(edit)
                let more = document.createElement("button")
                more.innerHTML = "Mais"
                more.classList.add("moreTodo")
                secondDiv.appendChild(more)
                let doing = document.createElement("button")
                doing.innerHTML = "Fazendo"
                secondDiv.appendChild(doing)

                divTask.appendChild(firstDiv)
                divTask.appendChild(secondDiv)
                aFazer.appendChild(divTask)
            }
        }
    
}

// SIDE BAR HOVER =========
document.addEventListener("DOMContentLoaded", () => {
    let sideBar = document.querySelector(".side-bar")
    sideBar.addEventListener("mouseenter", () => {
        sideBar.classList.add("side-bar-in")
        sideBar.classList.remove("side-bar-out")
        isHover = true
    })
    sideBar.addEventListener("mouseleave", () => {
        sideBar.classList.add("side-bar-out")
        sideBar.classList.remove("side-bar-in")
        isHover = false
    })
})

// CONFIG =============
let preferences = document.querySelector(".preferences")
let transparent = document.querySelector(".bg-transparent")
document.querySelector("#open-config").addEventListener("click", () => {
    preferences.style.transform = "translate(-50%, -50%)"
    transparent.style.display = "block"
    if(userInfo.classList.contains("bottom")) {
        userInfo.classList = "top caixa userInfo"
    } else {
        userInfo.classList = "bottom caixa userInfo"
    }
})

function fecharConfig() {
    preferences.style.transform = "translate(-50%, -200%)"
    setTimeout(() => {
        transparent.style.display = "none"
    }, 300)
}

document.querySelector(".bg-transparent").addEventListener("click", () => {
    fecharConfig()
})

document.querySelector("#close-config").addEventListener("click", () => {
    fecharConfig()
    //https://youtube.com/shorts/wUWY6HVF1B8?feature=share
})

// addTask and User

