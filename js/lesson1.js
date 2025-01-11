// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// const number = Number (prompt("Insert number"));

// if (number === 10) {
//     alert("Вірно");
// } else {
//     alert('Невірно');
// }

// console.log(number);

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

//const min = Math.floor(Math.random() * (59 - 0) + 0);
//if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)

// const min = 0;
// const max = 20;
// let sum = 0;
// for (let i = max; i >= min; i--){
//     console.log(i)
//     if (i % 2 === 0) {
//         sum += i;

//     }
// }

// console.log(sum)

// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--){
//         console.log(i)
//         if (i % 2 === 0) {
//             sum += i;

//         }
//     }
//     return sum
// }

// console.log(getNumbers(0, 20))

// Використайте цикл while, щоб вивести в console всі числа від 0 до 50 включно.

// let i = 0;
// while (i <= 50) {
//   console.log(i);
//   i++;
// }

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const value = Number(prompt("Ввeдіть число:"));
// let hour = parseInt(value/60);

// let min = value % 60;

// hour = String(hour).padStart(2, "0");
// min = String(min).padStart(2, "0");
// console.log(`${hour}:${min}`);

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const num = Number(prompt("Введіть число від 1 до 4:"));
let result = "";
switch (num) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "літо";
    break;
  case 4:
    result = "осінь";
    break;
  default:
    result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}
console.log(result);
