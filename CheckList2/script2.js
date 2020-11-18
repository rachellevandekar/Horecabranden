document.querySelector(".submit").addEventListener("click", checkboxNames);

document.querySelector(".volgende-gebruiker").addEventListener("click", volgendeGebruiker);

document.querySelector(".vorige-gebruiker").addEventListener("click", vorigeGebruiker);





const gebruikerElement = document.getElementById("gebruiker");
const checkListElement = document.getElementById("checklist-items");
const buddyElement = document.getElementById("buddy");
const buddyCheckListElement = document.getElementById("buddy-checklist");

const elementsList = document.querySelectorAll( ".list-item");
const elementsArray = [...elementsList];




const gebruikerChecklists = [{
    gebruiker: 'Kok',
    listItems: [
        { text: 'Gas uit'},
        { text: 'Afzuigkap uit'},
        { text: 'Afzuigkap schoonmaken'},
        { text: 'Vloer boenen'}
    ]
}, {
    gebruiker: 'Afwasser',
    listItems: [
        { text: 'Spoelmachine uit'},
        { text: 'Stroomschakelaar uit'},
        { text: 'Rookmelder checken'},
        { text: 'Vloer boenen'}
    ]
}, {
    gebruiker: 'Bediende',
    listItems: [
        { text: 'Gasten de zaak uit'},
        { text: 'Stopcontacten check'},
        { text: 'Stofzuigen in hoekjes'},
        { text: 'Vloer boenen'}
    ]
}, {
    gebruiker: 'Barman',
    listItems: [
        { text: 'Kassa uit'},
        { text: 'Vluchtroute checken'},
        { text: 'Sloten checken'},
        { text: 'Vloer boenen'}
    ]
}]

let gebruikerNummer= -1;



function volgendeGebruiker() {
    if (gebruikerNummer >= 3){

    } else {
        gebruikerNummer++;
        renderChecklist(gebruiker)
    }

}

function vorigeGebruiker() {
    if (gebruikerNummer<= 0) {

    } else {
        --gebruikerNummer;
        renderChecklist();
    }


}



function renderChecklist() {


    let user = gebruikerChecklists[gebruikerNummer];

    //gebruiker weergeven
    gebruikerElement.innerText = user.gebruiker;

    let randomBuddyNumber = Math.floor(Math.random() * gebruikerChecklists.length) -1;
    if(randomBuddyNumber <0){
        randomBuddyNumber = 0;
    }
    let buddy = gebruikerChecklists.filter(gebruiker => gebruiker !== user)[randomBuddyNumber];

    buddyElement.innerText = buddy.gebruiker;



    checkListElement.innerHTML = renderHTMLChecklist(user);
    buddyCheckListElement.innerHTML = renderHTMLChecklist(buddy);


}

function renderHTMLChecklist(user) {
    let innerHTML = "";
    user.listItems.forEach((listItem, index) => {
        innerHTML += `<input type="checkbox" class="list-item" id=listItemID-${user.gebruiker}-${index}><label for=listItemID-${user.gebruiker}-${index}>${listItem.text}</label><br>`;
    });
    return innerHTML;
}





function checkboxNames() {
    let inputElems = document.getElementsByTagName('input');
        count = 0;
    console.log(inputElems.length);
    for (let i = 0; i < inputElems.length; i++)
    {
        if (inputElems[i].checked === false) {
            count++;
            //

            // label opzoeken op basis van "for"-attribute == id van checkbox (inputElems[i].id)
            let label = document.querySelector(`label[for=${inputElems[i].id}]`);
            console.log(label.textContent);

        }

    }

}


