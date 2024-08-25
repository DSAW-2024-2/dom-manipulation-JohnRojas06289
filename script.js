const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;
  updateCarousel();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;
  updateCarousel();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].querySelector('img').src;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}

function updateCarousel() {
  setBgToBody();
  setActiveSlide();
  updateArrows();
}

function updateArrows() {
  if (activeSlide === 0) {
    leftBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
  }

  if (activeSlide === slides.length - 1) {
    rightBtn.disabled = true;
  } else {
    rightBtn.disabled = false;
  }
}

// Inicializar el estado de las flechas y la imagen de fondo
updateCarousel();
