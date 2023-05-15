function runGame() {
    let btnRottwaimer = document.querySelector('#btn-rottwaimer');
    btnRottwaimer.addEventListener('click', selectRottwaimer)
}

function selectRottwaimer() {
    let hoenix = document.querySelector('#hoenix');   
    let chaina = document.querySelector('#chaina');
    let kaison = document.querySelector('#kaison');
    if(hoenix.checked == true){
        alert('You selected Hoenix');
    } else if (chaina.checked == true) {
        alert('You selected Chaina');
    } else if (kaison.checked == true) {
        alert('You selected Kaison');
    } else {
        alert('You must select a rottwaimer');
    }
}

window.addEventListener('load', runGame)