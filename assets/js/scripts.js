const divider = document.getElementById("divider");

// Устанавливаем изначальное положение линии
divider.style.left = `calc(80% - 0.05px)`;

// Добавляем обработчики событий для перемещения линии
let isDragging = false;

divider.addEventListener("mousedown", function(event) {
  isDragging = true;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    const mouseX = event.clientX;
    const titleWidth = divider.parentNode.offsetWidth;
    const percentX = (mouseX / titleWidth) * 100;

    // Изменяем положение линии
    divider.style.left = `calc(${percentX}% - 2px)`;

    // Обновляем clip-path для fur-after, чтобы она не выходила за пределы линии
    const furAfter = document.querySelector('.fur-after');
    furAfter.style.clipPath = `inset(0 0 0 calc(${percentX}%))`; // Обновляем значение clip-path, учитывая новую позицию линии
  }
});

document.addEventListener("mouseup", function(event) {
  isDragging = false;
});

// toggle
