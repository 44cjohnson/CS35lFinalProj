import { combineReducers } from "redux";

import item from './items';
import auth from './auth';


export default combineReducers({ item, auth });
