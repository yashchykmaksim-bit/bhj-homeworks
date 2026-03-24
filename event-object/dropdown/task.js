let dropDown = document.querySelector(".dropdown__value");
let dropList = document.querySelector(".dropdown__list");
dropDown.addEventListener("click", function folding() {
    dropList.classList.toggle("dropdown__list_active");
}
)
let dropLink = document.querySelectorAll(".dropdown__link");
let arr = [...dropLink];
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function (event) {
        dropList.classList.remove("dropdown__list_active");
        event.preventDefault();
        dropDown.textContent = event.currentTarget.innerText;
        console.log(event);
    }
    )
}