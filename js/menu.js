let ul = document.querySelector('.itensMenu')
let btn = document.querySelector('.menu-btn i')
let body = document.getElementById('conteiner')


// Função para abrir o menu em telas menores que 700px de largura.
function menuVisivel(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        body.style.removeProperty('overflow')
        btn.classList = "bi bi-list"
    }else{
        ul.classList.add('open');
        body.style.overflow = "none"
        btn.classList = "bi bi-x"
    }
}
