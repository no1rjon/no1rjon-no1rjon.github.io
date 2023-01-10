"use strict";
 
const imageZoomModalWindow = document.getElementById("imageZoom-modal");

const imageZoomOpenButton = document.getElementById("imageZoom-open");

const imageZoomCloseArea = document.getElementById("imageZoom-close");



const imageZoomOpen = () => {
   imageZoomModalWindow.classList.add("block");
   imageZoomModalWindow.classList.remove("hidden");
};

const imageZoomClose = () => {
   imageZoomModalWindow.classList.add("hidden");
   imageZoomModalWindow.classList.remove("block");
};


imageZoomOpenButton.addEventListener('click', imageZoomOpen);
imageZoomCloseArea.addEventListener('click', imageZoomClose);

