"use strict";
 
let modal = document.getElementById("nav-modal");

let btn = document.getElementById("open-modal");

let svg = document.getElementById("close");

let body = document.getElementsByName('body');

btn.onclick = function() {
   modal.style.display = "block";
   document.body.style.overflow = "hidden";
   document.body.style.position = "fixed";
}

svg.onclick = function() {
   modal.style.display = "none";
   document.body.style.overflow = "auto";
   document.body.style.position = "static";
}

