
if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
  document.getElementById("btnInicio").className = "itemDesabilitado";
  document.getElementById("linkInicio").style.cursor = "default";
}

window.onscroll = function () {
  scrollShandow();
};

function scrollShandow() {
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


