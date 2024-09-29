/* Новые элементы должны добавляться в список по нажатию на Enter */

const itemsContainer = document.querySelector("#items");
const itemsInput = document.querySelector("#input");

itemsContainer.addEventListener('keydown', function() {
    const itemText = itemsInput.value;
    var keyCode = event.keyCode;

    const newItem = document.createElement('div');
    newItem.classList.toggle("done");
    newItem.textContent = itemText;

    if (itemText != '' && keyCode == Enter) {
        itemsContainer.append(newItem);

        itemsInput.value = '';
    }
});

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */