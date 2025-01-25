// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ["jazz", "blues"];

// styles.push("rock-n-roll");

// // styles[1] = "classic";

// const index = styles.indexOf("blues");

// if (index !== -1) {
//   styles[index] = "classic";
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`${i + 1} - ${element}`);
//   }
// }

// console.log(logItems(styles));

// // 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// // чи є ім'я введене в prompt у цьому масиві і у разі,
// // якщо є - виводить повідомлення в alert "Welcome, <name>!"
// // в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const login = prompt("Enter your login");

//     // for (const name of array) {
//     //     if (name === login) {
//     //         return `Welcome, ${name}!`
//     //     }

//     // }
//     // return "User not found";

//     return array.includes(login) ? `Welcome, ${login}!`: "User not found"

// }

// alert(checkLogin(logins));

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
// console.log(sum(someArr));

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
//   console.log(`${key} : ${user[key]}`);
// }

// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

const calculator = {
  read (a, b) {
    this.a = a;
    this.b = b; 
  },
  sum () {
    if (this.exist()) {
      const valuesSum = this.a + this.b;
      return valuesSum;
    }
    return "Not values!";
  },

  mult () {
    if (this.exist())
    {const multiplyValues = this.a * this.b;
  return multiplyValues;
}
  return "Not values!";
  },
  raise () {
    if (this.exist()) {
      const someValues =this.a**this.b;
      return someValues;
    }
    return "Not values!";
  },
  exist () {
    return this.a && this.b;
    }
  } 

calculator.read (2, 5);
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator.raise());

