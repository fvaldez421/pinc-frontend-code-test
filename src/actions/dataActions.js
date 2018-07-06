import { FETCH_DATA, SEND_POST, SEND_COMMENT, SEND_REACTION } from "../actions/types";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
    // console.log("fetching data");
    await axios.get("https://cors-anywhere.herokuapp.com/https://staging-api.pincapp.com/api/questions")
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: FETCH_DATA,
                data: res.data
            })
        }
        )
}

export const sendPost = (post) => (dispatch) => {
    // console.log("sending post");
    console.log("API Waypoint"); //Will be replaced with real request to API when available
    console.log(post)
    // Sending data back in place of API
    dispatch({
        type: SEND_POST,
        data: post,
        status: 200
    })
}

export const sendComment = (answer) => (dispatch) => {
    // console.log("sending comment");
    console.log("API Waypoint"); //Will be replaced with real request to API when available
    console.log(answer);
    // Sending data back in place of API
    dispatch({
        type: SEND_COMMENT,
        data: answer,
        status: 200
    })
}

export const sendReaction = (post) => (dispatch) => {
    // console.log("sending reaction");
    console.log("API Waypoint"); //Will be replaced with real request to API when available
    console.log(post);
    // Sending data back in place of API
    dispatch({
        type: SEND_REACTION,
        data: post,
        status: 200
    })
}