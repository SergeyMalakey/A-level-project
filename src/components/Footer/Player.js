import React from "react"
import {connect} from "react-redux";
import store from "../../store/store";
import actionCreatorCurrentTrack from "../../actioncreators/actionCreatorCurrentTrack";

const Player = (props)=>{
    function prevTrack() {
        let mathPain =(props.currentPlaylistArr.length + (props.index - 1)%props.currentPlaylistArr.length)%props.currentPlaylistArr.length
       store.dispatch(actionCreatorCurrentTrack(props.currentPlaylistArr[mathPain]._id, mathPain))
    }
    function nextTrack() {
        store.dispatch(actionCreatorCurrentTrack(props.currentPlaylistArr[(props.index+1) % props.currentPlaylistArr.length]._id, props.index+1))
    }
    return(
        <div className={"footer"}>
            <div className={"footer-player"}>
                <button onClick={
                    () => prevTrack()

                }
                    style={{outline:"none"}}
                    disabled={props.index===undefined}
                >
                    prev
                </button>
                <audio id="audio" src={"/"+props.currentTrackUrl}
                       preload="auto"
                       controls="controls"
                       autoPlay={true}
                       onEnded={()=>nextTrack()}
                       style={{outline:"none"}}
                >
                </audio>
                <button
                    onClick={
                    () => nextTrack()
                    }
                    disabled={props.index===undefined}
                    style={{outline:"none"}}
                >
                    next
                </button>
            </div>

        </div>
    )
}
export default connect(
    (state)=>({
        currentTrackUrl:
            state.promiseReducer &&
            state.promiseReducer.сurrentTrack &&
            state.promiseReducer.сurrentTrack.payload &&
            state.promiseReducer.сurrentTrack.payload.data &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.url,
        currentTrackName:
            state.promiseReducer &&
            state.promiseReducer.сurrentTrack &&
            state.promiseReducer.сurrentTrack.payload &&
            state.promiseReducer.сurrentTrack.payload.data &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.originalFileName,
        currentPlaylistArr:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne.tracks,
        index:
            state.currentSongReducer &&
            state.currentSongReducer.index,
    }),
    null
)(Player)
