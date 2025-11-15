// Carousel functionality (without dots)
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const slides = track ? Array.from(track.querySelectorAll('.article-card')) : [];
const totalSlides = slides.length;
const GAP = 30; // keep in sync with CSS gap

function updateCarousel() {
  if (!track || slides.length === 0) return;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const offset = -currentSlide * (slideWidth + GAP);
  track.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  if (totalSlides === 0) return;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  if (totalSlides === 0) return;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Button event listeners
const leftBtn = document.querySelector('.carousel-btn-left');
const rightBtn = document.querySelector('.carousel-btn-right');
if (leftBtn) leftBtn.addEventListener('click', prevSlide);
if (rightBtn) rightBtn.addEventListener('click', nextSlide);

// Initial layout
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
