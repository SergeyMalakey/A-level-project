import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";

function     actionCreatorAllPlaylists(id){
    return actionCreatorPromise("allPlaylists",gql(`
             query playlists{
                PlaylistFind(query: "[{\\"___owner\\": \\"${id}\\"}]")
                 {name _id description
                    tracks{
                        _id
                    }}
             } 
        `))
}
export default actionCreatorAllPlaylists