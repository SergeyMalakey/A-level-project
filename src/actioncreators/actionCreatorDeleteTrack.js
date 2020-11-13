import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";
import actionCreatorCurrentPlayList from "./actionCreatorCurrentPlaylist";
import store from "../store/store";

function actionCreatorDeleteTrack(playlistArr,currentIndex,idPlaylist) {
    //gg.splice(props.index,1)

    let arr = []
    playlistArr.map(item=>arr.push({["_id"]:item._id}))
    arr.splice(currentIndex,1)

    return async dispatch => {
        await dispatch(actionCreatorPromise("delTrack",gql(`
       
    mutation deltrack($idPlaylist:ID,$arr:[TrackInput]){   
         PlaylistUpsert(playlist:{_id: $idPlaylist,
                tracks:$arr
            }){_id}
         }
         
         `,{idPlaylist:idPlaylist,arr:arr })))
        await store.dispatch(actionCreatorCurrentPlayList(idPlaylist))
    }
}

export default actionCreatorDeleteTrack