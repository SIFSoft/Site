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

// pega os dados da api, para inserir os cards.
async function getAllMembros() {
    const response = await fetch("https://sifsoft-api.herokuapp.com/auditCommittee/?format=json");
    const data = await response.json();

    data.map((documento) => {
        let cardHtml = `<div class='card'><div class='social-membro'><a href='${documento.linkRedeSocial}'>${icons[documento.iconTypeRedeSocial]}</a></div><img class='foto-membro' src='${documento.image_perfil}' alt=''><span class='card-text nome-membro'>${documento.nome}</span><span class='card-text cargo-membro'>${cargo[documento.cargo]}</span></div>`
        document.getElementById("cards-conselho").innerHTML += cardHtml
    });
    
    const response1 = await fetch("https://sifsoft-api.herokuapp.com/directors/?format=json");
    const data1 = await response1.json();
    data1.map((documento) => {
        let cardHtml = `<div class='card'><div class='social-membro'><a href='${documento.linkRedeSocial}'>${icons[documento.iconTypeRedeSocial]}</a></div><img class='foto-membro' src='${documento.image_perfil}' alt=''><span class='card-text nome-membro'>${documento.nome}</span><span class='card-text cargo-membro'>${cargo[documento.diretoria]}</span></div>`
        document.getElementById("cards-cont").innerHTML += cardHtml
    });
}

getAllMembros();
