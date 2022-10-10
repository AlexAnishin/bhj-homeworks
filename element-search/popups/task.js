let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

let modalSuccess = document.getElementById("modal_success");
closeButtons = document.getElementsByClassName("modal__close")
for (var i = 0; i < closeButtons.length; i++) {
    var button = closeButtons[i];
    button.onclick = (el) => {
        modal = el.target.parentElement.parentElement
        modal.classList.remove("modal_active");
        if (el.target.classList.contains('show-success')) {
            modalSuccess.classList.add("modal_active");
        }
    }
}