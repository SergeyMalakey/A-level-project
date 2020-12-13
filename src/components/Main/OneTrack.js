import React, {useEffect, useRef} from "react";
import actionCreatorCurrentTrack from "../../actioncreators/actionCreatorCurrentTrack";
import store from "../../store/store";
import {connect} from "react-redux";
import actionCreatorDeleteTrack from "../../actioncreators/actionCreatorDeleteTrack";

const OneTrack = (props)=>{
    let style = {}
    if (props.index===props.currentIndex % props.currentPlayListLength){
        style = {
            color:"chartreuse"
        }
    }
    useEffect(() => {
        if(props.index===props.currentIndex % props.currentPlayListLength){
            ref.current.scrollIntoView()
        }
    }, )
    const ref = useRef()
    return(
        <div className={"main__track-current"} ref={ref} style={style}>
            <div onClick={() => {
                store.dispatch(actionCreatorCurrentTrack(props.track._id, props.index))
            }}>
                {props.track && props.track.originalFileName.includes(".mp3") ?
                    props.track.originalFileName.split(".mp3")[0]
                    :
                    props.track.originalFileName
                }
            </div>
            <div
                onClick={() =>
                    store.dispatch(actionCreatorDeleteTrack(
                        props.currentPlayListTracksArr,
                        props.index,
                        props.currentPlayListId
                    ))
                }
            >x</div>
        </div>
    )
}
export default connect(
    (state)=>({
        currentIndex:state.currentSongReducer.index,
        currentPlayListLength:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne.tracks.length,
        currentPlayListId:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne._id,
        currentPlayListTracksArr:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne.tracks,

        })
    ,
    null
)(OneTrack)