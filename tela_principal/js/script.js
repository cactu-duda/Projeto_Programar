function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').innerText = timeString;
}

function abrirPopup() {
    var popup = document.getElementById('popup');
    var perfil = document.getElementById('perfil');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
        perfil.focus();
    } else {
        popup.style.display = 'none';
    }
}

function fecharPopup(event) {
    var popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}


updateClock();
setInterval(updateClock, 60000);

document.getElementById('perfil').addEventListener('click', abrirPopup);
document.addEventListener('click', fecharPopup);
