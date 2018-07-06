import { FETCH_DATA, SEND_POST, SEND_COMMENT, SEND_REACTION } from "../actions/types";

const initialState = {
    items: {
        users: [],
        posts: []
    },
    status: {}
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
        case SEND_POST: 
            return {
                ...state,
                status: action.data
            }
        case SEND_COMMENT: 
            return {
                ...state,
                status: action.data
            }
        case SEND_REACTION: 
            return {
                ...state,
                status: action.data
            }
        default:
            return state
    }
}