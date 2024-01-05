import {combineReducers} from  "redux";
import authReducer from "./auth";
import  currentUserReducer from './currentUser';
import chanelReducers from './chanel';
import videoReducer from "./video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import historyReducer from "./history";
import commentReducer from "./comments";

export default combineReducers({
  authReducer,
  currentUserReducer,
  chanelReducers,
  videoReducer,
  likedVideoReducer,
  watchLaterReducer,
  historyReducer,
  commentReducer
 
});