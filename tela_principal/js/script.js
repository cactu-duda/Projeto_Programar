function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').innerText = timeString;
}

function abrirPopup() {
    var perfil = document.getElementById('perfil');
    var popup = document.getElementById('popup');
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

function abrirPasta() {
    document.getElementById('portfolio').style.display = 'block';
}

function fecharPasta() {
    document.getElementById('portfolio').style.display = 'none';
}


updateClock();
setInterval(updateClock, 60000);

document.getElementById('perfil').addEventListener('click', abrirPopup);
document.addEventListener('click', fecharPopup);
