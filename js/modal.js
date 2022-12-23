"use strict";
 
const modal = document.getElementById("nav-modal");

const btn = document.getElementById("open-modal");

const svg = document.getElementById("close");

const body = document.body;

const openModal = () => {
   modal.classList.add("nav-modal_open");
   body.classList.add("modal-open");
};

const closeModal = () => {
   modal.classList.remove("nav-modal_open");
   body.classList.remove("modal-open");
};


btn.addEventListener('click', openModal);
svg.addEventListener('click', closeModal);


// function openModal() {
//    modal.classList.add("nav-modal_open");
//    body.classList.add("modal-open");
// };

// function closeModal() {
//    modal.classList.remove("nav-modal_open");
//    body.classList.remove("modal-open");
// };
