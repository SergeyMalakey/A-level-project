import React from "react"
import PlaylistsOne from "./playlistOne";

const PlaylistsAll=(props)=>{
    return(
        <div className={"playlist-all"}>
            <p>All Playlists:</p>
            {props.allPlaylists.map((item,key)=><PlaylistsOne name={item.name} id={item._id} desсription={item.description} key={key}/>)}
        </div>
    )
}
export default PlaylistsAll