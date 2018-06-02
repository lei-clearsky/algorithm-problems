var mySlides = (function() {
  var slidesContainer = document.getElementById('slides');
  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var slideInterval;

  function init(w) {
    var slidesWidth = slides.length * w + 50;
    slidesContainer.style.width = slidesWidth + 'px';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    moveSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1) < 0 ? slides.length - 1 : currentSlide - 1;
    moveSlide();
  }

  function moveSlide() {
    currentSlidePosition = currentSlide * 600;
    slidesContainer.style.left = '-' + currentSlidePosition + 'px';
    slidesContainer.className = "slides";
  }

  function autoSlides() {
    slideInterval = setInterval(nextSlide, 2000);
  }

  function stopAutoSlides() {
    clearInterval(slideInterval);
  }

  return {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    autoSlides: autoSlides,
    stopAutoSlides: stopAutoSlides,
    init: init
  }
})();