const valid = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
for(let i = 0; i < valid.length; i++) {
    if(valid[i].isLogged) {
        window.location.href = "tasks.html"
    }
}

// === CADASTRO ===
const username = document.querySelector("#user")
const password = document.querySelector("#password")
const usernameLogin = document.querySelector("#userLogin")
const passwordLogin = document.querySelector("#passwordLogin")

const loginBox = document.querySelector(".login")
const registerBox = document.querySelector(".cadastrar")

document.querySelector("#btn-cadastrar").addEventListener("click", (e) => { // CADASTRAR
    e.preventDefault()

    let users;
    if(!username.value || !password.value) { // verifica se há algo nos inputs
        alert("Digite algo!")
    } else {
        if(localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"))
        } else {
            users = []
        }
    
        const user = {
            username: username.value,
            password: password.value,
            id: users.length + 1,
            isLogged: false
        };
    
    
        for (let i = 0; i < users.length; i++) {
            const userAtual = users[i].username;
            if (userAtual === username.value) {
                alert("Usuário já cadastrado, digite outro");
                
                username.value = ""
                username.focus()
                password.value = ""
                document.querySelector(".passRegisLabel").classList.add("inputOut")
                document.querySelector(".passRegisLabel").classList.remove("inputClick")
                
                return; // sai da função para evitar adicionar o usuário duplicado
            }
        }
    
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        username.value = ""
        username.focus()
        password.value = ""
        alert("Cadastrado com sucesso");

        registerBox.classList.add("disappear");
        registerBox.classList.remove("appear");
        setTimeout(() => {
            registerBox.style.display = "none"
            loginBox.style.display = "flex"
        }, 200)
    
        loginBox.classList.remove("disappear");
        loginBox.classList.add("appear");

        document.querySelector(".passRegisLabel").classList.add("inputOut")
        document.querySelector(".passRegisLabel").classList.remove("inputClick")
    }
})

/* ==== LOGIN CSS ==== */

document.querySelector("#register-btn").addEventListener("click", (e) => {
    e.preventDefault()
    usernameLogin.value = "";
    username.focus();
    passwordLogin.value = "";

    loginBox.classList.add("disappear");
    loginBox.classList.remove("appear");
    setTimeout(() => {
        loginBox.style.display = "none"
        registerBox.style.display = "flex"
    }, 300)

    registerBox.classList.remove("disappear");
    registerBox.classList.add("appear");

    document.querySelector(".nameLoginLabel").classList.add("inputOut");
    document.querySelector(".nameLoginLabel").classList.remove("inputClick");
    document.querySelector(".passLoginLabel").classList.add("inputOut");
    document.querySelector(".passLoginLabel").classList.remove("inputClick");
});

document.querySelector("#login-btn").addEventListener("click", (e) => {
    e.preventDefault()

    username.value = ""
    usernameLogin.focus()
    password.value = ""

    registerBox.classList.add("disappear");
    registerBox.classList.remove("appear");
    setTimeout(() => {
        registerBox.style.display = "none"
        loginBox.style.display = "flex"
    }, 200)

    loginBox.classList.remove("disappear");
    loginBox.classList.add("appear");

    document.querySelector(".nameRegisLabel").classList.add("inputOut")
    document.querySelector(".nameRegisLabel").classList.remove("inputClick")
    document.querySelector(".passRegisLabel").classList.add("inputOut")
    document.querySelector(".passRegisLabel").classList.remove("inputClick")

})

// ====== LOGAR ======
document.querySelector("#btn-entrar").addEventListener("click", (e) => {
    e.preventDefault()

    let verifyUser = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []// pega o que ta armazenado no localStorage
    let userValid = false // pra verificar validação user

    for(let i = 0; i < verifyUser.length; i++) {
        verifyUser[i].isLogged = false
        localStorage.setItem("users", JSON.stringify(verifyUser))
        console.log(localStorage)
    }
    for(let i = 0; i < verifyUser.length; i++) {
        if(verifyUser[i].username === usernameLogin.value && verifyUser[i].password === passwordLogin.value) {
            userValid = true // se for tudo igual da verdadeiro pra poder usar o if fora do for
            verifyUser[i].isLogged = true
            localStorage.setItem("users", JSON.stringify(verifyUser))
            break
        }
    }
    if(userValid) {
        window.location.href = "tasks.html"
    } else {
        alert("Usuário inválido!")
        usernameLogin.value = ""
        usernameLogin.focus()
        passwordLogin.value = ""
        document.querySelector(".passLoginLabel").classList.add("inputOut");
        document.querySelector(".passLoginLabel").classList.remove("inputClick");
    }
})

// Animations

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
      var label = input.parentNode.querySelector('label');
      var inputValue = input.value;
  
      input.addEventListener('focus', function() {
        label.classList.add("inputClick");
        label.classList.remove("inputOut");
      });
  
      input.addEventListener('blur', function() {
        inputValue = input.value;
        if (!inputValue) {
          label.classList.add("inputOut");
          label.classList.remove("inputClick");
        }
      });
    });
})

// Apear Disappear

document.addEventListener("DOMContentLoaded", () => {
    let login = document.querySelector(".login")
    login.classList.add("appear")
})