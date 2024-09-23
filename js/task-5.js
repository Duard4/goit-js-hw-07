"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color ");
const color_sample = document.querySelector(".color ");

const changeBg = () => {
    const color = getRandomHexColor();
    color_sample.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
}

btn.addEventListener("click", changeBg)