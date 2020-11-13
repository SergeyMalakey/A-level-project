import actionCreatorPromisePending from "./actionCreatorPromisePending";
import actionCreatorPromiseResolved from "./actionCreatorPromiseResolved";
import actionCreatorPromiseRejected from "./actionCreatorPromiseRejected";

 function actionCreatorPromise(name, promise){
    return async dispatch => {
        dispatch(actionCreatorPromisePending(name))
        try {
            let result = await promise
            dispatch(actionCreatorPromiseResolved(name, result))
            return result;
        }
        catch(e){
            dispatch(actionCreatorPromiseRejected(name, e))
        }
    }
}
export default actionCreatorPromise