function num(operator, num) {
    if (!operator) {
        return function() {
            return num;
        };
    } else if (typeof operator == 'function') {
        return function() {
            return operator(num);
        }
    }
}

// ------ operands -----

function one(operator) {
    return num(operator, 1);
}
function two(operator) {
    return num(operator, 2);
}
function three(operator) {
    return num(operator, 3);
}
function four(operator) {
    return num(operator, 4);
}
function five(operator) {
    return num(operator, 5);
}
function six(operator) {
    return num(operator, 6);
}
function seven(operator) {
    return num(operator, 7);
}
function eight(operator) {
    return num(operator, 8);
}
function nine(operator) {
    return num(operator, 9);
}

// ------- operators -------

function times(func) {
    if (!func || typeof func !== 'function') {
        throw "func parameter is not a function";
    }

    return function(num) {
        return num * func();
    }
}
function dividedBy(func) {
    if (!func || typeof func !== 'function') {
        throw "func parameter is not a function";
    }

    return function(num) {
        return num / func();
    }
}
function plus(func) {
    if (!func || typeof func !== 'function') {
        throw "func parameter is not a function";
    }

    return function(num) {
        return num + func();
    }
}
function minus(func) {
    if (!func || typeof func !== 'function') {
        throw "func parameter is not a function";
    }

    return function(num) {
        return num - func();
    }
}

