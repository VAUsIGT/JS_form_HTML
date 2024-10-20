// Открытие модального окна
document.getElementById("submitRequestBtn").onclick = function() {
    document.getElementById("modal").style.display = "block";
}

// Закрытие модального окна
document.querySelector(".close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// Закрытие окна при клике вне формы
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}
