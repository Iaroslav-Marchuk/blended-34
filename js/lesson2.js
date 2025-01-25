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
