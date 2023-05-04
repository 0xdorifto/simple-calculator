// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

abstract contract Addition {
    function add(int arg1, int arg2) public virtual returns (int) {
        return arg1 + arg2;
    }
}
