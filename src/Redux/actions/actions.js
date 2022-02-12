import * as tasks from "../tasks";

export function getTodoList() {
  return {
    type: tasks.GET_TODO_LIST,
  };
}

export function addTodoList(payload) {
  return {
    type: tasks.ADD_TODO_LIST,
    payload: payload,
  };
}

export function getUserDetails() {
  return {
    type: tasks.GET_USER_DETAILS,
  };
}

export function addUserDetails(payload) {
  return {
    type: tasks.ADD_USER_DETAILS,
    payload: payload,
  };
}

export function removeTodo() {
  return {
    type: tasks.REMOVE_TODO,
  };
}

export function toggleRemainder(payload) {
  return {
    type: tasks.TOGGLE_REMAINDER,
    payload: payload,
  };
}
