import authReducer from "./authReducer";
import tourReducer from "./ToursReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import  { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  tourism: tourReducer,
  firestore: firestoreReducer,
  firebase : firebaseReducer
});

export default rootReducer;
