(function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll("#slider .slider__slide");
  const dotNavDots = [].slice.call(document.querySelectorAll('#sliderCircles .slide__circle'));
  let timeout;

  function init() {
    document.getElementById("sliderPrev").addEventListener('click', () => { prevSlide() });
    document.getElementById("sliderNext").addEventListener('click', () => { nextSlide() });
    document.getElementById("auto").addEventListener('click', () => { autoMove() });
    document.getElementById("stop").addEventListener('click', () => { stopMove() });
    initDotNav();
  }

  function prevSlide() {
    slides[currentIndex].classList.remove('slider__slide--active');
    currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    slides[currentIndex].classList.add('slider__slide--active');
    updateDots();
  }

  function nextSlide() {
    slides[currentIndex].classList.remove('slider__slide--active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('slider__slide--active');
    updateDots();
  }

  /* Auto Play Implementation */
  function autoMove() {
    timeout = setInterval(() => { nextSlide() }, 2000);
  }

  function stopMove() {
    clearInterval(timeout);
  }
  /* End Auto Play Implementation */

  /* Dot Navigation Implementation */
  function initDotNav() {
    const dotNav = document.getElementById('sliderCircles');

    dotNav.addEventListener('click', (event) => {
      const clickedSpot = event.target;
      if (clickedSpot.classList.contains('slide__circle')) {
        slides[currentIndex].classList.remove('slider__slide--active');
        currentIndex = dotNavDots.indexOf(clickedSpot);
        slides[currentIndex].classList.add('slider__slide--active');
        updateDots();
      }
    });
  }

  function updateDots() {
    const currentDot = document.getElementsByClassName('slide__circle--active')[0];
    currentDot.classList.remove('slide__circle--active');
    dotNavDots[currentIndex].classList.add('slide__circle--active');
  }
  /* End Dot Navigation Implementation */

  init();
})();
