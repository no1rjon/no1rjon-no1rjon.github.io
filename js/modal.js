"use strict";
 
const menuModalWindow = document.getElementById("modal-menu");

const menuOpenButton = document.getElementById("open-menu");

const menuCloseButton = document.getElementById("close-menu");

const collbackModalWindow = document.getElementById("modal-collback")

const collbackOpenButtons = document.querySelectorAll(".open-collback");

const collbackCloseButton = document.getElementById("close-collback")


const menuOpen = () => {
   menuModalWindow.classList.add("modal-menu_open");
   document.body.classList.add("modal-open");
};

const menuClose = () => {
   menuModalWindow.classList.remove("modal-menu_open");
   document.body.classList.remove("modal-open");
};

const collbackOpen = () => {
   menuClose();
   collbackModalWindow.classList.add("modal-collback_open");
   document.body.classList.add("overflow-hidden");
}

const collbackClose = () => {
   collbackModalWindow.classList.remove("modal-collback_open");
   document.body.classList.remove("overflow-hidden");
}


menuOpenButton.addEventListener('click', menuOpen);
menuCloseButton.addEventListener('click', menuClose);

collbackOpenButtons.forEach((element) => {
   element.addEventListener('click', collbackOpen)
});
collbackCloseButton.addEventListener('click', collbackClose);
