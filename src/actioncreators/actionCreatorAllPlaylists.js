import actionCreatorPromise from "./actionCreatorPromise";
import gql from "../commonThings/gql";
import {connect} from "react-redux";

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

  //  "5f64e81cc3f4ef1328f498ce"


    // query allPlaylists{
    //     PlaylistFind(query:"[{}]"){ name _id description }
    // }

    /* PlaylistFind(query:"[{}]"){ name _id description /!*tracks{url originalFileName id3{artist genre*!/} }}*/
}

export default actionCreatorAllPlaylists