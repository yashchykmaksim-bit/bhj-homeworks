
// const attributes = product.getAttribute("dada-id");
// let product = document.querySelectorAll(".product");//нашли все элементы с товарами 
let allPluses = document.querySelectorAll(".product__quantity-control_inc");//нашли все элементы (кнопка +)
allPluses.forEach(elem => {//перебираем циклом
    elem.addEventListener("click", () => {//вешаем слушателя на нажатый элемент при событии клик
        let parent = elem.closest(".product__quantity-controls");//находим родительский элемент
        let quantityValue = parent.querySelector(".product__quantity-value").textContent++;//находим и увеличиваем у родительсктго элемента значение количества
    })
})
let allMinuses = document.querySelectorAll(".product__quantity-control_dec");//нашли все элементы (кнопка -)
allMinuses.forEach(elem => {//перебираем циклом
    elem.addEventListener("click", () => {//вешаем слушателя на нажатый элемент при событии клик
        let parent = elem.closest(".product__quantity-controls");//находим родительский элемент
        let quantityValue = parent.querySelector(".product__quantity-value");//находим значение количесвта у родительского элемента 
        if (quantityValue.textContent > 1) {//проверяем условия(если значение больше 1 то уменьшаем значение на 1)
            quantityValue.textContent--;
        }
    })
})
let productAdds = document.querySelectorAll(".product__add");//находим все элементы конопок (добавить в корзину)
productAdds.forEach(e => {//перебираем их циклом
    e.addEventListener("click", () => {//подписываемся на событие клик 
        let parentProductTitle = e.closest(".product");//находим родительский элемент
        let ProductTitleValue = parentProductTitle.querySelector(".product__title").textContent;//находим и получаем значение наименования товара
        let container = document.createElement('div');//создаём див (контейнер)
        container.classList.add("cart__product");//добавлям ему класс       
        let value = parentProductTitle.getAttribute("data-id");//получаем значение атрибута родительского элемента 
        container.setAttribute("data-id", value);//присваиваем полученное значение атрибута 
        let image = document.createElement("img");//создаём тег img
        image.classList.add("cart__product-image");//добавляем ему класс
        image.setAttribute("alt", ProductTitleValue);//устанавливаем значение атрибута (вот тут не до конца понимаю) 
        let src = parentProductTitle.querySelector("img");//находим картинку у родительского элемента 
        let attributeSrc = src.getAttribute("src");//получаем значение атрибута
        container.append(image);//добавляем в контейнер картинку
        image.setAttribute("src", attributeSrc);//устанавливаем значение атрибута в новый элемент
        let cartProductCount = document.createElement('div');//создаём новый див
        cartProductCount.classList.add("cart__product-count");//добавляем ему класс
        let valueCart = parentProductTitle.querySelector(".product__quantity-value").textContent;
        container.append(cartProductCount);//добавляем в контейнер созданный див
        cartProductCount.append(valueCart);//добавляем его в контейнер 
        let cart = document.querySelector(".cart__products");//находим элемент - корзина
        let productInTheCart = cart.querySelectorAll(".cart__product");//находим все элементы (товар) в корзине
        if (productInTheCart.length === 0) {
            cart.append(container);//добавляем в корзину контейнер
        } else {
            let result = [...productInTheCart].filter(prod => {
                return prod.getAttribute("data-id") === value
            });
            if (result.length === 0) {
                cart.append(container);//добавляем в корзину контейнер
            } else {
                let valueInTheCart = result[0].querySelector(".cart__product-count");
                let summ = +valueCart + +valueInTheCart.textContent;
                valueInTheCart.textContent = summ;

            }

            // [...productInTheCart].forEach(elem => {//перебираем их циклом
            // let attribut = elem.getAttribute("data-id");//находим значение атирибута товара в корзине
            // let valueInTheCart = elem.querySelector(".cart__product-count");//находим значение количества товара в корзине
            // if (value === attribut) {//сравниваем атрибуты товаров в корзине и вне корзины
            // let summ = +valueCart + +valueInTheCart.textContent;//суммируем количества товаров в корзине и вне корзины
            // valueInTheCart.textContent = summ;//переприсваиваем значение количества товаров на сумму товаров в корзине и вне корзины
        }
    })
})