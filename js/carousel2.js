const slidesData = document.querySelectorAll('.slideHref');

const slides = Array.from(document.querySelectorAll('.article-images'));
const slideTotal = slides.length;
const caption = Array.from(document.querySelectorAll('.art-info'));

const articleImages = document.getElementsByClassName('article-images');
const carouselOverlay = document.getElementById('carousel-overlay');

const figureCurrent = document.getElementById('figure-current');
const carouselFigcaptionCurrent = document.getElementById('carousel-caption');

const currentSlide = document.getElementById('current-slide');
const nextSlide = document.getElementById('next-slide');
const prevSlide = document.getElementById('prev-slide');

const nextButton = document.getElementById('carousel-button-next');
const prevButton = document.getElementById('carousel-button-prev');
const closeButton = document.getElementById('carousel-button-close');
// let targetImage = "";
let targetIndex = 0;
let captionCurrent = '';

// ***** Set event listeners on all <a> images. ***** //
for (let i = 0; i < articleImages.length; i++) {
  articleImages[i].addEventListener('click', e => {
    e.preventDefault();
    let targetImage = e.target.closest('a');

    //  Do nothing on click outside of targets.
    if (!targetImage) return;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";

    carouselOverlay.style.display = "grid";

    // Finds the index of the image that gets clicked.
    targetIndex = slides.findIndex(index => index === targetImage);
    // Get 'current' figcaption texts
    captionCurrent = caption[targetIndex].innerHTML;
    // Inserts 'current' figcaption text
    carouselFigcaptionCurrent.innerHTML = captionCurrent;

    // Inserts 'current' img src
    currentSlide.src = slideHrefs[targetIndex];
    if (targetIndex === 0) {
      prevButton.style = 'visibility:hidden';
      nextSlide.src = slideHrefs[targetIndex + 1];
    } else if (targetIndex === slideTotal - 1) {
      nextButton.style = 'visibility:hidden';
      prevSlide.src = slideHrefs[targetIndex - 1];
    } else {
      // Inserts 'next' img src
      nextSlide.src = slideHrefs[targetIndex + 1];
      // Inserts 'prev' img source
      prevSlide.src = slideHrefs[targetIndex - 1];
    }
  });
}

// ***** Get relative href's for images *****
let slideHrefs = [];
for (let i = 0; i < slidesData.length; i++) {
  slideHrefs.push(slidesData[i].getAttribute('href'));
}

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);
closeButton.addEventListener('click', close);

function moveToNextSlide() {

  figureCurrent.setAttribute(
    "style", "opacity: 0; transform: translateX(100vw)"
  );

  prevButton.style = 'visibility:visible';
  // Inserts 'current' img src
  targetIndex++;
  currentSlide.src = slideHrefs[targetIndex];
  // Inserts 'prev' img source
  prevSlide.src = slideHrefs[targetIndex - 1];
  if (targetIndex === slideTotal - 1) {
    nextButton.style = 'visibility:hidden';
  } else {
    // Inserts 'next' img src
    nextSlide.src = slideHrefs[targetIndex + 1];
  }
  carouselFigcaptionCurrent.innerHTML = caption[targetIndex].innerHTML;
  currentSlide.onload = function () {
    setTimeout(fadeIn, 200);
  };
}

function moveToPrevSlide() {

  figureCurrent.setAttribute(
    "style", "opacity: 0; transform: translateX(-100vw)"
  );

  nextButton.style = 'visibility:visible';
  targetIndex--;
  currentSlide.src = slideHrefs[targetIndex];
  nextSlide.src = slideHrefs[targetIndex + 1];
  if (targetIndex < 1) {
    prevButton.style = 'visibility:hidden';
  } else {
    prevSlide.src = slideHrefs[targetIndex - 1];
  }

  carouselFigcaptionCurrent.innerHTML = caption[targetIndex].innerHTML;
  currentSlide.onload = function () {
    setTimeout(fadeIn, 200);
  };
}

function fadeIn() {
  figureCurrent.setAttribute(
    "style", "opacity: 1;transform: translateX(0); transition: opacity .2s, transform .2s"
  );
}

function close() {
  carouselOverlay.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
  document.body.style.height = "auto"; // ADD THIS LINE
  prevButton.style = 'visibility:visible';
  nextButton.style = 'visibility:visible';
  //  ***** Reset img src on close, otherwise old image temporarily shown
  currentSlide.src = "#";
  prevSlide.src = "#";
  nextSlide.src = "#";
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    close();
  }
});