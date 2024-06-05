const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  updateSlides();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }, 3000);