import jwt_decode from "jwt-decode";
import history from "../commonThings/history";

const initialState = {}

const authReducer = (state=initialState,action)=>{
   /* if(state===undefined){
        return {
            data:"",
            token:""
      }  }*/
    /*debugger;*/
    if(action.type === "LOGIN"){
        localStorage.authToken = action.token
        return {data: action.token != "null" ? jwt_decode(action.token) : "",  token:action.token }  // action


    }
    if(action.type === "LOGOUT"){
        localStorage.removeItem('authToken')
        history.push('/registration')
        return {}
    }
    return state
}
export default authReducer


/*

function reducer(state, action) {
    switch(action.type) {
        case ACTION_1: return { value: action.value_1 };
        case ACTION_2: return { value: action.value_2 };

        default: return state;
    }
}*/