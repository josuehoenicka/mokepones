// function chooseOption(item) {
//     let resultado = ""
//     if(item == 1){
//         resultado = '🔥';
//     } else if(item == 2){
//         resultado = '💧';
//     }else if (item == 3){
//         resultado = '🧊'; 
//     } else {
//         resultado = '❔';
//     }
//     return resultado;    
// }

// function numRamdon(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let player = 0;
// let pc = 0;
// let wins = 0;
// let draws = 0;;
// let loses = 0;

// while( wins < 3 && loses < 3){
//     pc = numRamdon(1,3);
//     player = prompt('Choose a number: \n 1 = 🔥 \n 2 = 💧 \n 3 = 🧊');
//     if(pc == player){
//         alert("You: " + chooseOption(player) + "\nPC: " + chooseOption(pc) + " \nTIE ➖");
//         draws++;
//     } else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)){
//         alert("You: " + chooseOption(player) + "\nPC: " + chooseOption(pc) + " \nGANASTE 🎉");
//         wins++;
//     } else {
//         alert("You: " + chooseOption(player) + "\nPC: " + chooseOption(pc) + " \nPERDISTE ❌");
//         loses++;
//     }
// }

// alert("GAME OVER" + "\nWins: " + wins + "\nLoses: " + loses + "\nDraws: " + draws);
