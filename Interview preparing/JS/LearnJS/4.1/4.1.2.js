'use strict';

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}