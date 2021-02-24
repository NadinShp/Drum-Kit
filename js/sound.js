function playingSound(e) {
    const audioRef = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyRef = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audioRef) return;
    audioRef.currentTime = 0;
    audioRef.play();
    keyRef.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keysRef = document.querySelectorAll('.key');
keysRef.forEach(keyRef => keyRef.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playingSound);