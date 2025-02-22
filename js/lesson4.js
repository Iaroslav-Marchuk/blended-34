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

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const newElement = document.createElement("div");
// randomShape();

// document.body.append(newElement);

// newElement.addEventListener("click", randomShape);

// function randomShape() {
//   newElement.style.cssText = forms[randomither(forms.length - 1)];
//   newElement.style.backgroundColor = getRandomHexColor();
//   newElement.style.position = "absolute";
//   newElement.style.top = `${randomither(95)}%`;
//   newElement.style.left = `${randomither(95)}%`;
// }







// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка


// const tweets = [
//   { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//   },
//   {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//   },
// {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//   },
//   {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//   },
// {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//   },
// ];



// const stats = document.querySelector(".stats");
// let markup = '';


// tweets.forEach(item => {
//   markup += `<li class="stats-item ${item.gender}">
//         <p class="stats-name">${item.name}</p>
//         <p class="stats-likes">${item.likes} likes</p>
//         <p class="stats-tags">${item.tags}</p>
//       </li>`
// })

// stats.innerHTML = markup;

// 4. Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// const passwordInput = document.querySelector('#passwordInput');
// const passwordButton = document.querySelector('#passwordButton');

// passwordButton.addEventListener('click', hideText);

// function hideText() {
//   if (passwordButton.textContent === 'Приховати') {
//   passwordInput.style.color = 'transparent';
//   passwordButton.textContent = 'Розкрити';
//   } else {
//     passwordInput.style.color = 'inherit';
//     passwordButton.textContent = 'Приховати';
//   }
// }


// 5. Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

const double = document.querySelector('#double');
const listItems = document.querySelectorAll('.listItem');

double.addEventListener('click', doubleItems);

function doubleItems() {
  listItems.forEach(item => {
    item.textContent *=  2;
  })
}
