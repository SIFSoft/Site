const url = 'https://sifsoft-api.herokuapp.com/documents/?format=json'

const carregando = document.querySelector('.carregando');
const documentsContainer = document.querySelector('.document-container')
tbody = document.querySelector('.tbody')

async function getAllDocuments(){
    const response = await fetch(url)

    const data = await response.json();

    data.map((documento) =>{
        
        let tr = tbody.insertRow();

        let td_nome = tr.insertCell();
        let td_data = tr.insertCell();
        let td_tipo = tr.insertCell();
        let td_link = tr.insertCell();

        td_nome.innerText = documento.title;
        td_data.innerText = documento.date;
        td_tipo.innerText = documento.type;
        
        td_nome.classList.add('center');
        td_data.classList.add('center');
        td_tipo.classList.add('center');
        td_link.classList.add('center');


        let criarAncora = document.createElement("a");
        criarAncora.setAttribute("href", `${documento.link}`)
        criarAncora.setAttribute("target", "_blank")

        let addVisualizar = document.createElement('img');
        addVisualizar.src = 'imgs/eye.svg';
        addVisualizar.setAttribute("a", `${documento.link}`);

        criarAncora.appendChild(addVisualizar);
        td_link.appendChild(criarAncora);
    });
}

getAllDocuments();