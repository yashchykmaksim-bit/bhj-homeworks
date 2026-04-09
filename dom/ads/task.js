/*const activeItemClassName = 'rotator__case_active'

function run(container) {
  const items = [...container.querySelectorAll('.rotator__case')];
  const defaultActiveItem = container.querySelector(`.${activeItemClassName}`)

  let index = defaultActiveItem ? items.indexOf(defaultActiveItem) : 0;

  setInterval(() => {
    nextIndex = (index + 1) % items.length;

    const activeItem = items[index];
    const nextItem = items[nextIndex];

    activeItem.classList.remove(activeItemClassName);
    nextItem.classList.add(activeItemClassName);
    index = nextIndex;
  }, 1000);
}
document.querySelectorAll('.rotator').forEach(run);
*/





let rotator = document.querySelectorAll(".rotator");
let array = [...rotator];
setInterval(() => {
  array.forEach((item) => {
    let activeElement = item.querySelector(".rotator__case_active");
    let allChildrenElements = item.querySelectorAll(".rotator__case");
    let rotatorCaseIndex = [...allChildrenElements].findIndex(elem => elem.classList.contains('rotator__case_active'));
    activeElement.classList.remove('rotator__case_active');
    if (rotatorCaseIndex === allChildrenElements.length - 1) {
      rotatorCaseIndex = 0;
    } else {
      rotatorCaseIndex++;
    }
    allChildrenElements[rotatorCaseIndex].classList.add("rotator__case_active");
  })
}, 1000);




/*function initRotators() {
  // Находим все ротаторы на странице
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    // Получаем все варианты текста внутри текущего ротатора
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    
    // Интервал в 1000мс (1 секунда)
    setInterval(() => {
      // Находим индекс текущего активного элемента
      const activeIndex = cases.findIndex(c => c.classList.contains('rotator__case_active'));
      
      // Убираем класс у текущего элемента
      cases[activeIndex].classList.remove('rotator__case_active');
      
      // Рассчитываем индекс следующего элемента (с переходом в начало)
      const nextIndex = (activeIndex + 1) % cases.length;
      
      // Добавляем класс следующему элементу
      cases[nextIndex].classList.add('rotator__case_active');
    }, 1000);
  });
};*/