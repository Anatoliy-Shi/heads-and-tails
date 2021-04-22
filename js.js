'use strict'
const starting = document.getElementById('letgo')
const img = document.getElementById('img')

starting.addEventListener('click', () => setTimeout( 
function eagleAndTails () {
    let randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber > 50) {
        img.innerHTML = `<img src="tails.png" style="height: 300px; width: 300px;"></img>`
        // Решка
        
    }
    else {
        img.innerHTML = `<img src="eagle.png" style="height: 300px; width: 300px;"></img>`
        //Орел
    }
}, 0))
