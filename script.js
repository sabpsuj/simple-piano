function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    sound.currentTime = 0;
    sound.play();
    key.classList.add('pressed');
    console.log(e.keyCode);
}

function removeTransition(e) {
    this.classList.remove('pressed');
}

window.addEventListener('keydown', playSound);
let sounds = document.querySelectorAll('.sound');
sounds.forEach(sound => sound.addEventListener('transitionend', removeTransition));
