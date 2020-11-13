import gql from "../commonThings/gql";
import actionCreatorAllPlaylists from "../actioncreators/actionCreatorAllPlaylists";
import actionCreatorPromise from "./actionCreatorPromise";
//import actionCreatorPromise from "./actionCreatorPromise";
import store from "../store/store";

function actionCreatorAddNewPlaylist(name,id) {
    return async dispatch=>{
        await dispatch(actionCreatorPromise("newTrackList",gql(`

        mutation addPlaylist{
            PlaylistUpsert(playlist:
            {name:"${name}"}){_id}
        }
        `)))
        store.dispatch(actionCreatorAllPlaylists(id))
    }

}

export default actionCreatorAddNewPlaylist
/*
store.dispatch(actionCreatorAllPlaylists(props.id))

id:
    state.authReducer &&
    state.authReducer.data &&
    state.authReducer.data.sub.id,*/
