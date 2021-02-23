let dinero = parseInt(document.querySelector('.dinero').textContent);
let anterior = 1;
let apuesta = parseInt(document.querySelector('.apuesta').value);
let historial = [];

document.querySelector(".roll").addEventListener("click", tirar);


function tirar() {

    document.querySelector('.mensaje').textContent = " ";

    if (dinero > 0 && dinero >= apuesta && typeof(apuesta) == Number ) {
        console.log("suuu");
        seJuega();       
    } 
    else {
        if (dinero < apuesta){
            document.querySelector('.dinero').textContent = dinero + " No tienes tanto dinero";
        }else{
            document.querySelector('.dado').src = 'img/dice1.gif';
            document.querySelector('.mensaje').innerHTML = "<br>¡Se te acabó el dinero! Vuelve a intentarlo";
            dinero = 10;
            document.querySelector('.dinero').textContent = dinero;
        }
    }
}

function seJuega() { 
    console.log("suuuka");
    let random = Math.ceil(Math.random() * 6);
    historial.push(random);
    document.querySelector('.historial').textContent = historial;
    document.querySelector('.dinero').textContent = dinero;

    if (random <= anterior) {
        dinero -= apuesta;
        document.querySelector('.dinero').textContent = dinero;
    } else {
        dinero += apuesta
        document.querySelector('.dinero').textContent = dinero;
    }

    anterior = random;

    switch (random) {
        case 1:
            document.querySelector('.dado').src = 'img/dice1.gif';
            break;

        case 2:
            document.querySelector('.dado').src = 'img/dice2.gif';
            break;

        case 3:
            document.querySelector('.dado').src = 'img/dice3.gif';
            break;

        case 4:
            document.querySelector('.dado').src = 'img/dice4.gif';
            break;

        case 5:
            document.querySelector('.dado').src = 'img/dice5.gif';
            break;

        case 6:
            document.querySelector('.dado').src = 'img/dice6.gif';
            break;
    }
}