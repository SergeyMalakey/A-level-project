import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import DropZone from "../DropZone";

const DescriptionCurrentSong=(props)=>{
/*debugger;*/
    return(
        <div className={"main__description"}>
            <div className={"main__description__description-song"}>

                <div className={"main__description__description-song-name"}>
                    <div >{props.title ||"Мелани" }</div>
                    <div>{props.artist || "Ассаи"}</div>
                </div>
                <div className={"main__description__description-song-teg"}>
                    <div> album: {props.album    || "Аврора опа"}</div>
                    <div>genre: {props.genre || "Hip-Hop"}</div>
                </div>
            </div>
            <DropZone/>


        </div>
    )
}


export default connect(
    (state)=>({

        album:
            state.promiseReducer.сurrentTrack &&
            state.promiseReducer.сurrentTrack.payload &&
            state.promiseReducer.сurrentTrack.payload.data &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3 &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3.album ,
        artist:
            state.promiseReducer.сurrentTrack &&
            state.promiseReducer.сurrentTrack.payload &&
            state.promiseReducer.сurrentTrack.payload.data &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3 &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3.artist ,
        genre:
            state.promiseReducer.сurrentTrack &&
            state.promiseReducer.сurrentTrack.payload &&
            state.promiseReducer.сurrentTrack.payload.data &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3 &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3.genre ,
        title:
            state.promiseReducer.сurrentTrack &&
            state.promiseReducer.сurrentTrack.payload &&
            state.promiseReducer.сurrentTrack.payload.data &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3 &&
            state.promiseReducer.сurrentTrack.payload.data.TrackFindOne.id3.title ,
    })
    ,
    null
)(DescriptionCurrentSong)

