import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import CurrentTrack from "./OneTrack";
import Preloader from "../../commonThings/preloader";
import OneTrack from "./OneTrack";

const CurrentTrackList=(props)=>{
/*debugger;*/
    return(
        <div className={"main__tracklist-current"}>
             <div className={"main__tracklist-current-name"}> { props.playlistName?
                 "Playlist: " + props.playlistName :
                 "Playlist: "
             }
                 { props.status==="PENDING"? <Preloader/>:""}
             </div>
            { props.status===undefined ? "Choose a Playlist":""}
            { props.status==="RESOLVED" && props.tracks!=null?
                props.tracks.map((track,index) =>
                <OneTrack track={track} index={index} key={index}/>):""}
        </div>
    )
}
export default connect(
    (state)=>({
        playlistName:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne.name,
        status:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.status,
        tracks:
            state.promiseReducer &&
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne.tracks
    }),
    null
)(CurrentTrackList)
