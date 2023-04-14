let position = 0;
        const slidesToShow = 4;
        const slidesToScroll = 1;
        const container = document.querySelector('.slider-container');
        const track = document.querySelector('.slider-track');
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');
        const items = document.querySelectorAll('.slider-item');
        const itemCount = items.length;
        const itemWidth = container.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;

        items.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;
        });

        btnNext.addEventListener('click', () => {
            const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
            position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

            setPosition();
            checkBtns();
        });

        btnPrev.addEventListener('click', () => {
            const itemLeft = Math.abs(position) / itemWidth;
            position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

            setPosition();
            checkBtns();
        });

        const setPosition = () => {
            track.style.transform = `translateX(${position}px`;
        }

        const checkBtns = () => {
            btnPrev.disebled = position === 0;
            btnNext.disebled = position <= -(itemCount - slidesToShow) * itemWidth;
        }

        checkBtns();

        
        

        const slider = document.querySelector(".slider-images");
const images = document.querySelectorAll(".scroll-item");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let counter = 1;
const size = images[0].clientWidth;

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