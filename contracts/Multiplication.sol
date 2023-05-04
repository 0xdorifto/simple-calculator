// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "./IMultiplication.sol";

contract Multiplication is IMultiplication {
    function multiply(int arg1, int arg2) public pure returns (int) {
        return arg1 * arg2;
    }
}
