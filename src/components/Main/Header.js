import React from "react"
import actionCreatorLogout from "../../actioncreators/actionCreatorsLogout";
import {connect} from "react-redux";

const Header = (props)=>{
    let MyButton = connect(null,{onClick:actionCreatorLogout})("button")

    return(
        <div className={"header-div"}>
            <p>The best player</p>
            {props.nameLoggedUser==="Guest" ? <p>{props.nameLoggedUser}</p> : <div><MyButton >Log out</MyButton><p>{props.nameLoggedUser}</p></div>}
        </div>
    )
}
export default connect
((state)=>({nameLoggedUser:("data" in state.authReducer && state.authReducer.data.sub.login) || "Guest"}),null)
(Header)


