const url = 'https://sifsoft-api.herokuapp.com/documents/?format=json'


async function getAllDocuments(){
    const response = await fetch(url)


    const data = await response.json();

    console.log(data);
}

getAllDocuments();