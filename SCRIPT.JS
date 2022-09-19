let emais = ["yuri@hotmail.com", "123@hotmail.com" ];
let senhas = ["123456", "123456789"];


function validar_email(valor) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(valor))
        return true;
    else
        return false;
}

function senha_invalida() {
    let texto = document.getElementById("senha");
    texto.value = "";
    texto.placeholder = "Senha invalida!";
}

function email_invalido() {
    let texto = document.getElementById("email");
    texto.value = "";
    texto.placeholder = "Email invalido!";
}

function limpar_placeholder() {
    let texto = document.getElementById("email");
    texto.placeholder = "";
    texto = document.getElementById("senha");
    texto.placeholder = "";
}


function mostrar_senha() {
    var type = document.getElementById("senha");
    if (type.type === "password") {
        type.type = "text";
    } else {
        type.type = "password";
    }
}

function validar_email_senha() {
    limpar_placeholder();
    let email = document.getElementById("email").value.toString();
    if(validar_email(email)){
        let senha = document.getElementById("senha").value.toString();
        for(let i = 0; i < emais.length; i++){
            if(email == emais[i] && senha == senhas[i]){
                window.location.assign("https://www.google.com.br");
                return true;
                
            }
            else{
                senha_invalida();
                return false;
            }
        }
    }
    else{
        email_invalido();
        return false;
    }
}


const botao_login = document.getElementById("botao_login");
botao_login.addEventListener("click", validar_email_senha);

const botao_senha = document.getElementById("botao_senha");
botao_senha.addEventListener("click", mostrar_senha);