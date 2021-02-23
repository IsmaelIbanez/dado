let dinero = parseInt(document.querySelector('dinero').textContent);
let anterior = 1;
document.querySelector("button").addEventListener("click", tirar);


function tirar() {
    document.querySelector('.mensaje').innerHTML = " ";
    if (dinero > 0) {

        let apuesta = parseInt(document.querySelector('.apuesta').value);

        if (dinero >= apuesta) {

            let ran = Math.ceil(Math.random() * 6);
            document.querySelector('.dinero').innerHTML = dinero;

            if (ran <= anterior) {
                dinero -= apuesta;
                document.querySelector('.dinero').innerHTML = dinero;
            } else {
                dinero += apuesta
                document.querySelector('.dinero').innerHTML = dinero;
            }

            anterior = ran;

            switch (ran) {
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
        } else {
            document.querySelector('.dinero').innerHTML = dinero + " No tienes tanto dinero";
        }

    } else {
        document.querySelector('.dado').src = 'img/dice1.gif';
        document.querySelector('.mensaje').innerHTML = "<br>¡Se te acabó el dinero! Vuelve a intentarlo";
        dinero = 10;
        document.querySelector('.dinero').innerHTML = dinero;
    }
}