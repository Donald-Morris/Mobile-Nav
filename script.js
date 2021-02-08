const images = document.querySelectorAll('.content');
const icons = document.querySelectorAll('nav ul li');

icons.forEach((icon, idx) =>
  icon.addEventListener('click', () => {
    hideAllImages();
    hideAllIcons();
    icon.classList.add('active');
    images[idx].classList.add('show');
  })
);

function hideAllImages() {
  images.forEach(image => image.classList.remove('show'));
}

function hideAllIcons() {
  icons.forEach(icon => icon.classList.remove('active'));
}
