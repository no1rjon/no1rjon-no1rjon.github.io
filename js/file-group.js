"use strict";

const uploadedFile = document.getElementById("file");

const divLabelFile = document.getElementById("place-lable")

const fileLoaded = () => {
    const amountTransferredFiles = uploadedFile.files.length;
    
    if(amountTransferredFiles == 0) {
        divLabelFile.classList.remove("file-loaded");
        document.getElementById("lable-text").innerHTML = "Прикрепить документ"
        return
    } else if(amountTransferredFiles == 1) {
        document.getElementById("lable-text").innerHTML = uploadedFile.value
    } else {
        let stringFilesLoaded = "Файлов выбрано ";
        stringFilesLoaded += amountTransferredFiles
        document.getElementById("lable-text").innerHTML = stringFilesLoaded
    }
    divLabelFile.classList.add("file-loaded");
}


uploadedFile.addEventListener('change', fileLoaded)
