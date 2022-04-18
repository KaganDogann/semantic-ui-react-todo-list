import { ADD_TO_TODO, REMOVE_FROM_TODO } from "../actions/toDoActions"
import { toDoItems } from "../initialValues/toDoItems"

const initialState = {
    toDoItems:toDoItems
}

export default function toDoReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ADD_TO_TODO:
            return { 
                ...state, 
                toDoItems:[...state.toDoItems,{task:payload}]
            }

        case REMOVE_FROM_TODO:
            return {
                ...state,
                toDoItems: state.toDoItems.filter((t)=>t.task.description !==payload.description)
            }
        default:
            return state
    }
}
