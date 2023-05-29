import { combineReducers } from "redux";
import popupReducer from "./popupReducer";
import wordsReducer from "./wordsReducer"; 
import authReducer from "./authReducer"; 
import modalReducer from "./modalReducer";

const rootReducers = combineReducers({
    auth: authReducer, 
    words: wordsReducer, 
    popup: popupReducer,
    modal: modalReducer
})

export default rootReducers