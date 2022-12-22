// 1. Дан массив [2,5,6,7,9]. С помощью цикла вывести эти
// числа на экран по очереди.
const cart = [2, 5, 6, 7, 9];
for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
}

// 2. Дан массив [2,5,6,7,9]. С помощью цикла вывести эти
// числа на экран в обратном порядке.
const cart = [2, 5, 6, 7, 9];
for (let i = cart.length - 1; i >= 0; i--) {
  console.log(cart[i]);
}


// 3. Создать массив из 10ти элементов и вывести на
// экран сумму всех элементов массива.
const cart = [2, 5, 6, 7, 9, 10, 12, 14, 16, 25];

let result = 0;
for (let i = 0; i < cart.length; i++) {
    result += cart[i];
}
console.log("Сумма элементов массива:" + result);


// 4. Найти среднее арифметическое значение
// элементов массива, которые стоят на четных местах.

const arr = [1, 5, 6, 7, 9, 10, 12, 14, 16, 25];
let result = 0;
let evenPlacesAmount = 0;
// переменная количество четных мест
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    result = result + arr[i];
    evenPlacesAmount = evenPlacesAmount + 1;
  }
}
console.log("Среднее арифметическое значение массива:" + result / evenPlacesAmount);


// 5. Создать массив, элементы которого равны
// элементам исходного массива, но с
// противоположными знаками. (Длина исходного
// массива должна быть не меньше 10ти элементов).

const arr = [2,5,-7,92,-19,52,-23,61,-74,45];
const resultArr = [];

	for (let i = 0; i < arr.length; i++) {
    resultArr[i] = -arr[i];
	}
console.log(arr);
console.log(resultArr);


// 6. Создать пустой массив. С помощью цикла заполнить массив последовательными нечетными
// числами начиная с единицы. (Количество элементов
// массива: 8)

const arr = [];
for (let i = 0; i < 8 ; i++) {
    // или вместо i < 8  arr.length !== 8
	arr[i] = i + 1;
// или arr[i] = 2; будут двойки
}
console.log(arr);


// 7. Создать пустой массив.С помощью цикла создать массив, каждый элемент
// которого равен квадрату своего номера.

const arr = [];
let number = 0;
for (let i = 0; i < 10; i++) {
  arr[i] = i * i;
}
console.log(arr);


// 8. Создать массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива

const arr = [2, 5, 6, 7, 9, 10, 12, 14, 16, 25];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
        result++;
    }
}
console.log("Количество четных чисел массива:" + result);


// 9. Создать массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

const arr = [2, 900, 6, 7, 60, 10, 12, 14, 16, 25];
let maxNumber = arr[0];
// Переменная для хранения макс числа
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
	maxNumber = arr[i]
  }
}

console.log("Максимальное число массива:" + maxNumber);