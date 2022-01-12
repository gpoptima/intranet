import { combineReducers } from "redux";

import login from './login';
import autos from './autos';
import app from './app';

export default combineReducers({
    login,
    autos,
    app
});