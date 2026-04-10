let dropDowns = document.querySelectorAll(".dropdown");
let array = [...dropDowns];
array.forEach((item) => {
    let dropDown = item.querySelector(".dropdown__value");
    let dropList = item.querySelector(".dropdown__list");
    let dropLink = item.querySelectorAll(".dropdown__link");
    let arr = [...dropLink];
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", function (event) {
            dropList.classList.remove("dropdown__list_active");
            event.preventDefault();
            dropDown.textContent = event.currentTarget.textContent;
        }
        )
    }
    dropDown.addEventListener("click", function folding() {
        dropList.classList.toggle("dropdown__list_active");
    }
    )
});




