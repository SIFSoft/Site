// Cargos dos mebros da empresa, por tag.
let cargo = {
    'Pres': 'Presidente',
    'Adm': 'Diretor(a) Administrativo',
    'Proj': 'Diretor(a) de Projetos',
    'Fin': 'Diretor(a) Financeiro',
    'Market': 'Diretor(a) de Marketing',
    'RH': 'Diretor(a) de Gestão de Pessoa',
    'MembEfet': 'Membro Efetivo',
}

// Coloca o icone a partir das tags da api.
let icons = {
    'insta': '<i class="bi bi-instagram"></i>',
    'face': '<i class="bi bi-facebook"></i>',
    'linkedln': '<i class="bi bi-linkedin"></i>',
    'github': '<i class="bi bi-github"></i>',
    'twitter': '<i class="bi bi-twitter"></i>'
}

function sortIndex(data, campo, ordem){
    let ordemIndex = [];
    for (const element of ordem){
        for (let j = 0; j < data.length; j++){
            if(data[j][campo] == element){
                ordemIndex.push(j);
            }
        }
    }
    return ordemIndex;
}
// pega os dados da api, para inserir os cards.
async function getAllMembros() {

    const response1 = await fetch("https://sifsoft-api.herokuapp.com/directors/?format=json");
    const dataDiretores = await response1.json();
    let indexDiretores = sortIndex(dataDiretores, 'diretoria', Object.keys(cargo));

    document.getElementById("loading-id-diretoria").style.visibility = 'visibility'
    indexDiretores.map((i) => {
        document.getElementById("loading-id-diretoria").style.visibility = 'hidden'
        document.getElementById("loading-id-diretoria").style.position = 'absolute'
        let cardHtml = `<div class='card'><div class='social-membro'><a href='${dataDiretores[i].linkRedeSocial}' target='_blank'>${icons[dataDiretores[i].iconTypeRedeSocial]}</a></div><img class='foto-membro' src='${dataDiretores[i].image_perfil}' alt=''><span class='card-text nome-membro'>${dataDiretores[i].nome}</span><span class='card-text cargo-membro'>${cargo[dataDiretores[i].diretoria]}</span><span class='ano-membro'>${dataDiretores[i].ano}</span></div>`
        document.getElementById("cards-cont").innerHTML += cardHtml
    });

    const response = await fetch("https://sifsoft-api.herokuapp.com/auditCommittee/?format=json");
    const dataConselho = await response.json();
    document.getElementById("loading-id-conselho").style.visibility = 'visibility'
    let indexConselho = sortIndex(dataConselho, 'cargo', Object.keys(cargo));
    indexConselho.map((i) => {
        document.getElementById("loading-id-conselho").style.visibility = 'hidden'
        document.getElementById("loading-id-conselho").style.position = 'absolute'
        let cardHtml = `<div class='card'><div class='social-membro'><a href='${dataConselho[i].linkRedeSocial}' target='_blank'>${icons[dataConselho[i].iconTypeRedeSocial]}</a></div><img class='foto-membro' src='${dataConselho[i].image_perfil}' alt=''><span class='card-text nome-membro'>${dataConselho[i].nome}</span><span class='card-text cargo-membro'>${cargo[dataConselho[i].cargo]}</span><span class='card-text ano-membro'>${dataConselho[i].ano}</span></div>`
        document.getElementById("cards-conselho").innerHTML += cardHtml
    });
    
    
}

getAllMembros();
