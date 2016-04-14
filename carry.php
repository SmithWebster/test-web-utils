<?php

/**
 * Carry is a digit that is transferred from one column of digits 
 * to another column of more significant digits during a calculation algorithm
 *
 * @param $pairs Set of numbers pairs as string
 *
 * @return array
 *
 * @throws Exception
 *
 * @example [ "123 456", "555 555", "123 594" ]
 */
function sumCarry(array $pairs) {
    if (empty($pairs)) {
        throw new Exception('Array is empty');
    }

    $result = [];

    $normilizePair = function(array $pair) {
        $first = &$pair[0];
        $second = &$pair[1];
        if (strlen($pair[0]) < strlen($pair[1])) {
            $first = &$pair[1];
            $second = &$pair[0];
        }

        $count = strlen($first) - strlen($second);

        if (!$count) {
            return $pair;
        }

        $second = str_pad(
            $second,
            strlen($second) + $count,
            '0',
            STR_PAD_LEFT
        );
        return $pair;
    };

    $checkForCarry = function($pair) {
        $iterations = strlen(current($pair));

        $carriesCount = 0;
        $carry = false;
        for ($i = $iterations - 1; $i >= 0; $i--) {
            $arg1 = intval($pair[0][$i]);
            $arg2 = intval($pair[1][$i]);

            $res = $arg1 + $arg2 + ($carry ? 1 : 0);
            if ($res >= 10) {
                $carriesCount++;
                $carry = true;
            } else {
                $carry = false;
            }
        }

        return $carriesCount;
    };

    foreach ($pairs as &$pairStr) {
        $pair = explode(' ', $pairStr);
        $pair = $normilizePair($pair);
        $result[] = $checkForCarry($pair);
    }

    return $result;
}

$pairs = [
    "123 456",
    "555 555",
    "123 594",
    "123 5948",
];

$res = sumCarry($pairs);
var_dump($res);

