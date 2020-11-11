document.querySelector(".submit").addEventListener("click", checkboxCheck);

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

*/

function checkboxCheck() {

    if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {
        console.log('All checkboxes are checked');
    } else {
        console.log('Some checkboxes are not checked');
    }

}