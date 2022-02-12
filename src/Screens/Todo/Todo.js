import { Input, Button, Card } from "@dsi/react-eds";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Remainder from "../Remainder/Remainder";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoList,
  addTodoList,
  toggleRemainder,
} from "../../Redux/actions/actions";

function Todo({ userDetails }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.todos);
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [remainderTask, setRemainderTask] = useState("");

  useEffect(() => {
    dispatch(getTodoList());
    console.log("useEffect", allTasks);
  }, []);

  const handleClick = (task) => {
    dispatch(addTodoList(task));
    setNewTask("");
  };

  const handleRemainder = () => {
    dispatch(toggleRemainder(remainderTask));
    navigate("/remainder");
  };

  return (
    <div className="main-container">
      <h1>TODO</h1>
      <h3>Hi, {userDetails}</h3>
      <div>
        <Input
          id="task"
          placeholder="New task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            handleClick(newTask);
            console.log("Clicked");
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <i className="icon icon-plus"></i>
            <p style={{ margin: "0" }}>Add New Task</p>
          </span>
        </Button>
      </div>

      <br />
      {allTasks.map((task, index) => (
        <Card
          id={`task-${index}`}
          title={task.text}
          onChange={(selected) => {
            if (selected) {
              setRemainderTask(task.text);
            }
          }}
          //   actions={[<i className="icon icon-important"></i>]}
        >
          <Button onClick={handleRemainder}>Add Remainder</Button>
        </Card>
      ))}
      <br />
    </div>
  );
}

export default Todo;
