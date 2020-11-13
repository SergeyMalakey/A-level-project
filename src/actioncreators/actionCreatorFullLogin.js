import actionCreatorLogin from "./actionCreatorLogin";
import actionCreatorPromise from "./actionCreatorPromise";
import getGQL from "../commonThings/getGQL";
import history from "../commonThings/history";

const gql = getGQL('/graphql')

function actionCreatorFullLogin(login, password){

    return async dispatch => {
        let tokenData = await dispatch(actionCreatorPromise('login', gql(`query log{
          login(login:"${login}", password:"${password}")
          }`)))
        tokenData && tokenData.data.login!=null &&  dispatch(actionCreatorLogin(tokenData.data.login)) && history.push('/')//authLOgin action
    }

}
export default actionCreatorFullLogin
