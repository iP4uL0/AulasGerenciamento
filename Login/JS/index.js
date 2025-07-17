document.querySelector("#botao").addEventListener('click', async (event) =>{
    event.preventDefault();

    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;
    
    let CorrectUser = "Admin";
    let CorrectPassword = "1234";
    
    if(user === CorrectUser || password === CorrectPassword){
        alert("login bem sucedido")

        window.location.href ="../../Home/HTML/Home.html"
    }
    else{
        alert("Usuario ou senha incorretos")
    }
})

