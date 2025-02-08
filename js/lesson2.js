// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ["jazz", "blues"];

// styles.push("rock-n-roll");

// styles[1] = "classic";

// const index = styles.indexOf("blues");

// if (index !== -1) {
//   styles[index] = "classic";
// }
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   }
// }
// // 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// // чи є ім'я введене в prompt у цьому масиві і у разі,
// // якщо є - виводить повідомлення в alert "Welcome, <name>!"
// // в іншому випадку - "User not found"
// function checkLogin(array) {
//     // for (const name of array) {
//     //         return `Welcome, ${name}!`
//     //     }

//     // }
//     // return "User not found";
// }
// Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length-1; i++){
//     const currentEl = array[i];
//     const nextEl = array[i + 1];

//     newArray.push(currentEl + nextEl);

//   }
//   return newArray;
// }
// 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const userKeys = Object.keys(user);
// for (const key of userKeys) {
// }

// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

// const calculator = {
//   read (a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum () {
//     if (this.exist()) {
//       const valuesSum = this.a + this.b;
//       return valuesSum;
//     }
//     return "Not values!";
//   },

//   mult () {
//     if (this.exist())
//     {const multiplyValues = this.a * this.b;
//   return multiplyValues;
// }
//   return "Not values!";
//   },
//   raise () {
//     if (this.exist()) {
//       const someValues =this.a**this.b;
//       return someValues;
//     }
//     return "Not values!";
//   },
//   exist () {
//     return this.a && this.b;
//     }
//   }

// // calculator.read (2, 5);
// 10. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category може зберігатись чи ні,
// створіть обʼєкт з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// object
const phonebook = {
  // empty massive
  contacts: [],

  add(data) {
    // object
    const newContact = {
      name: data.name,
      email: data.email,
      category: data.category || "default",
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },

  list() {
    console.table(this.contacts);
  },

  filtered(category) {
    const filtredArr = [];
    for (const contact of this.contacts) {
      if (contact.category === category) {
        filtredArr.push(contact);
      }
    }
  },
  delete(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === name) {
        this.contacts.splice(i, 1);
      }
    }
  },

  updateName(oldName, newName) {},

  generateId() {
    return "#" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    const now = new Date(); // Отримуємо поточну дату та час
    const day = String(now.getDate()).padStart(2, "0"); // Отримуємо день (додаємо 0, якщо менше 10)
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Отримуємо місяць (місяці з 0 до 11)
    const year = now.getFullYear(); // Отримуємо рік
    const hours = String(now.getHours()).padStart(2, "0"); // Отримуємо години
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Отримуємо хвилини

    // Формуємо рядок у форматі DD/MM/YYYY HH:mm
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  },
};

phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  category: "friends",
});

phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});
phonebook.add({
  name: "Katy",
  email: "katy@hotmail.com",
  category: "friends",
});

phonebook.delete("Poly");
phonebook.list();
// phonebook.filtered("default");
