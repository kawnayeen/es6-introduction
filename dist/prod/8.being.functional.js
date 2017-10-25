"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSum = getSum;
exports.getOddSum = getOddSum;
exports.getEvenSum = getEvenSum;
function getSum(values) {
    return values.reduce(function (sum, val) {
        return sum + val;
    }, 0);
}

function getOddSum(values) {
    return values.filter(function (val) {
        return val % 2 === 1;
    }).reduce(function (sum, val) {
        return sum + val;
    }, 0);
}

function getEvenSum(values) {
    return values.filter(function (val) {
        return val % 2 === 0;
    }).reduce(function (sum, val) {
        return sum + val;
    }, 0);
}