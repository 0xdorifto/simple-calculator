// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "./IDivision.sol";

contract Division is IDivision {
    function divide(int arg1, int arg2) public pure returns (int) {
        return arg1 / arg2;
    }
}
