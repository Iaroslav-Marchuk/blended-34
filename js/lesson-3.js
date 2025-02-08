const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];
// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sorry, no such property in array!'

// function getNames(array) {
//   return array.map((element) => element.name);
// }

// console.log("getNames:", getNames(tweets));

// function getRandomValues(array, prop) {
//   if (!array[0][prop]) {
//     return "Sorry, no such property in array!";
//   }

//   return array.map((element) => element[prop]);
// }
// console.log("getRandomValues:", getRandomValues(tweets, "id"));

// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// function getUsersWithJs(array) {
//   return array.filter((value) =>
//     value.tags.includes("js")
//   )
// }

// console.log(getUsersWithJs(tweets));

// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

// function getUsersWithGender(array, gender) {
//   return array.filter((element) =>
//     element.gender === gender)
//   .map(element => element.name)
// }

// function getUsersWithGender(array, gender) {
//   return array.reduce((userNames, element) => {
//     if (element.gender === gender) {
//       userNames.push(element.name);
//          }
//     return userNames;
//   }, [])
// }

// console.log(getUsersWithGender(tweets, "female"));

// 4. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// function getSortedUniqueTags (array){
//   return array.flatMap((element) => element.tags).filter((tag, index, array) => array.indexOf(tag) === index)
//   .toSorted((a, b) => a.localeCompare(b));
// }
// console.log(getSortedUniqueTags(tweets));

// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numberOfPosts - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {
//   constructor(params) {
//     this.userName = params.userName;
//     this.age = params.age;
//     this.numberOfPosts = params.numberOfPosts;
//   }
//   getInfo() {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`;
//   }
//   updateNumberOfPosts(amount) {
//     this.numberOfPosts += amount;
//   }
// }
// const user = new User({ userName: "Alex", age: 35, numberOfPosts: 5 });
// console.log(user);
// console.log(user.updateNumberOfPosts(5));
// console.log(user.getInfo());

// 2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get getClientData() {
//     return { clientLogin: this.#login, clientEmail: this.#email };
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client("Alex", "alex@gmail.com");
// console.log(client);
// console.log(client.getClientData);
// client.changeEmail = "alexgood@gmail.com";
// console.log(client.getClientData.clientEmail);

// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGH: "high",
    MIDDLE: "middle",
    LOW: "low",
  };
  constructor() {
    this.items = [];
  }
  getNotes() {
    return this.items;
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(noteText) {
    this.items = this.items.filter((item) => item.text !== noteText);
  }
  updatePriority(noteText, newPriority) {
    const item = this.items.find((item) => item.text === noteText);
    if (item) {
      item.priority = newPriority;
    }
  }
}
const notes = new Notes();
notes.addNote({ text: "Note1", priority: Notes.Priority.LOW });
notes.addNote({ text: "Note2", priority: Notes.Priority.LOW });
notes.addNote({ text: "Note3", priority: Notes.Priority.HIGH });
notes.removeNote("Note2");
notes.updatePriority("Note3", Notes.Priority.MIDDLE);
console.table(notes.getNotes());
