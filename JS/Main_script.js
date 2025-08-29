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
const carousel = document.getElementById('highlight-carousel');
carousel.addEventListener('touchstart', () => carousel.classList.add('pause'));
carousel.addEventListener('touchend', () => carousel.classList.remove('pause'));
// console.log(document.querySelector('.navbar'));


// // scroll content change 
const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) { // Adjust the scroll threshold as needed
            navbar.classList.add('fixed');
            
            
        } else {
            navbar.classList.remove('fixed');
        }
    });

document.addEventListener('DOMContentLoaded', () => {
    const logoImage = document.querySelector('.logo img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            logoImage.style.width = '40%';
        } else {
            logoImage.style.width = ''; // Reset to default width
        }
    });
});

// Developer corousel
const items = [
      {img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop', title:'Asha Thapa', text:'Computer Science Student, class of 2026'},
      {img:'https://images.unsplash.com/photo-1545996124-1c4b0b8a5b6a?w=600&q=80&auto=format&fit=crop', title:'Rinchen Dorje', text:'Sports Captain & Alumni'},
      {img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80&auto=format&fit=crop', title:'Meera Goswami', text:'Head of Cultural Activities'},
      {img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&auto=format&fit=crop', title:'Sushil Kumar', text:'Physics Department'},
      {img:'https://images.unsplash.com/photo-1531123414780-fca2bd3c6d0c?w=600&q=80&auto=format&fit=crop', title:'Anita Rai', text:'NSS Coordinator'},
      {img:'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80&auto=format&fit=crop', title:'Deepak Sharma', text:'Developer & Designer'}
    ];

    const track = document.getElementById('track');

    function createCard(d){
      const card = document.createElement('article'); card.className='card';
      card.innerHTML = `
        <div class="avatar"><img alt="${d.title}" src="${d.img}" loading="lazy"></div>
        <div class="meta">
          <div class="title">${d.title}</div>
          <div class="text">${d.text}</div>
        </div>`;
      return card;
    }

    function populate(){
      track.innerHTML='';
      const frag = document.createDocumentFragment();
      items.forEach(i => frag.appendChild(createCard(i)));
      track.appendChild(frag.cloneNode(true));
      track.appendChild(frag.cloneNode(true));
    }

    populate();

    function recompute(){
      const children = Array.from(track.children);
      const half = Math.floor(children.length/2);
      let w=0;
      for(let i=0;i<half;i++) w += children[i].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);
      track.style.setProperty('--track-shift', w + 'px');
      const base = 20;
      const duration = Math.max(10, Math.round((w/1000)*base));
      track.style.animationDuration = duration + 's';
    }

    window.addEventListener('load', ()=>{ recompute(); });
    window.addEventListener('resize', ()=>{ recompute(); });