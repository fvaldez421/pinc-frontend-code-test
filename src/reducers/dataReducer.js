import { FETCH_DATA } from "../actions/types";

const initialState = {
    items: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            console.log("Data Reducer");
            return {
                ...state,
                items: action.data
            }
    
        default:
            return state
    }
}