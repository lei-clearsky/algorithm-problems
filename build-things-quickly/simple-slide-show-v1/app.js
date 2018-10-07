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
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide fade-in';
    moveSlide();
  }

  function prevSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide - 1) < 0 ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].className = 'slide fade-in';
    moveSlide();
  }

  function moveSlide() {
    currentSlidePosition = currentSlide * 600;
    slidesContainer.style.left = '-' + currentSlidePosition + 'px';
    slidesContainer.className = "slides";
  }

  function autoPlay() {
    slideInterval = setInterval(nextSlide, 2000);
  }

  function stopAutoPlay() {
    clearInterval(slideInterval);
  }

  return {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    autoPlay: autoPlay,
    stopAutoPlay: stopAutoPlay,
    init: init
  }
})();