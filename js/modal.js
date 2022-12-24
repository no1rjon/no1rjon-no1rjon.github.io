"use strict";
 
const menuModalWindow = document.getElementById("modal-menu");

const menuOpenButton = document.getElementById("open-modal");

const menuCloseButton = document.getElementById("close");

const menuOpen = () => {
   menuModalWindow.classList.add("modal-menu_open");
   document.body.classList.add("modal-open");
};

const menuClose = () => {
   menuModalWindow.classList.remove("modal-menu_open");
   document.body.classList.remove("modal-open");
};


menuOpenButton.addEventListener('click', menuOpen);
menuCloseButton.addEventListener('click', menuClose);
