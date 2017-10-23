"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFirst = getFirst;
exports.getFirstName = getFirstName;
exports.getMiddleName = getMiddleName;
exports.getLastName = getLastName;
exports.getDisplayName = getDisplayName;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Created by kawnayeen on 10/23/17.
 */
function getFirst(values) {
    var _values = _toArray(values),
        first = _values[0],
        rest = _values.slice(1);

    return first;
}

function getFirstName(_ref) {
    var firstName = _ref.firstName;

    return firstName;
}

function getMiddleName(_ref2) {
    var middleName = _ref2.middleName;

    return middleName;
}

function getLastName(_ref3) {
    var lastName = _ref3.lastName;

    return lastName;
}

function getDisplayName(_ref4) {
    var firstName = _ref4.firstName,
        lastName = _ref4.lastName;

    return firstName + " " + lastName;
}