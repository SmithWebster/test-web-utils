<?php

function spam($number, $useInternal = true, $str = 'hue') {
    $string = '';

    if ($useInternal) {
        $string = str_repeat($str, $number);
    } else {
        for($i = 0; $i < $number; $i++) {
            $string .= $str;
        }
    }
    return $string;
}

var_dump(spam(1));
var_dump(spam(6));
var_dump(spam(14));

