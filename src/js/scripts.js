let dinero = parseInt(document.getElementById('dinero').textContent);
let anterior = 1;

function tirar() {
    document.getElementById('mensaje').innerHTML = " ";
    if (dinero > 0) {

        let apuesta = parseInt(document.getElementById('apuesta').value);

        if (dinero >= apuesta) {

            let ran = Math.ceil(Math.random() * 6);
            document.getElementById('dinero').innerHTML = dinero;

            if (ran <= anterior) {
                dinero -= apuesta;
                document.getElementById('dinero').innerHTML = dinero;
            } else {
                dinero += apuesta
                document.getElementById('dinero').innerHTML = dinero;
            }

            anterior = ran;

            switch (ran) {
                case 1:
                    document.getElementById('dado').src = 'img/dice1.gif';
                    break;

                case 2:
                    document.getElementById('dado').src = 'img/dice2.gif';
                    break;

                case 3:
                    document.getElementById('dado').src = 'img/dice3.gif';
                    break;

                case 4:
                    document.getElementById('dado').src = 'img/dice4.gif';
                    break;

                case 5:
                    document.getElementById('dado').src = 'img/dice5.gif';
                    break;

                case 6:
                    document.getElementById('dado').src = 'img/dice6.gif';
                    break;
            }
        } else {
            document.getElementById('dinero').innerHTML = dinero + " No tienes tanto dinero";
        }

    } else {
        document.getElementById('dado').src = 'img/dice1.gif';
        document.getElementById('mensaje').innerHTML = "<br>¡Se te acabó el dinero! Vuelve a intentarlo";
        dinero = 10;
        document.getElementById('dinero').innerHTML = dinero;
    }
}