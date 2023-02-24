// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

// JSON поддерживает следующие типы данных:

// Объекты { ... }
// Массивы [ ... ]
// Примитивы:
// строки,
// числа,
// логические значения true/false,
// null.

// синтаксис JSON.stringify:

// let json = JSON.stringify(value, [replacer, space])




// Как и toString для преобразования строк, объект может предоставлять метод toJSON для преобразования в JSON. JSON.stringify автоматически вызывает его, если он есть.

// let room = {
//     number: 23
//   }
//   let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
//   }
//   alert( JSON.stringify(meetup) )




//   Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.
//   let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// alert( numbers[1] );