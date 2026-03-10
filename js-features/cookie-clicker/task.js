
let image = document.getElementById("cookie");
let click = document.getElementById("clicker__counter");
let size = 100;
function changeSizes() {
    if (cookie.width === size) {
       cookie.width = 200;
    } else {
        cookie.width = 100;
    }
    clicker__counter.textContent++;
};
image.onclick = changeSizes;
