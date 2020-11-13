import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";
import store from "../store/store";
import actionCreatorIndexOfCurrentTrack from "./actionCreatorIndexOfCurrentTrack";

function actionCreatorCurrentTrack(trackId,index){

    store.dispatch(actionCreatorIndexOfCurrentTrack(index))
    return actionCreatorPromise("сurrentTrack",gql(`
            query currentTrack{
            TrackFindOne(query:"[{\\"_id\\":\\"${trackId}\\"}]"){url originalFileName id3{artist album title genre year}}
            }    
    `))

}
export default actionCreatorCurrentTrack

// query allPlaylists{
// PlaylistFindOne(query:"[{\\"_id\\":\\"${trackId}\\"}]"){name tracks{_id originalFileName id3{title album artist year genre trackNumber}}}
// }