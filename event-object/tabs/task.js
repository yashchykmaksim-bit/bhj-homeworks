
let tabsContainers = document.querySelectorAll(".tabs");

tabsContainers.forEach((container) => {

    let tabs = container.querySelectorAll(".tab");
    let contents = container.querySelectorAll(".tab__content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
  
            container.querySelector(".tab_active")?.classList.remove("tab_active");
            container.querySelector(".tab__content_active")?.classList.remove("tab__content_active");

            tab.classList.add("tab_active");
            contents[index].classList.add("tab__content_active");
        });
    });
});