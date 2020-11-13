import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from "../reducers/combineReducer"
import actionCreatorLogin from "../actioncreators/actionCreatorLogin";

const store = createStore(reducer, applyMiddleware(thunk) );
store.subscribe(()=>console.log(" subscribe  ",  store.getState()))
if (localStorage.authToken){store.dispatch(actionCreatorLogin(localStorage.authToken))}

export default store

