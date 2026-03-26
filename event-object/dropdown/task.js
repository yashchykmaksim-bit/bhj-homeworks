let dropDown = document.querySelector(".dropdown__value");//в переменную сохранили значение найденного элемента 
let dropList = document.querySelector(".dropdown__list");//в переменную сохранили значение найденного элемента 
dropDown.addEventListener("click", function folding() {// вешаем слушателя, при событии клик вызываем функцию 
    dropList.classList.toggle("dropdown__list_active");// которая добавляет класс к нашему элементу
}
)
let dropLink = document.querySelectorAll(".dropdown__link");//в переменную сохранили значение найденного элемента 
let arr = [...dropLink];// преобразуем псевдомассив в массив 
for (let i = 0; i < arr.length; i++) {// цикл for используем , что-бы на все элементы повесить слушателя
    arr[i].addEventListener("click", function (event) {//здесь я не очень понимаю(вешаем слушателя при событии клик )
        dropList.classList.remove("dropdown__list_active");// удаляем класс
        event.preventDefault();// запрещаем переходить по ссылкам. 
        dropDown.textContent = event.currentTarget.innerText;// меняем значение у свойств объекта 
        console.log(event);// зачем-то выводим в консоль объект событие 
    }
    )
}