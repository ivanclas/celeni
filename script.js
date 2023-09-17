// Obtén el elemento de audio
const audio = document.getElementById('background-music');

// Función para pausar/reproducir la música al hacer clic en la pantalla
function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Agrega un event listener para el clic en cualquier parte de la pantalla
document.addEventListener('click', toggleAudio);
