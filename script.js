function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    sound.currentTime = 0;
    sound.play();
    key.classList.add('pressed');
}

function clickSound(e) {
    const clicked = e.target;
    const clickedSound = clicked.getAttribute('data-key');
    const sound = document.querySelector(`audio[data-key="${clickedSound}"]`);

    sound.currentTime = 0;
    sound.play();
    clicked.classList.add('pressed');
}

function removeTransition(e) {
    this.classList.remove('pressed');
}


function toggleHint() {
    const keyboard =  document.querySelector('.keyboard');
    if(!keyboard.classList.contains('visible')) {
     keyboard.classList.add('visible');   
    } else {
     keyboard.classList.remove('visible');  
    }
    
}

function hideHint() {
    keyboard.classList.remove('visible');
}

window.addEventListener('keydown', playSound);

let sounds = document.querySelectorAll('.sound');
sounds.forEach(sound => sound.addEventListener('transitionend', removeTransition));
sounds.forEach(sound => sound.addEventListener('click', clickSound));
let hint = document.querySelector('.hint');
hint.addEventListener('click', toggleHint);   



