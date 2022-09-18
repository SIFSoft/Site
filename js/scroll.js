// Função para mostrar que o botão de início está selecionado ao abrir a pagina.
if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
  document.getElementById("btnInicio").className = "itemDesabilitado";
  document.getElementById("linkInicio").style.cursor = "default";
}
// Chama a função ``scrollShandow()`` conforme se scrolla a página.
window.onscroll = function () {
  scrollShandow();
  visivelButton();
  if(document.baseURI.indexOf('#sucess') > 0){
    window.location.href = window.location.href.replace('#sucess', '#fechar');
  }
};

// Função ``scrollShandow()`` verificar qual botão do navbar será desabilitado conforme a posição do scroll.
function scrollShandow() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow =
      "0px 3px 10px rgba(0, 0, 0, 0.15)";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
  }
  let sobreY = document.getElementById("sobre").getBoundingClientRect().y
  let equipeY = document.getElementById("equipe").getBoundingClientRect().y
  if ((document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) &&
    (document.body.scrollTop < (sobreY - 10) || document.documentElement.scrollTop < (sobreY - 10)))
    {
      document.getElementById("btnInicio").className = "itemDesabilitado";
      document.getElementById("linkInicio").style.cursor = "default";
      document.getElementById("linkSobre").style.cursor = "pointer";
      document.getElementById("btnSobre").className = "item";
      document.getElementById("btnEquipe").className = "item";
      document.getElementById("linkEquipe").style.cursor = "pointer";
    }else if(document.body.scrollTop < (equipeY - 10) || document.documentElement.scrollTop < (equipeY - 10)){
      document.getElementById("btnInicio").className = "item";
      document.getElementById("linkInicio").style.cursor = "pointer";
      document.getElementById("linkSobre").style.cursor = "default";
      document.getElementById("btnSobre").className = "itemDesabilitado";
      document.getElementById("btnEquipe").className = "item";
      document.getElementById("linkEquipe").style.cursor = "pointer";
    }else{
      document.getElementById("btnInicio").className = "item";
      document.getElementById("linkInicio").style.cursor = "pointer";
      document.getElementById("linkSobre").style.cursor = "pointer";
      document.getElementById("btnSobre").className = "item";
      document.getElementById("btnEquipe").className = "itemDesabilitado";
      document.getElementById("linkEquipe").style.cursor = "default";
    }
}


