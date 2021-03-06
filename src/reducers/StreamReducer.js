import {
 CREATE_STREAM,
 FETCH_STREAMS,
 FETCH_STREAM,
 DELETE_STREAM,
 EDIT_STREAM,
} from "../actions/types";
import _ from "lodash";

const Streamreducer = (state = {}, action) => {
 switch (action.type) {
  case FETCH_STREAM:
   return { ...state, [action.payload.id]: action.payload };
  case CREATE_STREAM:
   return { ...state, [action.payload.id]: action.payload };
  case EDIT_STREAM:
   return { ...state, [action.payload.id]: action.payload };
  case DELETE_STREAM:
   return _.omit(state, action.payload);
  default:
   return state;
 }
};

export default Streamreducer;
