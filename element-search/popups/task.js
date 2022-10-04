let modalActive = document.getElementById("modal_main");
let elementShow = document.getElementById("modal_success");
modalActive.classList.add("modal_active");



// let elementClose1 = document.getElementsByClassName("modal__close")[0];
// elementClose.onclick = () => modalActive.classList.remove("modal_active");


let showSuccess = document.getElementById("modal_success");
let elementRed = document.getElementsByClassName("show-success")[0];
elementRed.onclick = () => showSuccess.classList.add("modal_active");

let elementClose = document.getElementsByClassName("modal__close")[2];
console.log(elementClose);
elementClose.onclick = () => showSuccess.classList.remove("modal_active");

// let elementClose1 = document.getElementsByClassName("modal__close")[0];
// elementClose.onclick = () => modalActive.classList.remove("modal_active");