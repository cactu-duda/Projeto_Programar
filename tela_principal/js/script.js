const popupButton = document.getElementById('perfil');
const popupContainer = document.getElementById('popup');

popupButton.addEventListener('click', function () {
    popupContainer.style.display = 'block';
    popupContainer.style.opacity = '1';
    popupContainer.style.transform = 'translateY(0)';

    // Add a click event listener to the document
    document.addEventListener('click', closePopupOnClick);
});

function closePopupOnClick(event) {
    // Check if the clicked element is outside the popup
    if (!popupContainer.contains(event.target)) {
        popupContainer.style.opacity = '0';
        popupContainer.style.transform = 'translateY(100%)';
        // Remove the click event listener to avoid conflicts
        document.removeEventListener('click', closePopupOnClick);
        // Hide the popup after the transition
        setTimeout(() => {
            popupContainer.style.display = 'none';
        }, 300);
    }
}