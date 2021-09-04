"use strict";

const block01 = document.querySelector(".section-02__block-01"),
    block02 = document.querySelector(".section-02__block-02"),
    block03 = document.querySelector(".section-02__block-03"),
    block04 = document.querySelector(".section-02__block-04"),
    block05 = document.querySelector(".section-02__block-05"),
    block = document.querySelector(".section-02__block");

const switches = document.querySelector(".switch"),
    switch01 = document.querySelector(".switch-01"),
    switch02 = document.querySelector(".switch-02"),
    switch03 = document.querySelector(".switch-03"),
    switch04 = document.querySelector(".switch-04"),
    switch05 = document.querySelector(".switch-05");

const rowLeft = document.querySelector(".section-02__row-left"),
    rowRight = document.querySelector(".section-02__row-right");

let i = 0;

rowLeft.addEventListener("click", moveLeft);
rowRight.addEventListener("click", moveRight);
rowRight.addEventListener("click", checkIterator);
rowLeft.addEventListener("click", checkIterator)

function checkIterator() {
    if (i <= 0) {
        i = 0;
        rowLeft.classList.remove("section-02__row-left-enabled");
        rowLeft.classList.add("section-02__row-left-disabled");
    } else {
        rowLeft.classList.add("section-02__row-left-enabled");
        rowLeft.classList.remove("section-02__row-left-disabled");
    }
    if (i >= 4) {
        i = 4;
        rowRight.classList.remove("section-02__row-right-enabled");
        rowRight.classList.add("section-02__row-right-disabled");
    } else {
        rowRight.classList.add("section-02__row-right-enabled");
        rowRight.classList.remove("section-02__row-right-disabled");
    }
    switch (i) {
        case 0:
            block.classList.add("none");
            block02.classList.add("none");
            block01.classList.remove("none");
            switch02.classList.remove("switch-hover")
            switch01.classList.add("switch-hover")
            break;
        case 1:
            block01.classList.add("none");
            block03.classList.add("none");
            block02.classList.remove("none");
            switch01.classList.remove("switch-hover")
            switch03.classList.remove("switch-hover")
            switch02.classList.add("switch-hover")
            break
        case 2:
            block02.classList.add("none");
            block04.classList.add("none");
            block03.classList.remove("none");
            switch02.classList.remove("switch-hover")
            switch04.classList.remove("switch-hover")
            switch03.classList.add("switch-hover")
            break
        case 3:
            block03.classList.add("none");
            block05.classList.add("none");
            block04.classList.remove("none");
            switch03.classList.remove("switch-hover")
            switch05.classList.remove("switch-hover")
            switch04.classList.add("switch-hover")
            break
        case 4:
            block04.classList.add("none");
            block05.classList.remove("none");
            switch04.classList.remove("switch-hover")
            switch05.classList.add("switch-hover");
            break
    }
}

function moveLeft() {
    i--;
    console.log(i);
}

function moveRight() {
    i++;
    console.log(i);
}


