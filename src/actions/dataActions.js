import { FETCH_DATA } from "../actions/types";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
    console.log("fetching data");
    await axios.get("https://cors-anywhere.herokuapp.com/https://staging-api.pincapp.com/api/questions")
        .then(res => dispatch({
            type: FETCH_DATA,
            data: res.data
        }))
}