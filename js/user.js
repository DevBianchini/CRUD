const Storage = JSON.parse(localStorage.getItem("users"))
if(!Storage) {
    window.location.href = "login.html"
} else {
    let taLogado;
    for(let i = 0; i < Storage.length; i++) {
        if(Storage[i].isLogged === true) {
            taLogado = true
            break
        } else {
            taLogado = false  
        }
    }
    if(taLogado === false) {
        window.location.href = "login.html"
    }
}

/*  ============================================ */
let userInfo = document.querySelector(".userInfo");
let addTask = document.querySelector(".addTask")

// ADICIONAR TAREFA
document.querySelector("#newTask").addEventListener("click", () => {
    let title = document.querySelector("#title")
    title.value = ""
    title.focus()
    
    document.querySelector("#description").value = ""
    if(userInfo.classList.contains("bottom")) {
        userInfo.classList = "top caixa userInfo"
    }
    if(addTask.classList.contains("bottom")) {
        addTask.classList = "top caixa"
    } else {
        addTask.classList = "bottom caixa"
    }

})
document.querySelector("#cancelAdd").addEventListener("click", (e) => {
    e.preventDefault()
    addTask.classList = "top caixa"
})

// USERINFO
document.querySelector("#userInfo").addEventListener("click", () => {
    if(addTask.classList.contains("bottom")) {
        addTask.classList = "top caixa"
    }
    if(userInfo.classList.contains("bottom")) {
        userInfo.classList = "top caixa userInfo"
    } else {
        userInfo.classList = "bottom caixa userInfo"
    }
})
document.querySelector("#cancelUser").addEventListener("click", () => {
    userInfo.classList = "top caixa userInfo"
})

/* Identificador */

for(let i = 0; i < Storage.length; i++) {
    if(Storage[i].isLogged === true) {
        let userName = Storage[i].username
        let nameTittle = document.querySelector("#nameTitle")
        nameTittle.innerHTML = userName
    }
}

document.querySelector("#logout").addEventListener("click", () => {
    window.location.href = "login.html"
    for(let i = 0; i < Storage.length; i++) {
        if(Storage[i].isLogged === true && window.location.href !== "tasks.html") {
            Storage[i].isLogged = false
        }
    }
    localStorage.setItem("users", JSON.stringify(Storage))
})

//deletar usuario ======
document.querySelector("#deleteUser").addEventListener("click", () => {
    if(confirm("Certeza que deseja excluir este usuario?")) {
        for(let i = 0; i < Storage.length; i++) {
            if(Storage[i].isLogged === true) {
                Storage[i].username = undefined
                Storage[i].password = undefined
                Storage[i].isLogged = false
            }
        }
        localStorage.setItem("users", JSON.stringify(Storage))
        window.location = "login.html"
    }
})