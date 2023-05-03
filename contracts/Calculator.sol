// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

interface IAddition {
    function add(int arg1, int arg2) external returns (int);
}

interface ISubtraction {
    function subtract(int arg1, int arg2) external returns (int);
}

interface IMultiplication {
    function multiply(int arg1, int arg2) external returns (int);
}

interface IDivision {
    function divide(int arg1, int arg2) external returns (int);
}

contract Calculator {
    IAddition addition;
    ISubtraction subtraction;
    IMultiplication multiplication;
    IDivision division;

    event Log(int arg1, int arg2, string indexed message, int result);

    constructor(
        address aAddress,
        address sAddress,
        address mAddress,
        address dAddress
    ) {
        addition = IAddition(aAddress);
        subtraction = ISubtraction(sAddress);
        multiplication = IMultiplication(mAddress);
        division = IDivision(dAddress);
    }

    function add(int arg1, int arg2) public {
        int result = addition.add(arg1, arg2);
        emit Log(arg1, arg2, "Addition", result);
    }

    function subtract(int arg1, int arg2) public {
        int result = subtraction.subtract(arg1, arg2);
        emit Log(arg1, arg2, "Addition", result);
    }

    function multiply(int arg1, int arg2) public {
        int result = multiplication.multiply(arg1, arg2);
        emit Log(arg1, arg2, "Addition", result);
    }

    function divide(int arg1, int arg2) public {
        int result = division.divide(arg1, arg2);
        emit Log(arg1, arg2, "Addition", result);
    }
}
