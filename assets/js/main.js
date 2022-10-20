/*creare un arraydi oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede*/

const domEl = document.querySelector('.info_strings');
//creo una variabile const teamMembers con un array di oggetti = [{name:, role:, image: "img/..."}]
const teamMembers = [
    {
        Name: ' Wayne Barnett ',
        Role: ' Founder & CEO ',
        Image: ' wayne-barnett-founder-ceo.jpg '
    },
    {
        Name: ' Angela Caroll ',
        Role: ' Chief Editor ',
        Image: ' angela-caroll-chief-editor.jpg '
    },
    {
        Name: ' Walter Gordon ',
        Role: ' Office Manager ',
        Image: ' walter-gordon-office-manager.jpg '
    },
    {
        Name: ' Angela Lopez ',
        Role: ' Social Media Manager ',
        Image: ' angela-lopez-social-media-manager.jpg '
    },
    {
        Name: ' Scott Estrada ',
        Role: ' Developer ',
        Image: ' scott-estrada-developer.jpg '
    },
    {
        Name: ' Barbara Ramos ',
        Role: ' Graphic Designer ',
        Image: ' barbara-ramos-graphic-designer.jpg '
    }
]

//ciclo con for in teamMembers per stampare le info richieste for (let thisTeam per le teamMembers[i]) { console.log(thisTeam);}

for(let i=0; i< teamMembers.length; i++){
    let thisTeam = teamMembers[i];
    console.log(thisTeam);
    
    //creo un elemento in dom per stampare le informazioni richieste e le stampo come stringa inserendo spazi vuoti giá nelle stringhe Name: ' Wayne Barnett ', punteggiatura e a capo domEl.insertAdjacentHTML('beforeend', (key + ':' + value +'<br>'))
    for (const key in thisTeam) {
        let value = thisTeam[key];
        console.log(key + ':' + value);
        domEl.insertAdjacentHTML('beforeend', (''+ key + ':' + value +'<br>')) 
    }

}


