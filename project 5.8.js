// Как мы знаем из главы Сборка мусора движок JavaScript хранит значения в памяти до тех пор, пока они достижимы


// Например
// let oleg = { name: "oleg" };
// oleg = null;

// Все значение которые мы изменим оно все равно в памите останется 

// let oleg = { name: "oleg" };
// let map = new Map();
// map.set(oleg, "...");
// oleg = null; обьект Олег сахранен внутри Обьекта , с помощю map.keys() этого кодо мы можем увидить этого

// Первое его отличие от Map в том, что ключи в WeakMap должны быть объектами, а не примитивными значениями:

// В WeakMap отсуствует эти методы:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)




// Коллекция WeakSet ведёт себя похоже set
// Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.


// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John заходил к нам
// visitedSet.add(pete); // потом Pete
// visitedSet.add(john); // John снова

// alert(visitedSet.has(john)); 

// alert(visitedSet.has(mary));
// john = null ;


// WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.