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

function abrirPasta() {
    var portfolio = document.getElementById('portfolio');
    var flavia = document.getElementById('flavia');
    if (portfolio.style.display === 'none' || portfolio.style.display === '') {
        portfolio.style.display = 'block';
        flavia.focus();
    } else {
        portfolio.style.display = 'none';
    }
}

function fecharPasta(event) {
    var portfolio = document.getElementById('portfolio');
    if (event.target === portfolio) {
        portfolio.style.display = 'none';
    }
}


updateClock();
setInterval(updateClock, 60000);

document.getElementById('perfil').addEventListener('click', abrirPopup);
document.addEventListener('click', fecharPopup);

document.getElementById('flavia').addEventListener('click', abrirPasta);
document.addEventListener('click', fecharPasta);
