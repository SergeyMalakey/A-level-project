import React from "react"
import store from "../../store/store"
import actionCreatorCurrentPlayList from "../../actioncreators/actionCreatorCurrentPlaylist";
import {connect} from "react-redux";

const PlaylistsOne=(props)=>{
let style={}
    if (props.currentPlaylistId === props.id){
        style = {
            color:"chartreuse"
        }
    }
    return(
        <div className={"playlist-one"} style={style}
        onClick={()=>{store.dispatch(actionCreatorCurrentPlayList(props.id))
        console.log(props.id)}
        }
        >
            {props.name + " "}

        </div>
)
}
export default
connect(
    state=>({
        currentPlaylistId:
            state.promiseReducer &&
            state.promiseReducer.сurrentPlayList &&
            state.promiseReducer.сurrentPlayList.payload &&
            state.promiseReducer.сurrentPlayList.payload.data &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne &&
            state.promiseReducer.сurrentPlayList.payload.data.PlaylistFindOne._id

    })
)(PlaylistsOne)

