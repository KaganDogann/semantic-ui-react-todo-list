export const ADD_TO_DOING = "ADD_TO_DOING"
export const REMOVE_FROM_DOING = "REMOVE_FROM_DOING"

export function addToDoing(task) {
  return {
    type: ADD_TO_DOING,
    payload: task
  }
}

export function removeFromDoing(task) {
    return {
        type: REMOVE_FROM_DOING,
        payload: task
    }
}