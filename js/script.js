
const divHtml = document.getElementById('random')

for (var i = 0; i < 5; i++) {
    var count = 0;
    for (var j = 0; j < Math.floor(Math.random() * 100) + 1; j++) {
        count++;
    }
    console.log(count);

}
divHtml.innerHTML = count




let counter = 30
const countdown = document.getElementById('countdown')
const form = document.getElementById('answers-form')

const inserisciNumeri = setInterval(gioca, 1000)
function gioca(){

    if( counter === 0){
        clearInterval(inserisciNumeri)
        form.innerHTML = form
        form.classList.remove('d-none')
        form.classList.add('d-block')
    } else{
        countdown.innerHTML = counter--
    }

    return counter

}

