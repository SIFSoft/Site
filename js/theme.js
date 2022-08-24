const NOME_ARQUIVO = "theme.json";

// Variável para guardar o valor do tema atual selecionado.
let tema = {
    modo: 0,
};

// Função para escrever no arquivo do modo salvo.
function salvaModo(objeto) {
    let objJson = JSON.stringify(objeto);
    localStorage.setItem(NOME_ARQUIVO, objJson);
  }
  
// Função para ler o arquivo que guarda o modo salvo.
function lerArquivoRanque() {
let objSalvo = localStorage.getItem(NOME_ARQUIVO);
return JSON.parse(objSalvo);
}

// Função para mudar o tema conforme o valor do checkbox ao ser clicado.
function theme(valor) {
    if (valor == 0) {
      document.getElementById("btnMode").value = 1;
      document.getElementById("btnMode").innerHTML =
        "<span title='Modo Claro.' id='modeD' class='material-symbols-outlined'>light_mode</span>";
      document.getElementById("conteiner").className = "dark";
      tema.modo = 0;
    } else if (valor == 1) {
      document.getElementById("btnMode").value = 0;
      document.getElementById("btnMode").innerHTML =
        "<span title='Modo Escuro.' id='modeC' class='material-symbols-outlined'>dark_mode</span>";
      document.getElementById("conteiner").className = "light";
      tema.modo = 1;
    }
    salvaModo(tema)
}

// Função para iniciar o tema salvo no localstorage, ao abrir a página se houver.
window.onload = function () {
    document.body.style.animation = 'none'
    tema = lerArquivoRanque();
    if (tema == null){
        tema.modo = 1;
    }
    document.getElementById("conteiner").style.transition = "0s ease-in-out";
    theme(tema.modo)
    document.getElementById("navbar").style.transition = "transition: 0.6s ease-in-out";
    document.getElementById("conteiner").style.transition = "0.5s ease-in-out";
}