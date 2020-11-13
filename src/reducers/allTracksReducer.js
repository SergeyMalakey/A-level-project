const initialState = {}

const allTracksReducer = (state=initialState, action)=>{

    if(action.type === "ADD_TRACK"){
        return {originalFileName: "",artist: '',genre: '',year: ''}  // action
    }
    /*if(action.type==="ALL_TRACKS"){
        return [...state,
            {
                originalFileName:action.url,
                artist:"" ,
                genre: "",
                year: "",
            }

        ]
    }*/
    if(action.type==="ALL_TRACKS"){
        debugger;
        return action.arrayAllSongs
        /*[

            {
                originalFileName:action.arrayAllSongs.originalFileName,
                url:action.arrayAllSongs.url,
                artist: action.arrayAllSongs.id3 != null && action.arrayAllSongs.id3.genre!=null? action.arrayAllSongs.id3.artist:"--" ,
                genre: action.arrayAllSongs.id3 != null && action.arrayAllSongs.id3.artist!=null? action.arrayAllSongs.id3.genre:"--" ,
                year: action.arrayAllSongs.id3 != null && action.arrayAllSongs.id3.year!=null? action.arrayAllSongs.id3.year:"--" ,
            }

        ]*/

       /* {
            originalFileName: action.arrayAllSongs[].originalFileName,
            url:
        }*/
    }

    return state
}
export default allTracksReducer
