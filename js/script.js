//GENERAZIONE 5 NUMERI RANDOM
const numberList = document.getElementById('numbers-list')
const numArray = []

function numRandom(min,max){
    return Math.floor(Math.random() * max) + min;
}

for (let i = 0; numArray.length < 5; i++){
    
    let numRandomico = numRandom( 1, 50 )
    console.log(`il tuo numero random è ${numRandomico}`)

    if( !(numArray.includes( numRandomico ))){
        numArray.push( numRandomico )
    }

    console.log(numArray)
}
//STAMPO ELEMNTI ARRAY(NUMERI) NELLA LISTA IN PAGINA
for(let i=0; i < numArray.length; i++){
    numberList.innerHTML += `<li>${ numArray[i]}</li>`
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




