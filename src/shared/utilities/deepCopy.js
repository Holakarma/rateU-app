function deepCopy(obj) {
    // Проверяем, является ли значение объектом
    if (typeof obj !== "object" || obj === null) {
        return obj; // если это примитивное значение, просто возвращаем его
    }

    // Создаем новый объект или массив в зависимости от типа исходного
    let copy = Array.isArray(obj) ? [] : {};

    // Рекурсивно копируем все свойства объекта
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]); // копируем вложенные объекты и массивы
        }
    }

    return copy;
}


export default deepCopy;