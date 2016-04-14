<?php

function camelCaseSeparator($ccStr) {
    $string = '';

    $strLen = strlen($ccStr);
    for ($i = 0; $i < $strLen; $i++) {
        $char = $ccStr[$i];
        if (ctype_upper($char) && $i > 0) {
            $string .= " " . $char;
        } else {
            $string .= $char;
        }
    }

    return $string;
}

var_dump(camelCaseSeparator("helloWorld"));
var_dump(camelCaseSeparator("HelloMyWorld"));

