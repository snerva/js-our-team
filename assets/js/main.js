/*creare un arraydi oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede*/

const domEl = document.querySelector('.info_strings');
const imgDomEl = document.querySelector('.images');
const cardsDomEl = document.querySelector('.row');
//creo una variabile const teamMembers con un array di oggetti = [{name:, role:, image: "img/..."}]
const teamMembers = [
    {
        name: ' Wayne Barnett ',
        role: ' Founder & CEO ',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: ' Angela Caroll ',
        role: ' Chief Editor ',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: ' Walter Gordon ',
        role: ' Office Manager ',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: ' Angela Lopez ',
        role: ' Social Media Manager ',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: ' Scott Estrada ',
        role: ' Developer ',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: ' Barbara Ramos ',
        role: ' Graphic Designer ',
        image: 'barbara-ramos-graphic-designer.jpg'
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
        domEl.insertAdjacentHTML('beforeend', (key + ':' + ' ' + value +'<br>')) 
    }  


    //BONUS 1 trasformo la stringa foto in un immagine effettiva e mostro in DOM
    let imageMarkup = `<img src="./assets/img/${thisTeam.image}" alt="">`;
    imgDomEl.insertAdjacentHTML('beforeend', imageMarkup)


    //BONUS 2 realizzare delle card con i membri del team
    const memberCardMarkup = `
    <div class="card col text-bg-dark">
         <img class="card_img" src="./assets/img/${thisTeam.image}" alt="">
         <div class="info_card text-center p-3">
             <h3>${thisTeam.name}</h3>
             <p>${thisTeam.role}</p>
         </div>
    </div>
    `
    cardsDomEl.insertAdjacentHTML('beforeend', memberCardMarkup);
}

