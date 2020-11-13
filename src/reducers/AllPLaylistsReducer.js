const initialState = {}

const AllPlaylists = (state=initialState, action)=>{

    if(action.type === "ALL_PLAYLISTS"){
        return {data:action}
    }
    return state
}
export default AllPlaylists
