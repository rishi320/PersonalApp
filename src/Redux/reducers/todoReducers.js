import { isAsyncThunkAction } from "@reduxjs/toolkit";
import * as types from "../tasks";

const initialState = {
  todos: [
    {
      text: "some todo 1",
      completed: false,
      remainder: false,
    },
    {
      text: "some todo 2",
      completed: false,
      remainder: false,
    },
  ],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_TODO_LIST_SUCCESS:
      return state;

    case types.ADD_TODO_LIST_SUCCESS:
      console.log("inside case 2", state);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: false,
            remainder: false,
          },
        ],
      };

    case types.TOGGLE_REMAINDER_SUCCESS:
      console.log("payload...", action.payload);
      return state.todos.map((todo) => {
        if (todo.text !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            remainder: !todo.remainder,
          };
        }
      });

    default:
      return state;
  }
}
