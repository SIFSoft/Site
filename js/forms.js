// Função para deixar o botão lateral invisível.
function escondeButton(){
    document.getElementById("idBoxForm").style.visibility = 'hidden'
}

// Função para deixar o botão lateral visível.
function visivelButton(){
    document.getElementById("idBoxForm").style.visibility = 'visible'
}

// Função para feedback de que foi enviado com sucesso, por um curto período de tempo. 
function enviadoSucesso(){
    document.getElementById("sucess").style.visibility = 'visible'
    document.getElementById("sucess").style.opacity = '1'
    setInterval(function () {
        document.getElementById("sucess").style.opacity = '0'
        document.getElementById("sucess").style.visibility = 'hidden'
      }, 3000);
}
