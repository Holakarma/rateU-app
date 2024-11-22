function deepEqual (obj1, obj2) {
    // Если объекты имеют одинаковую ссылку, то они равны
    if (obj1 === obj2) return true;

    // Если один из объектов null или не объект, то они не равны
    if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
        return false;
    }

    // Получаем массивы ключей обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Если количество ключей не совпадает, объекты не равны
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверяем ключи и значения рекурсивно
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export default deepEqual;
