const contactBtn = document.getElementById('contactBtn');
const contactText = document.getElementById('contactText');

if (contactBtn && contactText) {
    contactBtn.addEventListener('click', () => {
        contactText.classList.toggle('visible');
    });
}