// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const listEl = document.createElement("ul");
const addBtn = document.createElement("button");
const remove = document.createElement("button");
const input = document.createElement("input");

document.body.append(input, addBtn, remove, listEl);

addBtn.textContent = "Add";

remove.textContent = "Remove";

addBtn.addEventListener("click", createItem);
remove.addEventListener("click", removeItem);

function createItem(event) {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    return;
  }

  const listItem = document.createElement("li");

  listItem.textContent = inputValue;

  listEl.append(listItem);

  listItem.style.backgroundColor =
    listEl.children.length % 2 === 0 ? "yellow" : "blue";

  // if (listEl.children.length % 2 === 0) {
  //   listItem.style.backgroundColor = "yellow";
  // } else {
  //   listItem.style.backgroundColor = "blue";
  // }

  input.value = "";
}

function removeItem() {
  if (listEl.lastChild) {
    listEl.lastChild.remove();
  }
}
