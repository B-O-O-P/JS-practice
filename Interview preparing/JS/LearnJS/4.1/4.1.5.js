'use strict';

/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
   Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
*/

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
console.log(menu);