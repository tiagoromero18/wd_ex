// Declarar la función
/*
function pocima(ingrediente1,ingrediente2){
    //instrucciones de la función
    return pocima
}

//invocar

pocima()
*/
//declaración
//exprecion
//flecha
//anonimo




function win(balance,wage){
    balance = balance+wage;
    return balance
}
function lose(balance,wage){
    balance = balance-wage;
    return balance
}
function throwCoin(){
    let headOrTails = "";
    let coin = Math.floor((Math.random()*2)+1);
    if (coin == 1){
        headOrTails = "heads";
    }  else {
        headOrTails = "tails";
    }
    return headOrTails;
}

function headTails(user,balance){
    let play = 0;
    while (play == 0){
        let wage = parseInt(prompt("¿Cuanto desea apostar?"));
        let choice = prompt("Choose Heads or Tails");
        let headOrTails = throwCoin();
        console.log(`Is... ${headOrTails}`);
        if (choice == headOrTails){
            balance = win(balance,wage)
            console.log(`${user} you have win, your new balance is  ${balance}`)
        } else {
            balance = lose(balance,wage)
            console.log(`${user} you have lose, your have ${balance}`)
        }
        if (balance == 0){
            play = 1
        }
        play = parseInt(prompt("if you wanna keep playing type 0 else type 1"))
    }
    return balance
}

let yourName = prompt("¿Cual es su nombre?")
let balance = parseInt(prompt("¿Cuanto plata desea meter al banco?"));
console.log(`${yourName} welcome to the game`);

let newBalance = headTails(yourName,balance);
console.log(`your new balance is ${newBalance}`);
