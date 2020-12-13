import actionCreatorPromise from "./actionCreatorPromise";
import actionCreatorFullLogin from "./actionCreatorFullLogin";
import getGQL from "../commonThings/getGQL";

const gql = getGQL('/graphql')

function actionCreatorRegistration(login, password){
    return async dispatch => {
        let registrationAnswer = await dispatch(actionCreatorPromise('registration', gql(`mutation newUser{
            createUser(login:"${login}", password:"${password}"){
             _id login
           }
        }
         `)))
        if(registrationAnswer.data.createUser!=null){
        await dispatch(actionCreatorFullLogin(login, password))}
    }
}
export default actionCreatorRegistration