const gebrInfoLocalStorage = localStorage.getItem('userDetails')
const gebrInfoWeergave = document.getElementById('gebruikerGegevens');

gebrInfoWeergave.innerHTML = 'Welkom ' + gebrInfoLocalStorage + '!';