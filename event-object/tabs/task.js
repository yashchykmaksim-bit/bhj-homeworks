let tabs = document.querySelectorAll(".tab");
let arr = [...tabs];
 let tabContents = document.querySelectorAll(".tab__content");
        let array = [...tabContents];
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function showTab() {
        document.querySelector(".tab_active").classList.remove("tab_active");
        arr[i].classList.add("tab_active");
        document.querySelector(".tab__content_active").classList.remove("tab__content_active");
        array[i].classList.add("tab__content_active");
    }
    )
}