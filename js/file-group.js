"use strict";

const uploadedFile = document.getElementById("file");

const uploadedFileBox = document.getElementById("place-lable")

const defineNameFile = () => {
    const uploadedFileAmount = uploadedFile.files.length;
    
    if(uploadedFileAmount == 0) {
        uploadedFileBox.classList.remove("file-loaded");
        document.getElementById("lable-text").innerHTML = "Прикрепить документ"
        return
    } else if(uploadedFileAmount == 1) {
        document.getElementById("lable-text").innerHTML = uploadedFile.value
    } else {
        let uploadedFileString = "Файлов выбрано ";
        uploadedFileString += uploadedFileAmount
        document.getElementById("lable-text").innerHTML = uploadedFileString
    }
    uploadedFileBox.classList.add("file-loaded");
}


uploadedFile.addEventListener('change', defineNameFile)
