export const ADD_TO_DONE = "ADD_TO_DONE"
export const REMOVE_FROM_DONE = "REMOVE_FROM_DONE"

export function addToDone(task) {
  return {
    type: ADD_TO_DONE,
    payload: task
  }
}

export function removeFromDone(task) {
  return {
    type: REMOVE_FROM_DONE,
    payload: task
  }
}