let count = 1, controle = false;
document.getElementById("radio1").checked = true;
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
  