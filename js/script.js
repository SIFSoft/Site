window.onscroll = function() {scrollShandow()};
 
function scrollShandow() {
  document.getElementById("navbar").style.transition = "0.6s ease-in-out";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow = "0px 3px 10px rgba(0, 0, 0, 0.15)" 
  } else{
    document.getElementById("navbar").style.boxShadow = "none"
  }
}


function theme(valor){
  if(valor == 0){
    document.getElementById("btnMode").value = 1;
    document.getElementById("btnMode").innerHTML = "<span title='Modo Claro.' id='modeD' class='material-symbols-outlined'>light_mode</span>";
    document.getElementById("conteiner").className = "dark"
  }else if(valor == 1){
    document.getElementById("btnMode").value = 0;
    document.getElementById("btnMode").innerHTML = "<span title='Modo Escuro.' id='modeC' class='material-symbols-outlined'>dark_mode</span>";
    document.getElementById("conteiner").className = "light"
  }
}