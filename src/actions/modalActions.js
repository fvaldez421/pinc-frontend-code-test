import { RENDER_MODAL, CLOSE_MODAL } from "./types";
// import axios from "axios"

export const renderModal = (modal, post) => (dispatch) => {
    // console.log("Render Modal Action");
    // console.log(modal);
    dispatch({
        type: RENDER_MODAL,
        modalStatus: modal,
        post: post
    })
}

export const closeModal = () => (dispatch) => {
    // console.log("Close Modal Action");
    dispatch({
        type: CLOSE_MODAL,
        modalStatus: "closed"
    })
}