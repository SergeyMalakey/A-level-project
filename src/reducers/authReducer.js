import jwt_decode from "jwt-decode";
import history from "../commonThings/history";

const initialState = {}

const authReducer = (state=initialState,action)=>{
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

