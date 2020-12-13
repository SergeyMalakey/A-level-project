import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Player from "./Footer/Player";
import React from "react";

const TheBestPlayer = () => {
    return (
        <div className={"wrapper"}>
            <div className={"main-wrapper"}>
                <Aside/>
                <Main/>
            </div>
            <footer>
                <Player/>
            </footer>
        </div>
    )
}
export default TheBestPlayer