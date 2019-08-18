import { combineReducers } from "redux";

import data from './data';
import cities from "./cities";

export default combineReducers({
    cities,
    data
});