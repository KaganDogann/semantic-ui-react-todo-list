import { ADD_TO_DONE, REMOVE_FROM_DONE } from "../actions/doneActions"
import { doneItems } from "../initialValues/doneItems"

const initialState = {
  doneItems: doneItems
}

export default function doneReducer(state = initialState, { type, payload }) {
  switch (type) {

    case ADD_TO_DONE:
      return {
        ...state,
        doneItems: [...state.doneItems, { task: payload }]
      }

    case REMOVE_FROM_DONE:
      return {
        ...state,
        doneItems: state.doneItems.filter((d) => d.task.description !== payload.description)
      }

    default:
      return state
  }
}
