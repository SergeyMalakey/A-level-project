import React, {useEffect, useState} from "react"
import store from "../../store/store"
import PlaylistsAll from "./playlistsAll";
import actionCreatorTracklistFind from "../../actioncreators/actionCreatorTracklistFind";
import {connect} from "react-redux";
import actionCreatorAllSongs from "../../actioncreators/actionCreatorAllSongs";
import AllPlaylists from "../../reducers/AllPLaylistsReducer";
import actionCreatorAllPlaylistFind from "../../actioncreators/actionCreatorAllPlayListFind";
import getGQL from "../../commonThings/getGQL";
import actionCreatorPromise from "../../actioncreators/actionCreatorPromise";
import gql from "../../commonThings/gql";
import promiseReducer from "../../reducers/promiceReducer";
import Preloader from "../../commonThings/preloader";
import actionCreatorAllPlaylists from "../../actioncreators/actionCreatorAllPlaylists";
import actionCreatorCurrentPlayList from "../../actioncreators/actionCreatorCurrentPlaylist";
import actionCreatorAddNewPlaylist from "../../actioncreators/actionCreatorAddNewPlaylist";

const Aside =(props)=>{

    const [inputValue,setInputValue] = useState("")
    const [addButton,setAddButton] = useState(false)
useEffect(()=>{
    store.dispatch(actionCreatorAllPlaylists(props.id))
    store.dispatch(actionCreatorCurrentPlayList())//загрузка последнего плейлиста
},[])

    let timeOut = null
    useEffect(()=>{

        clearTimeout(timeOut)

        timeOut = setTimeout(function () {
            console.log(inputValue)
        },2000)

    },[inputValue])






    return(
        <div className={"aside"}>
            Your playlists:
            {props.status==="RESOLVED" && props.allPlaylists ?
                <PlaylistsAll allPlaylists={ props.allPlaylists/*.filter(playlist=>playlist.name.includes(inputValue))*/} id={props.id}/>:
                <Preloader/>
            }
            <button
                onClick={()=>{setAddButton(!addButton)}}
            >
                { !addButton ? "Add new playlist": "close"}
            </button>
            {addButton &&   <div>
                <input
                    type={"text"}
                    placeholder={"write name"}
                    onChange={(e)=>{
                        setInputValue(e.target.value)



                        }}
                />
                <button
                    disabled={inputValue.length<2}
                    onClick={
                        () => {
                        store.dispatch(actionCreatorAddNewPlaylist(inputValue, props.id))
                        setInputValue("")
                        setAddButton(!addButton)
                        }
                    }
                >
                    create
                </button>
            </div>
            }
        </div>
    )
}
export default connect(
    state=>({
        status: state.promiseReducer && state.promiseReducer.allPlaylists && state.promiseReducer.allPlaylists.status,
        allPlaylists:
            state.promiseReducer &&
            state.promiseReducer.allPlaylists &&
            state.promiseReducer.allPlaylists.payload &&
            state.promiseReducer.allPlaylists.payload.data &&
            state.promiseReducer.allPlaylists.payload.data.PlaylistFind,
        id:
            state.authReducer &&
            state.authReducer.data &&
            state.authReducer.data.sub.id,
    })
)(Aside)

