// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "./Addition.sol";
import "./Subtraction.sol";
import "./Multiplication.sol";
import "./Division.sol";

contract Calculator is Addition, Subtraction, Multiplication, Division {
    event Log(int arg1, int arg2, string message, int result);

    function add(int arg1, int arg2) public override returns (int) {
        int result = super.add(arg1, arg2);
        emit Log(arg1, arg2, "Addition", result);
        return result;
    }

    function subtract(int arg1, int arg2) public override returns (int) {
        int result = super.subtract(arg1, arg2);
        emit Log(arg1, arg2, "Subtraction", result);
        return result;
    }

    function multiply(int arg1, int arg2) public override returns (int) {
        int result = super.multiply(arg1, arg2);
        emit Log(arg1, arg2, "Multiplication", result);
        return result;
    }

    function divide(int arg1, int arg2) public override returns (int) {
        int result = super.divide(arg1, arg2);
        emit Log(arg1, arg2, "Division", result);
        return result;
    }
}
