let ul = document.querySelector('.itensMenu')
let btn = document.querySelector('.menu-btn i')
let body = document.getElementById('conteiner')

function menuVisivel(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        body.style.removeProperty('overflow')
        console.log('remove')
    }else{
        ul.classList.add('open');
        body.style.overflow = "none"
        console.log('adciona')
    }
}
