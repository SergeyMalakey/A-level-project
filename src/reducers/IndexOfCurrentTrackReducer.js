const initialState = {}

const indexOfCurrentTrackReducer = (state=initialState, action)=>{


    if(action.type === "CURRENT_TRACK"){
        return {index:action.index}
    }
    return state
}
export default indexOfCurrentTrackReducer
