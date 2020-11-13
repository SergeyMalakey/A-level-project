import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";
import {connect} from "react-redux";
import actionCreatorCurrentPlayList from "./actionCreatorCurrentPlaylist";
import store from "../store/store";

function actionCreatorAddTrackToCurrentPlaylist(idPlaylist,arrTracks,idTrack){

    let arr = [...arrTracks,{["_id"]:idTrack}]

    return async dispatch => {
        // debugger;
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

//      "5f7c7ffc8c6ee212fcf7fbcc"

/*

mutation addtrack{
    PlaylistUpsert(playlist:{_id: "${idPlaylist}",
        tracks:"${arr}"
    }){_id}
}*/