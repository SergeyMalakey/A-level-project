import actionCreatorTracklistFind from "../actioncreators/actionCreatorTracklistFind";

const initialState = ""

const tracklistFindReducer = (state=initialState,action)=>{


    if(action.type === "PLAYLIST_FIND"){
        return action.text
    }
    return state
}
export default tracklistFindReducer