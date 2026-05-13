let clue = document.querySelectorAll(".has-tooltip");// нашли все ссылки
clue.forEach(elem => {// перебираем их циклом 
    elem.addEventListener("click", (e) => {// вешаем слушателя на текущую/нажатую ссылку, при событии клик 
        e.preventDefault();//отменяем поведение браузера по умолчанию 
        let surpraze = elem.querySelector(".tooltip_active");
        if (surpraze) {
            surpraze.remove();
        } else {
            let div = document.createElement('div');//создаём новый элемент div 
            let title = elem.getAttribute("title");//находим подсказки
            div.textContent = elem.getAttribute("title");
            div.classList.add("tooltip_active", "tooltip")//добавляем подсказке класс      
            elem.append(div);  //добавляем его к ссылке
            let coords = elem.getBoundingClientRect();// получаем координаты ссылки(нажатой)
            div.style.left = coords.left + "px";//задаём координаты для отображения подсказки
            div.style.top = coords.bottom + "px";//задаём координаты для отображения подсказки
        }
    })
})