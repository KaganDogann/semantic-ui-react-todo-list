import { ADD_TO_DOING, REMOVE_FROM_DOING } from "../actions/doingActions"
import { doingItems } from "../initialValues/doingItems"

const initialState = {
    doingItems: doingItems
}

export default function doingReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ADD_TO_DOING:
            return {
                ...state,
                doingItems: [...state.doingItems, { task: payload }]
            }

        case REMOVE_FROM_DOING:
            return {
                ...state,
                doingItems: state.doingItems.filter((d) => d.task.description !== payload.description)
            }

        default:
            return state
    }
}
