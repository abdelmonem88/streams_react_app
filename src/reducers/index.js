import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";
import Streamreducer from "./StreamReducer";

export default combineReducers({
 auth: AuthReducer,
 form: formReducer,
});
