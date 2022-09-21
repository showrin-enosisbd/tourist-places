import { combineReducers } from "redux";

import user from "./user";
import places from "./places";

export default combineReducers({ user, places });
