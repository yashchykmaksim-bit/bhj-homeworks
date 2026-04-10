let dropDowns = document.querySelectorAll(".dropdown");// здесь мы находим наш контейнер на странице(их может быть нескольеко)
let array = [...dropDowns];// пробразовали в массив 
array.forEach((item) => {// циклом перебираем наши элементы 
    let dropDown = item.querySelector(".dropdown__value");// находим внутри контейнера (элемент JavaScript)
    let dropList = item.querySelector(".dropdown__list");// контейнер в котором лежит список ссылок
    let dropLink = item.querySelectorAll(".dropdown__link");// это наши ссылки в которых содеражаться названия языков
    let arr = [...dropLink];// так это псевдоколлекция преобразуем в массив 
    for (let i = 0; i < arr.length; i++) {// циклом вешаем слушателя на каждый элемент
        arr[i].addEventListener("click", function (event) {
            dropList.classList.remove("dropdown__list_active");// добавляем класс текущему элементу 
            event.preventDefault();// отменяем стандартное действие браузера, запрещаем переход по ссылкам 
            dropDown.textContent = event.currentTarget.textContent;// здесь мы меняем текст (не очень помню как это правильно описать)
        }
        )
    }
    dropDown.addEventListener("click", function folding() {// вешаем слушателя и при событии клик переключаем класс
        dropList.classList.toggle("dropdown__list_active");
    }
    )
});




