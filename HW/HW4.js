// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function rectangular(a,b) {
//     let result = a * b;
//     return result
// }
//
// console.log('area of a rectangle is', rectangular(100, 200));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function circle(r) {
//     let result = 3.14 * r**2;
//     return result
// }
// console.log('area of a circle is', circle(100))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h, r) {
//     if (h < 0 || r < 0) {
//         console.log('error');
//         return;
//     }
//     let result = 2 * 3.14 * r * h;
//     return result;
// }
// console.log('area of a cylinder is', cylinder(100, -10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function printElements (...arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
//
// }
// let x= [11,22,33,55,66,]
// let y = [55,68,963,250]
// printElements(x, y)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(textContent) {
//     document.write (`<div>`)
//     document.write (`<p> ${textContent} </p>`)
//     document.write (`</div>`)
// }
// p('Text Content')
// p('text')
// - створити функцію яка створює ul
// з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(text) {
//     let content = 'Same Text'
//     document.write (`<div>`)
//     document.write (`<ul>
// <li>${content}</li>
// <li>${content}</li>
// <li>${content}</li>
// </ul>`)
//     document.write (`</div>`)
// }
//  ul()

// - створити функцію swap(arr,index1,index2). Функція
// міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2) {
//     let temp=arr[index1] ;
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr
// }
//
// console.log(swap([11,22,33,44],0,1))
//
// Напишіть функцію reverseArray(arr), яка приймає масив arr і
// повертає новий масив, в якому елементи розташовані в зворотньому порядку.
//     Наприклад, виклик reverseArray([1, 2, 3, 4])
// повинен повернути масив [4, 3, 2, 1].

function reverseArray(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr[arr.length - 1 - i] = arr[i];
    }
    return reversedArr;
}

console.log(reverseArray([1,3,15,25]))