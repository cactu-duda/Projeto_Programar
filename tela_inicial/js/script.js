function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha")

    console.log(email.value+senha.value)

    if(email == "valdinei@pp.com" && senha.value == "programar"){
        localStorage.setItem("acesso", true);

        window.location.href = "tela_principal.html"
    }else alert("Usuário ou senha inválido")
}
