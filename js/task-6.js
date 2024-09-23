"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

const inputNumber = controls.querySelector("input");

function createBoxes(amount) {
    let size = 30;
    let output = '';
    if( amount > 100 || amount < 0 ) return;

    for (let i = 0; i < amount; i++) {
        const color = getRandomHexColor(); 
        output += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
        size += 10; 
    }

    boxes.innerHTML = output;
    inputNumber.value = ''; 
}

function destroyBoxes() {
    boxes.innerHTML = ''; 
}
const creationHandler = () => createBoxes(Number(inputNumber.value))

createButton.addEventListener('click', creationHandler);
destroyButton.addEventListener('click', destroyBoxes);
