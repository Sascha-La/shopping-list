/* Новые элементы должны добавляться в список по нажатию на Enter */

const itemsContainer = document.querySelector("#items");
const itemsInput = document.querySelector("#input");

itemsInput.addEventListener('keydown', function(event) {
    const itemText = itemsInput.value;

    const newItem = document.createElement('div');
    newItem.classList.add("item");
    newItem.textContent = itemText;

    if (itemText != '' && event.key == 'Enter') {
        itemsContainer.append(newItem);

        itemsInput.value = '';
    }
});


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */