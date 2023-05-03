// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

        // let name = [1, 5645654, 'sjhjd', 55, 75-5, 'dsvn', 'n', 222, 'dd', true];
        // console.log(name)

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

        // let book1 = {
        //     title: 'Book1',
        //     pageCount: 258,
        //     genre: 'Fantastic'
        // }
        // let book2 = {
        //    title: 'Book2',
        //     pageCount: 358,
        //     genre: 'Detective'
        // }
        //     let book3 = {
        //      title: 'Book3',
        //     pageCount: 150,
        //     genre: 'Novel'
        // }
        // console.log(book1, book2, book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту :
// title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

        // let book1 = {
        //     title: 'Book1',
        //     pageCount: 258,
        //     genre: 'Fantastic',
        //     authors: [
        //         { name: 'Robert', age: 44 },
        //     ]
        // }
        // let book2 = {
        //     title: 'Book2',
        //     pageCount: 358,
        //     genre: 'Detective',
        //     authors: [
        //         { name: 'Bob', age: 21 },
        //     ]
        // }
        // let book3 = {
        //     title: 'Book3',
        //     pageCount: 150,
        //     genre: 'Novel',
        //     authors: [ 'name: Anna',
        //         'age:35'
        //     ]
        // }
        // console.log(book1, book2, book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

            // let users = [
            //     {name: 'Oleg', username:'ghhsd',password:'5s1d5'},
            //     {name: 'dfgdf', username:'ghzzzhsd',password:'5745472s1d5'},
            //     {name: 'Olgdgfdeg', username:'gdddddhhsd',password:'542s1d5'},
            //     {name: 'qwerwe', username:'ghhshhhd',password:'5fdhs1d5'},
            //     {name: 'fbfhn', username:'ghhhhhrsd',password:'5s75781d5'},
            //     {name: 'sg', username:'ghhrrgtsd',password:'fhhjm5s1d5'},
            //     {name: 'fhh', username:'gzvzshhsd',password:'2435s1d5'},
            //     {name: 'dd', username:'ghkhjkyhsd',password:'5s122434d5'},
            //     {name: 'ggh', username:'ghhlhhsd',password:'5s134d5'},
            //     {name: 'ghhOleg', username:'ljhhhsd',password:'5sqq1d5'},
            //
            // ]
            // console.log(users[0]['password'])
            // console.log(users[1]['password'])
            // console.log(users[2]['password'])
            // console.log(users[3]['password'])
            // console.log(users[4]['password'])
            // console.log(users[5]['password'])
            // console.log(users[6]['password'])
            // console.log(users[7]['password'])
            // console.log(users[8]['password'])
            // console.log(users[9]['password'])

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
// інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
            //
            // let x = +prompt('tell me x value');
            // if(x > 0){
            //     document.write('<div>Virno</div>')
            // } else {
            //     document.write ('<div>NEvirno</div>')}

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

        // let time = +prompt('tell me number from 0 to 59');
        // if(time<=15){
        //     document.write('<div>First quarter</div>')}
        // else if (time<=30 && time>=16 ){
        //     document.write('<div>Second quarter</div>')}
        // else if (time<=45 && time>=31){
        //     document.write('<div>Third quarter</div>')}
        // else if (time<=59 && time>=46){
        //     document.write('<div>Fourth quarter</div>')}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день,
// назву дня англійською).
//


let day = prompt("Enter number of the day :");

switch (day){
    case '1': console.log("monday");
    break;
    case '2': console.log("tuesday")
        break;
    case '3': console.log("wednesday")
        break;
    case '4': console.log("thursday")
        break;
    case '5': console.log("friday")
        break;
    case '6': console.log("saturday")
        break;
    case '7': console.log("sunday") 
        break;
        }




