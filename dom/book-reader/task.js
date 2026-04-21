let fontSizes = Array.from(document.querySelectorAll(".font-size"));

fontSizes.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        item.classList.add("font-size_active");
        let book = document.getElementById("book");
        let fontSize = item.dataset.size;
        if (fontSize === "small") {
            book.classList.add("book_fs-small");
            book.classList.remove("book_fs-big");
        }else if (fontSize === "big") {
            book.classList.add("book_fs-big");
            book.classList.remove("book_fs-small");
        } else {
            book.classList.remove("book_fs-small", "book_fs-big");
        }
    })
})