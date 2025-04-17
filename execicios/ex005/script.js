function entrar () {
    var telefone = document.getElementById("txttel")
    var senha = document.getElementById("txtpass")
    var email = document.getElementById("txtema")
    var res = document.getElementById("div#res")
    var senha = senha.value
    var email = email.value
    res = document.getElementById("res")

    if (email == "" || senha == "") {  
        window.alert("Preencha todos os campos!");

    } else { 
        window.alert("bem-vindo " + email + "!"); 
    }
    if (senha == "123456") {
        window.alert("Senha correta!");
        return true;
    } else {
        return false;
    }
}