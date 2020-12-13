import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";
import actionCreatorCurrentPlayList from "./actionCreatorCurrentPlaylist";
import store from "../store/store";

function actionCreatorAddTrackToCurrentPlaylist(idPlaylist,arrTracks,idTrack){
    let arr = [...arrTracks,{["_id"]:idTrack}]
    return async dispatch => {
        await dispatch(actionCreatorPromise("addTrack",gql(`
            mutation addtrack($idPlaylist:ID,$arr:[TrackInput]){   
                 PlaylistUpsert(playlist:{_id: $idPlaylist,
                        tracks:$arr
                    }){_id}
                 }
         `,{idPlaylist:idPlaylist,arr:arr })))
     await store.dispatch(actionCreatorCurrentPlayList(idPlaylist))
    }
}
export default actionCreatorAddTrackToCurrentPlaylist

