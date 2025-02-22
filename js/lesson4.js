// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listEl = document.createElement("ul");
// const addBtn = document.createElement("button");
// const remove = document.createElement("button");
// const input = document.createElement("input");

// document.body.append(input, addBtn, remove, listEl);

// addBtn.textContent = "Add";

// remove.textContent = "Remove";

// addBtn.addEventListener("click", createItem);
// remove.addEventListener("click", removeItem);

// function createItem(event) {
//   const inputValue = input.value.trim();

//   if (inputValue === "") {
//     return;
//   }

//   const listItem = document.createElement("li");

//   listItem.textContent = inputValue;

//   listEl.append(listItem);

//   listItem.style.backgroundColor =
//     listEl.children.length % 2 === 0 ? "yellow" : "blue";

//   // if (listEl.children.length % 2 === 0) {
//   //   listItem.style.backgroundColor = "yellow";
//   // } else {
//   //   listItem.style.backgroundColor = "blue";
//   // }

//   input.value = "";
// }

// function removeItem() {
//   if (listEl.lastChild) {
//     listEl.lastChild.remove();
//   }
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

const newElement = document.createElement("div");
randomShape();

document.body.append(newElement);

newElement.addEventListener("click", randomShape);

function randomShape() {
  newElement.style.cssText = forms[randomither(forms.length - 1)];
  newElement.style.backgroundColor = getRandomHexColor();
  newElement.style.position = "absolute";
  newElement.style.top = `${randomither(95)}%`;
  newElement.style.left = `${randomither(95)}%`;
}
