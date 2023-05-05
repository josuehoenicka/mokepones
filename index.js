let player = 0;
let pc = 2;

function chooseItem() {
    player = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera');
    if(player == 1){
        alert('Elegiste piedra');
    } else if(player == 2){
        alert('Elegiste papel');
    }else if (player == 3){
        alert('Elegiste tijera');
    } else {
        alert('No elegiste nada');
    }
}

chooseItem();
