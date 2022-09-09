const url = 'https://sifsoft-api.herokuapp.com/documents/?format=json'

const carregando = document.querySelector('.carregando');
const documentsContainer = document.querySelector('.document-container')
let tbody = document.querySelector('.tbody')

async function getAllDocuments(){
    const response = await fetch(url)

    const data = await response.json();
    data.sort(function(a, b) { return parseInt(a.data) - parseInt(b.data) })
    data.reverse()
    data.map((documento) =>{
        
        let tr = tbody.insertRow();

        let td_nome = tr.insertCell();
        let td_data = tr.insertCell();
        let td_tipo = tr.insertCell();
        let td_link = tr.insertCell();

        td_nome.innerText = documento.titulo;
        td_data.innerText = documento.data.split('-').reverse().join('/');;
        td_tipo.innerText = documento.type;
        
        td_nome.classList.add('center');
        td_data.classList.add('center');
        td_tipo.classList.add('center');
        td_link.classList.add('center');

        
        let criarAncora = document.createElement("button");
        criarAncora.setAttribute("value", `${documento.link}`);
        criarAncora.setAttribute("type", "button");
        criarAncora.setAttribute("class", "botaoView");
        criarAncora.setAttribute('onClick',"openModaldocumets(this.value, '" + documento.titulo +"');");
        let addVisualizar = document.createElement('i');
        addVisualizar.classList= 'bi bi-eye-fill';

        criarAncora.appendChild(addVisualizar);
        td_link.appendChild(criarAncora);
    });
}

getAllDocuments();


function openModaldocumets(link, title){
    document.getElementById("modal-pdf-id").style.visibility = 'visible'
    document.getElementById("modal-pdf-id").style.opacity = '1'
    document.getElementById("pdf-view-id").src = `${link}`;
    document.getElementById("tituloDocsPdf").textContent = title;
}
function closeModaldocumets(){
    document.getElementById("modal-pdf-id").style.opacity = '0'
    document.getElementById("modal-pdf-id").style.visibility = 'hidden'
    document.getElementById("pdf-view-id").src = ""
}