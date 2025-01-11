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

function getNumbers(min, max) {
    let sum = 0;
    for (let i = max; i >= min; i--){
        console.log(i)
        if (i % 2 === 0) {
            sum += i;
            
        }
    }
    return sum
}

console.log(getNumbers(0, 20))