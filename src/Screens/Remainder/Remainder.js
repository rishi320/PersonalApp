import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Remainder() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state);
  console.log("---------", todoList);

  return (
    <div>
      <h3>Remainder</h3>
      {todoList.map((item, index) => {
        if (item.remainder) {
          return;
        }
      })}
    </div>
  );
}

export default Remainder;
