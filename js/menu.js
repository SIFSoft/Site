var ul = document.querySelector('.itensMenu')
var btn = document.querySelector('.menu-btn i')
var body = document.getElementById('conteiner')

function menuVisivel(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        body.style.removeProperty('overflow')
        console.log('remove')
    }else{
        ul.classList.add('open');
        body.style.overflow = "hidden"
        console.log('adciona')
    }
}