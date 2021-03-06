import { RENDER_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
    modalStatus: "closed",
    post: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RENDER_MODAL:
            // console.log("Render Modal Reducer");
            // console.log(action);
            return {
                ...state,
                modalStatus: action.modalStatus,
                post: action.post
            }
        case CLOSE_MODAL: 
            // console.log("Close Modal Reducer")
            return {
                ...state,
                modalStatus: action.modalStatus
            }
        default:
            return state
    }
}