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

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//     alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в четверту чверть`);
// }





//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)


// let sum = 0;

// // for (let i = max; i >= min; i--) {
// //     console.log(i)
    
// //     if (i % 2 === 0) {
// //         sum = +i;
// //     };
// // }

// // console.log(sum);
 
// function getNumbers(min, max) {
//     for (let i = max; i >= min; i--) {
        
//     if (i % 2 === 0) {
//         sum = +i;
//         };
        
//     }
//     return sum;
    
// }
// console.log(getNumbers(3, 26));



// Використайте цикл while, щоб вивести в console всі числа від 0 до 50 включно.

// let number;

// while (number <= 50) {
//     console.log(number);
//     i++;
// }



//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин

const value = Number(prompt("insert number"));
const hour = parseInt(value / 60);
const minute = value - hour * 60;


hour = String(hour).padStart(2, "0");
minute = String(minute).padStart(2, "0");
console.log(hour);
console.log(minute);









    

    