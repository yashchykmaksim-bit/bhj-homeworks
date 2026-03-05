function changeText() {
    let timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        clearInterval(id);
        alert("Вы победили в конкурсе!");
    }
}
let id = setInterval(changeText, 1000);

