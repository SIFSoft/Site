let count = 1, controle = false;
document.getElementById("radio1").checked = true;

// Chama a função ``slideAuto()`` a cada 5 segundos.
setInterval(function () {
    slideAuto();
  }, 5000);
  
// Função para definir uma página do slide como atual.
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
  