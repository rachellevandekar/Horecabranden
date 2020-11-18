

/*var checked = document.querySelectorAll("input[type='checkbox']");


function checkboxCheck() {

    if (checked.length === 0) {
        console.log('niks aangevinkt');
    } else {
        console.log(checked.length + 'checkboxes aangevinkt');
    }

}




function checkboxCheck() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    for(let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes.length + 'checkboxes aangevinkt');
    }
}



function checkboxCheck() {

    if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {
        console.log('All checkboxes are checked');
    } else {
        console.log('Some checkboxes are not checked');
    }

}

*/

document.querySelector(".submit").addEventListener("click", checkboxNames);

document.querySelector(".volgende-gebruiker").addEventListener("click", volgendeGebruiker, test);

document.querySelector(".vorige-gebruiker").addEventListener("click", vorigeGebruiker);

const listItem1 = document.getElementById("ListItem1");
const listItem2 = document.getElementById("ListItem2");
const listItem3 = document.getElementById("ListItem3");
const listItem4 = document.getElementById("ListItem4");

const BuddylistItem1 = document.getElementById("BuddyListItem1");
const BuddylistItem2 = document.getElementById("BuddyListItem2");
const BuddylistItem3 = document.getElementById("BuddyListItem3");
const BuddylistItem4 = document.getElementById("BuddyListItem4");

const buddy = document.getElementById("buddy");

const gebruikerElement = document.getElementById("gebruiker");
const checkListElement = document.getElementById("checklist-items");
const buddyElement = document.getElementById("buddy");
const buddyCheckListElement = document.getElementById("buddy-checklist");

const elementsList = document.querySelectorAll( ".list-item");
const elementsArray = [...elementsList];

function test(){
    console.log(elementsArray);
}

/*let gebruikerChecklists = [{
    gebruiker, buddy: "Kok",
    listItem1, BuddylistItem1: "Gas uit",
    listItem2, BuddylistItem2: "Afzuigkap uit",
    listItem3, BuddylistItem3: "Afzuigkap schoonmaken",
    listItem4, BuddylistItem4: "Vloer boenen",
},
    {
        gebruiker, buddy: "Afwasser",
        listItem1, BuddylistItem1: "Spoelmachine uit",
        listItem2, BuddylistItem2: "Stroomschakelaar uit",
        listItem3, BuddylistItem3: "Rookmelder checken",
        listItem4, BuddylistItem4: "Vloer boenen",
    },
    {
        gebruiker, buddy: "Bediende",
        listItem1: "Gasten de zaak uit",
        listItem2, BuddylistItem2: "Stopcontacten check",
        listItem3, BuddylistItem3: "Stofzuigen in hoekjes",
        listItem4, BuddylistItem4: "Vloer boenen",
    },
    {
        gebruiker, buddy: "Barman",
        listItem1, BuddylistItem1: "Kassa uit",
        listItem2, BuddylistItem2: "Vluchtroute checken",
        listItem3, BuddylistItem3: "Sloten checken",
        listItem4, BuddylistItem4: "Vloer boenen",
    }
];
 */

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

//let buddyNummer= -1;


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

/*function renderChecklist() {

    let q = gebruikerChecklists[gebruikerNummer];


    gebruiker.innerHTML = "<p>" + q.gebruiker + "</p>";
    listItem1.innerHTML = q.listItem1;
    listItem2.innerHTML = q.listItem2;
    listItem3.innerHTML = q.listItem3;
    listItem4.innerHTML = q.listItem4;

}

*/
function stringify (x) {
    console.log(Object.prototype.toString.call(x));
}
function renderChecklist() {

    let counter = 0;
    /*let gebruikerItem = gebruikerChecklists.gebruiker;
    let listItems = gebruikerChecklists.gebruiker;
    //gebruiker weergeven
    gebruikerElement.innerText = gebruiker;

     */
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

//console.log(gebruikerChecklists.find(x => x.id === '4').text);

function checkboxCheck(){
    let inputElems = document.getElementsByTagName("input"),
        count = 0;
    for (let i=0; i<inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
            count++;
            alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
            alert(document.getElementById());
        }
    }}

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
            var label = document.querySelector(`label[for=${inputElems[i].id}]`);
            console.log(label.textContent);

        }

    }

}


function checkboxNames3() {
    let checkbox = document.querySelector('input[type ="checkbox"]:checked'),
        count = 0;
    for (let i = 0; i < inputElems.length; i++) {
        if (checkbox[i].type === "checkbox" && checkbox[i].checked === false) {
            count++;

            console.log(elementsArray[i]);

        }

    }

}


let result = document.querySelector('h1');
function checkboxNames2() {
    let checkbox = document.querySelector('input[type ="checkbox"]:checked');

    result.innerText = checkbox.parentNode.textContent;

}

