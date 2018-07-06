import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import modalReducer from "./modalReducer";

export default combineReducers ({
    data: dataReducer,
    modal: modalReducer
});