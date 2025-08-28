const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".indicators");
let current = 0;
let slideInterval;

{
  /* // Create indicators dynamically */
}
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("indicator");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    current = i;
    showSlide(current);
    resetInterval();
  });
  indicatorsContainer.appendChild(dot);
});
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    indicators[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      indicators[i].classList.add("active");
      const text = slide.querySelector(".text-overlay");
      text.style.animation = "none";
      void text.offsetWidth; // restart animation trick
      text.style.animation = "popUp 1s forwards";
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startAutoPlay();
}

startAutoPlay();

// JavaScript to dynamically update the date
const dateElement = document.querySelectorAll('#current-date');
const today = new Date(); 
const options = { year: "numeric", month: "long", day: "numeric" };
dateElement.forEach(element => {
    element.textContent = today.toLocaleDateString(undefined, options);
});

// Highlight crousel js
const carousel = document.getElementById('carousel');
carousel.addEventListener('touchstart', () => carousel.classList.add('pause'));
carousel.addEventListener('touchend', () => carousel.classList.remove('pause'));

