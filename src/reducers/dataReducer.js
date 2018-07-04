import { FETCH_DATA } from "../actions/types";

const initialState = {
    items: {
        users: [],
        posts: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            // console.log("Data Reducer");
            return {
                ...state,
                items: {
                    users: action.data.included,
                    posts: action.data.data
                } 
            }
    
        default:
            return state
    }
}