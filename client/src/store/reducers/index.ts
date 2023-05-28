import { combineReducers } from "redux";
import popupReducer from "./popupReducer";
import wordsReducer from "./wordsReducer"; 
import authReducer from "./authReducer"; 

const rootReducers = combineReducers({
    auth: authReducer, 
    words: wordsReducer, 
    popup: popupReducer
})

export default rootReducers