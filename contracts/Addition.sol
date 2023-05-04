// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "./IAddition.sol";

contract Addition is IAddition {
    function add(int arg1, int arg2) public pure returns (int) {
        return arg1 + arg2;
    }
}
