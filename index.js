function runGame() {
    let btnRottwaimer = document.querySelector('#btn-rottwaimer');
    btnRottwaimer.addEventListener('click', selectRottwaimer)
}

function selectRottwaimer() {
    let hoenix = document.querySelector('#hoenix');   
    let chaina = document.querySelector('#chaina');
    let kaison = document.querySelector('#kaison');
    let playerName = document.querySelector('#rottwaimer-player');
    if(hoenix.checked == true){
        playerName.innerHTML = 'Hoenix'
    } else if (chaina.checked == true) {
        playerName.innerHTML = 'Chaina'
    } else if (kaison.checked == true) {
        playerName.innerHTML = 'Kaison'
    } else {
        alert('You must select a rottwaimer');
    }
    selectEnemy()
}

function selectEnemy() {
    let enemyRandom = numRamdon(1,3);
    let playerComputer = document.querySelector('#rottwaimer-computer');
    if(enemyRandom == 1) {
        playerComputer.innerHTML = 'Hoenix';
    } else if (enemyRandom == 2) {
        playerComputer.innerHTML = 'Chaina';
    } else {
        playerComputer.innerHTML = 'Kaison';
    }
}

function numRamdon(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', runGame)