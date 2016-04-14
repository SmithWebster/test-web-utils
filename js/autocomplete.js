
/**
 * @param string input Строка поиска
 * @param dictionary array dictionary Словарь/массив строк для поиска
 * @param int maxCount Количество элементов в результате. Если 0 - вернуть все.
 */
function autocomplete(input, dictionary, maxCount = 5) {
    var matches = [];
    var re = new RegExp(input, 'i');

    var count = 0;
    for (var i in dictionary) {
        if (maxCount > 0 && count >= maxCount) {
            break;
        }

        if (dictionary[i].match(re)) {
            matches.push(dictionary[i]);
            count++;
        }
    }

    return matches;
}

