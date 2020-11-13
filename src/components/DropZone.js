import {useDropzone} from "react-dropzone";
import React, {useRef,useCallback} from "react";
import actionCreatorPromise from "../actioncreators/actionCreatorPromise";
import {connect} from "react-redux";
import store from "../store/store";
import actionCreatorAddNewPlaylist from "../actioncreators/actionCreatorAddNewPlaylist";
import actionCreatorAddTrackToCurrentPlaylist from "../actioncreators/actionCreatorAddTrackToCurrentPlaylist";


const actionUpload =(formData,arrTracks,idPlaylist)=>actionCreatorPromise("upload",
    fetch('/track', {
        method: "POST",
        headers: localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {},
        body: formData
    }).then(res=>res.json()).then((track)=>store.dispatch(actionCreatorAddTrackToCurrentPlaylist(idPlaylist,arrTracks,track._id)))  )

//
// .then((track)=>console.log(track))
function DropZone(props) {
    let arrTracks = []
    props.arr && props.arr!=null && props.arr.map(item=>arrTracks.push({["_id"]:item._id}))
    const onDrop = useCallback(acceptedFiles => {
        /*debugger;*/
        acceptedFiles.map(file=> {
            let formData = new FormData()
            formData.append("track",file)
            store.dispatch(actionUpload(formData,arrTracks,props.playlistId))
        })

    }, )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div className={"main__description__dropzone"} {...getRootProps()}>
            <input {...getInputProps()} />
            +
        </div>
    )
}

export default connect(
    (state)=>({
        playlistId:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne._id,
        arr:
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne.tracks,
    }),null
)
(DropZone)


/*

function DropZone(props) {
    let arrTracks = []
    props.arr && props.arr!=null && props.arr.map(item=>arrTracks.push({["_id"]:item._id}))
    const onDrop = useCallback(acceptedFiles => {
        debugger;
        acceptedFiles.map(file=> {
            let formData = new FormData()
            formData.append("track",file)
            store.dispatch(actionUpload(formData,arrTracks,props.playlistId))
        })
    }, )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div >add files</div>
            {/!*  {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }*!/}
        </div>
    )
}

*/
