// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

const styles = ["jazz", "blues"];

styles.push("rock-n-roll");

// styles[1] = "classic";

const index = styles.indexOf("blues");

if (index !== -1) {
  styles[index] = "classic";
}

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1} - ${element}`);
  }
}

console.log(logItems(styles));


// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

const logins = ["Peter", "John", "Igor", "Sasha"];


function checkLogin(array) {
    const login = prompt("Enter your login");

    // for (const name of array) {
    //     if (name === login) {
    //         return `Welcome, ${name}!`
    //     }
       
    // }
    // return "User not found";

    return array.includes(login) ? `Welcome, ${login}!`: "User not found"
      

}

alert(checkLogin(logins));




