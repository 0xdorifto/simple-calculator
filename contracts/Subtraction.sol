// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "./ISubtraction.sol";

contract Subtraction is ISubtraction {
    function subtract(int arg1, int arg2) public pure returns (int) {
        return arg1 - arg2;
    }
}
