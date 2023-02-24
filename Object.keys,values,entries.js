// map.keys(), map.values(), map.entries()  Это универсальные методы

// Метод поддерживают для структур:

// Map
// Set
// Array

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение]


// Первое отличие в том, что мы должны вызвать Object.keys(obj), а не obj.keys()


// Object.keys/values/entries игнорируют символьные свойства
// Так же, как и цикл for..in, эти методы игнорируют свойства, использующие Symbol(...) в качестве ключей.