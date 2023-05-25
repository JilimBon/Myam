const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderItemWidth = sliderItems[0].clientWidth;
const trackWidth = sliderItemWidth * sliderItems.length;
let trackPositionX = 0;

// Clone first and last slides for infinite sliding
sliderTrack.appendChild(sliderItems[0].cloneNode(true));
sliderTrack.insertBefore(sliderItems[sliderItems.length - 1].cloneNode(true), sliderItems[0]);

// Update track width and position
sliderTrack.style.width = `${trackWidth}px`;
sliderTrack.style.transform = `translateX(-${sliderItemWidth}px)`;
trackPositionX -= sliderItemWidth;

// Handle next button click
document.querySelector('.btn-next').addEventListener('click', function() {
trackPositionX -= sliderItemWidth;
sliderTrack.style.transition = 'transform 0.5s ease';
sliderTrack.style.transform = `translateX(${trackPositionX}px)`;
});

// Handle prev button click
document.querySelector('.btn-prev').addEventListener('click', function() {
trackPositionX += sliderItemWidth;
sliderTrack.style.transition = 'transform 0.5s ease';
sliderTrack.style.transform = `translateX(${trackPositionX}px)`;
});

// Handle transition end to reset position
sliderTrack.addEventListener('transitionend', function() {
let currentSlideIndex = Math.abs(trackPositionX / sliderItemWidth);

if (currentSlideIndex === sliderItems.length) {
trackPositionX = -sliderItemWidth;
sliderTrack.style.transition = 'none';
sliderTrack.style.transform = `translateX(${trackPositionX}px)`;
} else if (currentSlideIndex === 0) {
trackPositionX = -sliderItemWidth * (sliderItems.length - 2);
sliderTrack.style.transition = 'none';
sliderTrack.style.transform = `translateX(${trackPositionX}px)`;
}
});
        
        

        const slider = document.querySelector(".slider-images");
const images = document.querySelectorAll(".scroll-item");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let counter = 1;
const size=350;
// const size = images[0].clientWidth;

slider.style.transform = `translateX(-${size}px)`;

nextBtn.addEventListener("click", () => {
if (counter >= images.length - 2) return;
slider.style.transition = "transform 0.5s ease-in-out";
counter++;
slider.style.transform = `translateX(-${size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
if (counter <= 0) return;
slider.style.transition = "transform 0.5s ease-in-out";
counter--;
slider.style.transform = `translateX(-${size * counter}px)`;
});

slider.addEventListener("transitionend", () => {
if (images[counter].alt === "lastClone") {
slider.style.transition = "none";
counter = images.length - 3;
slider.style.transform = `translateX(-${size * counter}px)`;
}
if (images[counter].alt === "firstClone") {
slider.style.transition = "none";
counter = images.length - counter - 2;
slider.style.transform = `translateX(-${size * counter}px)`;
}
});

// Создаем копии первого и последнего изображения
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);
firstClone.alt = "firstClone";
lastClone.alt = "lastClone";
slider.appendChild(firstClone);
slider.insertBefore(lastClone, images[0]);  
    var menuToggle = document.querySelector('.menuToggle');
  var navigation = document.querySelector('.navigation');
  var body = document.querySelector('body');

menuToggle.addEventListener('click',() => {
  

  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');

  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  if (body.style.overflow === 'hidden') {
    // Если скролл заблокирован, то мы должны его разблокировать
    body.style.overflow = 'auto';
    body.style.paddingRight = '';
  } else {
    // Иначе мы блокируем прокрутку
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollBarWidth}px`;
  }
})


const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

const setActiveSlide = () => {
slides.forEach((slide) => {
slide.classList.remove("active");
});
slides[index].classList.add("active");
};

const scrollToSlide = () => {
const activeSlide = document.querySelector(".active");
activeSlide.scrollIntoView({
behavior: "smooth",
block: "nearest",
inline: "start",
});
};

prev.addEventListener("click", () => {
index--;
if (index < 0) {
index = slides.length - 1;
}
setActiveSlide();
scrollToSlide();
});

next.addEventListener("click", () => {
index++;
if (index > slides.length - 1) {
index = 0;
}
setActiveSlide();
scrollToSlide();
});

setActiveSlide();
scrollToSlide();
