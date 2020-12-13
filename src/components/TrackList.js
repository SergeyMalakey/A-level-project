import React, {useState} from "react"
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
    }
    return(
        <div className={"track-list"}>
            <button onClick={()=>showMeTracks()}>{"request"}</button>
            {backData.map((item,index)=>
                item.url!=null?
                <p
                    key={index}
                    onClick={()=>
                        item.originalFileName != null && item.url != null ?
                        store.dispatch(actionCreatorIndexOfCurrentTrack(item.originalFileName, item.url,index )):""
                    }>
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