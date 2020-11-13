import React, {useEffect, useState} from "react"
import Header from "./Header";
import DescriptionCurrentSong from "./descriptionCurrentSong";
import CurrentTrackList from "./CurrentTrackList";


const Main =()=>{

    return(
        <div className={"main"}>

            <Header/>

            <DescriptionCurrentSong/>
            <CurrentTrackList/>


        </div>

    )
}

export default Main