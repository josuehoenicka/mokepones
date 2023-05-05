let player = 0;
let pc = 0;
let  = document.querySelector('p')

function chooseItem() {
    player = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera');
    // PLAYER OPTIONS
    if(player == 1){
        console.log('Tú: ✊');
    } else if(player == 2){
        console.log('Tú: ✋');
    }else if (player == 3){
        console.log('Tú: ✌');
    } else {
        console.log('No elegiste nada');
    }
    // PC OPTIONS
    pc = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera');
    if(pc == 1){
        console.log('PC: ✊');
    } else if(pc == 2){
        console.log('PC: ✋');
    }else if (pc == 3){
        console.log('PC: ✌');
    } else {
        console.log('No elegiste nada');
    }
    // FIGHT
    if(pc == player){
        console.log('EMPATE ➖')
    } else if(player == 1 && pc == 3){
        console.log('GANASTE ✅')
    } else if(player == 2 && pc == 1){
        console.log('GANASTE ✅')
    } else if(player == 3 && pc == 2){
        console.log('GANASTE ✅')
    } else {
        console.log('PERDISTE ❌')
    }
}

chooseItem();
