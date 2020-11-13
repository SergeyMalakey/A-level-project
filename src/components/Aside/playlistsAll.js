import React, {useEffect, useState} from "react"
import store from "../../store/store";

import {connect} from "react-redux";
import actionCreatorAllSongs from "../../actioncreators/actionCreatorAllSongs";
import actionCreatorAllPlaylistFind from "../../actioncreators/actionCreatorAllPlayListFind";
import PlaylistsOne from "./playlistOne";
import index from "jwt-decode";
import actionCreatorPromise from "../../actioncreators/actionCreatorPromise";
import actionCreatorAddNewPlaylist from "../../actioncreators/actionCreatorAddNewPlaylist";





const PlaylistsAll=(props)=>{

    return(
        <div className={"playlist-all"}>
            <p>All Playlists:</p>
            {props.allPlaylists.map((item,key)=><PlaylistsOne name={item.name} id={item._id} desсription={item.description} key={key}/>)}
        </div>
    )
}
export default PlaylistsAll