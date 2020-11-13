import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";

function actionCreatorCurrentPlayList(playlistId=localStorage.lastPLaylist){

    localStorage.lastPLaylist = playlistId
    return actionCreatorPromise("сurrentPlayList",gql(`
            query allPlaylists{
            PlaylistFindOne(query:"[{\\"_id\\":\\"${localStorage.lastPLaylist}\\"}]"){_id name tracks{_id originalFileName id3{title album artist year genre trackNumber}}}
            }`))
}
export default actionCreatorCurrentPlayList

