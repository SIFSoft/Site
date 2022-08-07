let count = 1,
  controle = false;
document.getElementById("radio1").checked = true;

if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
  document.getElementById("btnInicio").className = "itemDesabilitado";
  document.getElementById("linkInicio").style.cursor = "default";
}
setInterval(function () {
  slideAuto();
}, 5000);

function slideAuto() {
  if (controle) {
    count = 1;
    controle = false;
  } else count++;
  if (count > 3) {
    count = 2;
    controle = true;
  }
  document.getElementById("radio" + count).checked = true;
}

window.onscroll = function () {
  scrollShandow();
};

function scrollShandow() {
  document.getElementById("navbar").style.transition = "0.5s ease-in-out";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow =
      "0px 3px 10px rgba(0, 0, 0, 0.15)";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
  }
  let sobreY = document.getElementById("sobre").getBoundingClientRect().y
  if ((document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) &&
    (document.body.scrollTop < (sobreY - 10) || document.documentElement.scrollTop < (sobreY - 10)))
    {
      document.getElementById("btnInicio").className = "itemDesabilitado";
      document.getElementById("linkInicio").style.cursor = "default";
      document.getElementById("linkSobre").style.cursor = "pointer";
      document.getElementById("btnSobre").className = "item";
    }else{
      document.getElementById("btnInicio").className = "item";
      document.getElementById("linkInicio").style.cursor = "pointer";
      document.getElementById("linkSobre").style.cursor = "default";
      document.getElementById("btnSobre").className = "itemDesabilitado";
  }

}

function theme(valor) {
  if (valor == 0) {
    document.getElementById("btnMode").value = 1;
    document.getElementById("btnMode").innerHTML =
      "<span title='Modo Claro.' id='modeD' class='material-symbols-outlined'>light_mode</span>";
    document.getElementById("conteiner").className = "dark";
  } else if (valor == 1) {
    document.getElementById("btnMode").value = 0;
    document.getElementById("btnMode").innerHTML =
      "<span title='Modo Escuro.' id='modeC' class='material-symbols-outlined'>dark_mode</span>";
    document.getElementById("conteiner").className = "light";
  }
}
