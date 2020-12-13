const initialState = {}

const allTracksReducer = (state=initialState, action)=>{
    if(action.type === "ADD_TRACK"){
        return {originalFileName: "",artist: '',genre: '',year: ''}  // action
    }
    if(action.type==="ALL_TRACKS"){
        return action.arrayAllSongs
    }
    return state
}
export default allTracksReducer
