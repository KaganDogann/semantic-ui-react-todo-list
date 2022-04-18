export const ADD_TO_TODO = "ADD_TO_TODO"
export const REMOVE_FROM_TODO = "REMOVE_FROM_TODO"

export function addToToDo(task) {
  return {
    type: ADD_TO_TODO,
    payload: task
  }
}

export function removeFromToDo(task) {
  return {
    type: REMOVE_FROM_TODO,
    payload: task
  }
}