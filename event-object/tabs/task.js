let tabs = Array.from(document.querySelectorAll(".tabs"));
tabs.forEach((item) => {
    let tabs = item.querySelectorAll(".tab");
    let tabContents = item.querySelectorAll(".tab__content");
    tabs.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            item.querySelector(".tab_active").classList.remove("tab_active");
            item.querySelector(".tab__content_active").classList.remove("tab__content_active");
            elem.classList.add("tab_active");
            tabContents[index].classList.add("tab__content_active");
        })
    })
});
