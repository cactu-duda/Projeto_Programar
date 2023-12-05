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

function abrirPastaflavia() {
    document.getElementById('portfolioflavia').style.display = 'block';
    portfolios()
}

function abrirPastamaira() {
    document.getElementById('portfoliomaira').style.display = 'block';
    portfolios()
}

function abrirPastamaria() {
    document.getElementById('portfoliomaria').style.display = 'block';
    portfolios()
}

function fecharPastaflavia() {
    document.getElementById('portfolioflavia').style.display = 'none';
}

function fecharPastamaira() {
    document.getElementById('portfoliomaira').style.display = 'none';
}

function fecharPastamaria() {
    document.getElementById('portfoliomaria').style.display = 'none';
}

updateClock();
setInterval(updateClock, 60000);

document.getElementById('perfil').addEventListener('click', abrirPopup);
document.addEventListener('click', fecharPopup);

