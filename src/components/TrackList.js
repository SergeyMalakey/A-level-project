import React from "react"
import {useState,useEffect} from "react";
import Player from "./Footer/Player";
import actionCreatorIndexOfCurrentTrack from "../actioncreators/actionCreatorIndexOfCurrentTrack";
import actionCreatorAllSongs from "../actioncreators/actionCreatorAllSongs";
import store from "../store/store";


const getGQL = (url, headers={}) =>
    (query="", variables={}) =>
        fetch(url,
            {method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify({query,variables})
            })
            .then(res => res.json())

/*

const delay = ms=> new Promise (ok=>setTimeout(()=>ok(ms),ms))
delay(5000).then(()=>console.log("sssss"))
const preloader = ()=><img src=''/>
*/
const TrackList = ()=>{
    const [backData,setBackData] = useState([])
    async function showMeTracks() {
        let data = await getGQL(`/graphql`)
        (`
            query allTracks{
            TrackFind(query:"[{}]"){originalFileName url _id id3{artist genre year} }
            }
        `)
        if(data.data && data.data.TrackFind){
            setBackData(data.data.TrackFind)
            store.dispatch(actionCreatorAllSongs(data.data.TrackFind))
        }
        console.log("showME tTracks")
    }
    return(
        <div className={"track-list"}>
            <button onClick={()=>showMeTracks()}>{"request"}</button>
            {backData.map((item,index)=>
                item.url!=null?
                <p
                    key={index}

                   /* onClick={()=>setSongUrl("/"+item.url)}>*/
                    onClick={()=>
                        item.originalFileName != null && item.url != null ?
                        store.dispatch(actionCreatorIndexOfCurrentTrack(item.originalFileName, item.url,index )):""
                    }>
                    {/*{index+1+"."}*/}
                    {item.originalFileName}
                    {item.id3 != null && item.id3.genre!=null? item.id3.genre:" no genre "}
                    {item.id3 != null && item.id3.artist!=null? item.id3.artist:" no artist "}
                    {item.id3 != null && item.id3.year!=null? item.id3.year:" no year "}
                </p>
                :""
            ) }

        </div>
    )
}
export default TrackList