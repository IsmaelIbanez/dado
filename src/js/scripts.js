let dinero = parseInt(document.querySelector('.dinero').textContent);
let anterior = 1;
let historial = [];

document.querySelector(".roll").addEventListener("click", tirar);


function tirar() {
    document.querySelector('.mensaje').textContent = " ";

    let apuesta = parseInt(document.querySelector('.apuesta').value);

    if (dinero > 0 && dinero >= apuesta && typeof(apuesta) == "number" ) {
        seJuega(apuesta);       
    } 
    else {
        if (dinero < apuesta && dinero > 0){
            document.querySelector('.dinero').textContent = dinero + " No tienes tanto dinero";
        }
        else{
            document.querySelector('.dado').src = 'img/dice1.gif';
            document.querySelector('.mensaje').innerHTML = "<br>¡Se te acabó el dinero! Vuelve a intentarlo";
            dinero = 10;
            document.querySelector('.dinero').textContent = dinero;
        }
    }
}

function seJuega(apuesta) { 
    
    let random = Math.ceil(Math.random() * 6);

    addToHistorial(random)
    
    if (random <= anterior) {
        dinero -= apuesta;
        document.querySelector('.dinero').textContent = dinero;
    } else {
        dinero += apuesta
        document.querySelector('.dinero').textContent = dinero;
    }

    anterior = random;

    document.querySelector('.dado').src = 'img/dice' + String(random) + '.gif'
}

function addToHistorial(random){
    historial.push(random);
    document.querySelector('.historial').textContent = historial;
}