function chooseOption(item) {
    let resultado = ""
    if(item == 1){
        resultado = '✊';
    } else if(item == 2){
        resultado = '✋';
    }else if (item == 3){
        resultado = '✌'; 
    } else {
        resultado = '❔';
    }
    return resultado;    
}

function numRamdon(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let player = 0;
let pc = numRamdon(1,3);

player = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera');

alert("You: " + chooseOption(player));
alert("PC: " + chooseOption(pc));

if(pc == player){
    console.log('TIE ➖');
} else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)){
    console.log('GANASTE ✅');
} else {
    console.log('PERDISTE ❌');
}




