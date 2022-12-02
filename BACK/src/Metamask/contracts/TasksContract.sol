// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TasksContract {

    uint public taskCounter = 0;

    constructor(){
        createTask("mi primer tarea de ejemplo", "tengo que hacer algo");
    }

    event TaskCreated(
        uint id,
        string title,
        string description,
        bool done,
        uint createdAt
    );

    event TaskToggleDone (uint id, bool done);

    struct Task {
        uint256 id;
        string title;
        string description;
        bool done;
        uint256 createdAt;
    }

    mapping (uint256 => Task ) public tasks;

    function createTask(string memory title, string memory description) public {
        taskCounter++;
        tasks[taskCounter] = Task(taskCounter, title, description, false, block.timestamp);
        emit TaskCreated(taskCounter, title, description, false, block.timestamp);

    }

    function toggleDone(uint id) public {
       Task memory task = tasks[id];
       task.done = !task.done;
       tasks[id] = task;
       emit TaskToggleDone(id, task.done);
    }

}