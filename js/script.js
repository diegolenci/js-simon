//GENERAZIONE 5 NUMERI RANDOM
const numberList = document.getElementById('numbers-list')


for (let i = 0; i < 5; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(Math.random() * 100) + 1; j++) {
        count++;
    }
    console.log(count);
    numberList.innerHTML = count
}




//TIMER DI 30 SECONDI
let counter = 30
const countdown = document.getElementById('countdown')
const form = document.getElementById('answers-form')
const instructions = document.getElementById('instructions')

const inserisciNumeri = setInterval(gioca, 1000)
function gioca(){
    
    //ALLO SCADERE: COMPARE IL FORM, CAMBIANO I TESTI
    if( counter === 0){
        clearInterval(inserisciNumeri)
        form.classList.remove('d-none')
        countdown.innerHTML = "Inserisci i numeri"
        instructions.classList.add('d-none')
        numberList.innerHTML = "Vai!"


    } else{
        countdown.innerHTML = counter--
    }

    return counter

}


const bottone = document.getElementsByClassName('btn')




