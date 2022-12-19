"use strict";
 
 let modal = document.getElementById("nav-modal");

 let btn = document.getElementById("open-modal");

 let svg = document.getElementById("close");

 btn.onclick = function() {
    modal.style.display = "block"
 }

 svg.onclick = function() {
    modal.style.display = "none";
 }

