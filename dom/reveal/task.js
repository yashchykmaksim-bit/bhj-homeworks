
let reveal = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveal.forEach((item) => {
        let { top, bottom } = item.getBoundingClientRect();
        console.log(top, bottom)
        if (bottom < window.innerHeight) {
            item.classList.add("reveal_active");
        }
    })
}
)

