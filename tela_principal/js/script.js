function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').innerText = timeString;
  }
  updateClock();
  setInterval(updateClock, 1000);

  var popup = document.getElementById('popup');
  var perfil = document.getElementById('perfil');
  
  perfil.addEventListener('click', function() {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
      perfil.focus();
    } else {
      popup.style.display = 'none';
    }
  });
  
  document.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });