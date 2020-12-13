import React, {useState} from "react"
import {connect} from "react-redux";
import Preloader from "../../commonThings/preloader";
import OneTrack from "./OneTrack";

const CurrentTrackList = (props) => {
    const [inputText, setInputText] = useState("")
    return (
        <div className={"main__tracklist-current"}>
            <div className={"main__tracklist-current-name"}>
                <span>{props.playlistName ? `Playlist: ${props.playlistName}` : "Choose a playlist"}</span>
                {props.playlistName && <span>
                                            <input
                                                placeholder={"find track"}
                                                className={"main__tracklist-input"}
                                                onChange={(e) => setInputText(e.target.value)}
                                            />
                                        </span>
                }
            </div>
            <div className={"main__tracklist-current-list"}>
                {props.status === "PENDING" ?
                    <div className={"main__tracklist-current-list-preloader"}><Preloader/></div> : ""}
                {props.status === undefined ? "Choose a Playlist" : ""}
                {props.status === "RESOLVED" && props.tracks != null ?
                    props.tracks.map((track, index) => track.originalFileName.toLowerCase().includes(inputText.toLowerCase()) &&
                        <OneTrack track={track} index={index} key={index}/>)
                    : ""}
            </div>
        </div>
    )
}
export default connect(
    (state) => ({
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
