let secondi = document.getElementById("seconds");
let decimi = document.getElementById("tens");
let minuti = document.getElementById("minutes");
let start = document.getElementById("start");
let stop = document.getElementById("stop");  
let restart = document.getElementById("restart");
let bottoni = document.querySelectorAll('button');
let intervallo;
let spans = document.querySelectorAll('span');
let stopwatch = document.getElementById('stopwatch');
let testo = document.getElementById('testo');
let filippo = document.getElementById('filippo');

let tens = 0;   
let seconds = 0; 
let minutes = 0;


start.onclick = function() {
    clearInterval(intervallo);
    intervallo = setInterval(startTimer, 10);  
    stopwatch.classList.add('text-success');
    stopwatch.classList.remove('text-danger');
    testo.classList.add('text-success');
    testo.classList.remove('text-danger');
    filippo.classList.add('text-success');
    filippo.classList.remove('text-danger');
    filippo.classList.remove('text-black');


    spans.forEach(spans => {
        spans.classList.remove('text-danger');
        spans.classList.add('text-success');
        
    })
}

stop.onclick = function() {
    clearInterval(intervallo);
    spans.forEach(spans => {
        spans.classList.add('text-danger');
        stopwatch.classList.add('text-danger');
        testo.classList.add('text-danger');
        filippo.classList.add('text-danger');
    filippo.classList.remove('text-black');



        
    })
}

restart.onclick = function() {
    clearInterval(intervallo);
    tens = 0;
    seconds = 0;
    secondi.innerHTML = "00";
    decimi.innerHTML = "00";
    stopwatch.classList.remove('text-danger');
    stopwatch.classList.remove('text-success');
    testo.classList.remove('text-danger');
    testo.classList.remove('text-success');
    filippo.classList.remove('text-danger');
    filippo.classList.remove('text-success');
    filippo.classList.add('text-black');

    
    spans.forEach(spans => {
        spans.classList.remove('text-danger');
        spans.classList.remove('text-success');
        
        
    })
}


function startTimer() {
    tens++;
    
    if (tens <= 9) {
        decimi.innerHTML = "0" + tens;
    } else if (tens > 9 && tens <= 99) {
        decimi.innerHTML = tens;
    } 
    
    if (tens > 99) {
        seconds++;
        secondi.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        tens = 0;
        decimi.innerHTML = "00";
    }
    
    if (seconds >= 60) {
        minutes++;
        minuti.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        seconds = 0;
        secondi.innerHTML = "00";
    }
    
    if (minutes >= 60) {
        tens = 0;
        decimi.innerHTML = "00";
        seconds = 0;
        secondi.innerHTML = "00";
        minutes = 0;
        minuti.innerHTML = "00";
    }
}

bottoni.forEach(bottone => {
    bottone.addEventListener('mousedown', function() {
        bottone.classList.add('premuti');
    });
    bottone.addEventListener('mouseup', function() {
        bottone.classList.remove('premuti');
    });
    
    bottone.addEventListener('mouseenter', function() {
        bottone.classList.add('entrati');
    });
    bottone.addEventListener('mouseleave', function() {
        bottone.classList.remove('entrati');
    });
})
