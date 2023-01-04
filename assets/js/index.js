//console.log(email.value.indexOf("@"));

function verificarEmail(){
    let email_data = email.value.split("@")
    if(email_data[0].length > 4){
        if(email.value.indexOf("@") > 0){
            if(email_data[1].indexOf(".") > 0){
                alert("Email está completo")
            }else{
                alert("Está faltando ponto")
            }
            alert("Email está válido")
        }else{
            alert("Está faltando o @")
        }    
    }else{
        alert("Email está invalido, está curto demais")
    }
   
}
verificarEmail()

function verificarSenha(){
    let senha_verd = senha.value
    if(isNaN(parseInt(senha.value[i]))){
        for(let i; i < senha.value.length; i++){
            temnumero++
            }
        
        }
        
    } 
    if(temnumero > 0){
        alert("Senha está ok")
    }else{
        alert("Tem que ter um número")
    }

function validarFormulario(){
    verificarEmail();
   // verificarSenha();
    
}