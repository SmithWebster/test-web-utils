
/**
 * @param string input Строка поиска
 * @param dictionary array dictionary Словарь/массив строк для поиска
 * @param int maxCount Количество элементов в результате. Если 0 - вернуть все.
 */
function autocomplete(input, dictionary, maxCount = 5) {
    var matches = [];
    var re = new RegExp(input, 'i');

    var lettersOnly = function(sentence) {
        return sentence.replace(/[^a-zA-Z]+/g, '');
    };

    var count = 0;
    for (var i in dictionary) {
        if (maxCount > 0 && count >= maxCount) {
            break;
        }

        var sentence = lettersOnly(dictionary[i]);
        if (sentence.match(re)) {
            matches.push(sentence);
            count++;
        }
    }

    return matches;
}

