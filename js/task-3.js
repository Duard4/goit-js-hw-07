"use strict";

const input = document.getElementById("name-input")
const output = document.getElementById("name-output")

const processInput = () => {
    const inputValue = input.value.trim()
    output.innerText = inputValue ? inputValue : 'Anonymous'
}

input.addEventListener("input", processInput)