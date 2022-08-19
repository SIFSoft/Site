const url = 'https://sifsoft-api.herokuapp.com/documents/?format=json'

const carregando = document.querySelector('.carregando');
const documentsContainer = document.querySelector('.document-container')


async function getAllDocuments(){
    const response = await fetch(url)

    const data = await response.json();

    data.map((documento) =>{
        
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const datalancamento = document.createElement("p")
        const tipo = document.createElement("p")
        const link = document.createElement("a")


        title.innerText = documento.title
        datalancamento.innerText = documento.date
        tipo.innerText = documento.type
        link.innerText = "Visualizar"
        link.setAttribute("href", `${documento.link}`)

        div.appendChild(title)
        div.appendChild(datalancamento)
        div.appendChild(tipo)
        div.appendChild(link)

        documentsContainer.appendChild(div)
    });
}

getAllDocuments();