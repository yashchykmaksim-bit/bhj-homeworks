let form = document.querySelector(".tasks__control");
form.addEventListener('submit', event => {
    event.preventDefault(); // Отменяет стандартное поведение (обновление страницы)
});

let taskList = document.querySelector(".tasks__list");
let field = document.getElementById("task__input");// нашли поле ввода
field.addEventListener("keydown", event => {// повесили на него слушателя
    if (event.code === "Enter") {//если нажата клавиша ввод то ....
        let text = field.value;//получили доступ именно к значению поля ввода
        let container = document.createElement('div');//создали контейнер
        container.classList.add("task");//добавили ему класс 
        let div = document.createElement('div');//создали второй див
        div.classList.add("task__title")//добавили ему класс
        let link = document.createElement('a');// создали ссылку 
        link.addEventListener("click", () => {
            if (link.classList.contains("task__remove"))
                container.remove();
        })
        link.classList.add("task__remove");//добавили ей класс
        link.innerHTML = "&times;";//добавили ссылке элемент - крестик
        container.append(div);
        container.append(link);//поместили ссылку в контейнер
        taskList.append(container);
        div.textContent = text;
        form.reset();
    }
})


