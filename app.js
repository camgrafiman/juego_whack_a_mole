window.addEventListener('DOMContentLoaded', () => {
    const recuadro = document.querySelectorAll('.recuadro');
    const mole = document.querySelectorAll('.mole');
    const segundosRestantes = document.querySelector('#segundosRestantes');
    const mensaje = document.querySelector('#mensaje');
    let puntuacion = document.querySelector('#puntuacion');
    let posicionGolpe = null;

    let resultado = 0;
    let tiempoActual = segundosRestantes.textContent

    /* Seleccionar aleatoriamente un recuadro del grid */

    function recuadroRandom() {
        /* quitar la clase mole de todos */
        recuadro.forEach(clase => {
            clase.classList.remove('mole')
        })
        // Ahora poner una posicion aleatoria, multiplicando por el número de recuadros que tenga en el grid.
        let posicionRandom = recuadro[Math.floor(Math.random() * 9)]
        posicionRandom.classList.add('mole')

        /* Asignar el id de la posicionRandom a la posicionGolpe para usar luego */
        
        posicionGolpe = posicionRandom.id
    }

    /* Poner el listener a cada recuadro para saber si el jugador ha atinado o fallado */

    recuadro.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id === posicionGolpe) {
                resultado = resultado + 1;
                puntuacion.textContent = resultado;
            }
            else if (resultado < 0 ) {
                alert('GAME OVER')
                
            }
            else {
                resultado = resultado - 1;
                puntuacion.textContent = resultado;
                mensaje.textContent = "Has fallado jajaja!"
            }
        })
    })

    /* Función que mueve la mole cada x tiempo */
    
    function moverMole() {
        let tiempoId = null;
        // Cada 1 segundo llama la función recuadroRandom para que se mueva la mole.
        tiempoId = setInterval(recuadroRandom, 1000)
    }
    
    moverMole()

    /* Cuenta atrás si llega a 0 tenemos un GAME OVER */
    function cuentaAtras() {
        tiempoActual--;
        segundosRestantes.textContent = tiempoActual

        if (tiempoActual === 0) {
            clearInterval(tiempoId)
            alert('GAME OVER! el tiempo se ha agotado. Su puntuación final es ' + resultado + ' puntos.')
        }
    }

    let tiempoId = setInterval(cuentaAtras, 1000)




})