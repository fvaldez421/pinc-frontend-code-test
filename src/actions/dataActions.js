import { FETCH_DATA, SEND_POST } from "../actions/types";
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
    console.log(post)
    // Sending data back in place of API
    dispatch({
        type: SEND_POST,
        data: post,
        status: 200
    })
}