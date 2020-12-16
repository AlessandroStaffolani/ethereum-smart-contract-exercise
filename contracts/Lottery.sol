pragma solidity ^0.4.25;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .00001 ether);

        players.push(msg.sender);
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }

    function random() private view returns (uint) {
        return uint(sha3(block.difficulty, now, players));
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
