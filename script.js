// Auto-scroll function - Men's scrolls right, Women's scrolls left
function autoScrollRight(carouselId) {
  const carousel = document.getElementById(carouselId);
  const scrollStep = 280;

  setInterval(() => {
    if (carousel) {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const currentScroll = carousel.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }
  }, 3000);
}

function autoScrollLeft(carouselId) {
  const carousel = document.getElementById(carouselId);
  const scrollStep = 280;

  // Start from the right side
  setTimeout(() => {
    carousel.scrollLeft = carousel.scrollWidth;
  }, 100);

  setInterval(() => {
    if (carousel) {
      const currentScroll = carousel.scrollLeft;

      if (currentScroll <= 10) {
        carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      }
    }
  }, 3000);
}

// Manual scroll function
function scrollCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const scrollStep = 280;
  carousel.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
}

// Initialize auto-scroll - Men's right, Women's left
autoScrollRight('menCarousel');
autoScrollLeft('womenCarousel');
