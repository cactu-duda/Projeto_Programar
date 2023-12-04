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

function abrirPasta(pessoa) {
    document.getElementById('portfolio').style.display = 'block';
    portfolios(pessoa)
}

function fecharPasta() {
    document.getElementById('portfolio').style.display = 'none';
}

var dados_portfolios = {
    flavia : {
        nome : "Flavia Danza Vilela",
        descricao : "Olá sou designer",}
        ,
    maira : {
        nome : "Maira Alves",
        descricao : "Olá sou designer",}
        ,
    maria : {
        nome : "Maria Eduarda",
        descricao : "Olá sou designer",}  
}

function portfolios(pessoa) {
    document.getElementById('titulo').innerHTML = dados_portfolios[pessoa].nome;
    document.getElementById('descricao').innerHTML = dados_portfolios[pessoa].descricao;
}

updateClock();
setInterval(updateClock, 60000);

document.getElementById('perfil').addEventListener('click', abrirPopup);
document.addEventListener('click', fecharPopup);
