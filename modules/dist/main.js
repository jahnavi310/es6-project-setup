(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addition = function addition(a, b) {
    return a + b;
};

var square = function square(a) {
    return a * a;
};

var variable = 88888;

var EmployeeInfo = (function () {
    function EmployeeInfo(employeeinfo) {
        _classCallCheck(this, EmployeeInfo);

        this.name = employeeinfo.name;
        this.id = employeeinfo.id;
    }

    EmployeeInfo.prototype.getName = function getName() {
        return this.name;
    };

    return EmployeeInfo;
})();

exports.addition = addition;
exports.square = square;
exports.variable = variable;
exports.EmployeeInfo = EmployeeInfo;

},{}],2:[function(require,module,exports){
"use strict";

var _learnES6 = require('./learnES6');

console.log("Square of 5: ", _learnES6.square(5));
console.log("Addition of 10 + 10: ", _learnES6.addition(10, 10));

console.log(_learnES6.variable);

var employee = {
    name: 'Jahnavi Patel',
    id: 123456789
};

var e = new _learnES6.EmployeeInfo(employee);

//Ritesh Kumar
console.log("Employee Name: ", e.getName());

},{"./learnES6":1}]},{},[2]);
