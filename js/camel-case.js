
function camelCaseSeparator(ccStr) {
    var string = '';
    if (!ccStr) {
        return string;
    }

    for (var i in ccStr) {
        var ch = ccStr[i];

        if (ch.toUpperCase() == ch) {
            string += ' ' + ch;
        } else {
            string += ch;
        }
    }

    return string;
}
