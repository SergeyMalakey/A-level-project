import React, {useState,useRef} from 'react';
import './App.css';
import RegistrationForm from "./components/registrationForm";
/*import {Router, Route, Link,Switch,Redirect,withRouter} from 'react-router-dom';*/
/*import Counter from "./components/Redax";*/
import TrackList from "./components/TrackList";
import Player from "./components/Footer/Player";
import {Router, Route, Link,Switch} from 'react-router-dom';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
/*import reducer from "./reducers"*/
/*import authReducer from "reducers/authReducer"*/
import createHistory from "history/createBrowserHistory";
import store from "./store/store";
import Header from "./components/Main/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import history from "./commonThings/history";
import actionCreatorPromise from "./actioncreators/actionCreatorPromise";
import DropTest from "./components/DropZone";
import DropZone from "./components/DropZone";

/*
const UploadTrack = ({onUpload})=>{
    const formRef = useRef()
    return(
        <form action="/upload" method="post" encType="multipart/form-data" ref={formRef}>
            <input type="file" name="photo" id='photo' onChange={()=>onUpload(formRef.current)}/>
        </form>
    )
}
const actionUpload =(form)=>actionCreatorPromise("upload",
    fetch('/upload', {
    method: "POST",
    headers: localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {},
    body: new FormData(form)
}) /!*.then(res=>res.json()))*!/  )

const ConnectedUploader = connect((store)=>({data: store.promiseReducer.upload}),{onUpload:actionUpload})(UploadTrack)
*/





const Main2=()=>{
    return(
        <div className={"wrapper"}>
            <div className={"main-wrapper"}>
                <Aside/>
                <Main/>
            </div>
            <footer>
                <Player/>
            </footer>
        </div>
    )
}






   





const App=()=> {
  return (
      <div>
          <Provider store={store}>
              <Router history = {history}>
                  <Switch>
                      <Route  path = "/registration" component={RegistrationForm} />
                      <Route exact path = "/" component={Main2} />
                  </Switch>
              </Router>
          </Provider>
      </div>
    )
}


export default App
