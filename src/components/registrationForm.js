import React, {useEffect, useState} from "react"
import {connect} from 'react-redux';
import store from "../store/store"
import actionCreatorRegistration from "../actioncreators/actionCreatorRegistration";
import actionCreatorFullLogin from "../actioncreators/actionCreatorFullLogin";
import Button from '@material-ui/core/Button';

const RegistrationForm = (props) => {
    const [registrationOrLogin, setRegistrationOrLogin] = useState(true)
    const [inputLogin, setInputLogin] = useState("Windforce")
    const [inputPassword, setInputPassword] = useState("2222")
    const [inputPasswordTwo, setInputPasswordTwo] = useState("")
    let dial
    useEffect(
        () => {
            dial = document.querySelector('#dialog');
            (props.nameHasAlreadyTaken || props.wrongPassword) && dial.showModal()
        }, [props.nameHasAlreadyTaken, props.wrongPassword]
    )
    async function sendLoginPassword(log, pass) {
        !registrationOrLogin ?
            store.dispatch(actionCreatorFullLogin(log, pass)) :
            store.dispatch(actionCreatorRegistration(log, pass))
    }
    return (
        <div className={"registration-form__wrapper"}>
            <div className={"registration-form"}>
                <div
                    style={{fontSize: "20px"}}>{registrationOrLogin ? "Sign up to enjoy the best music player" : "Log in to enjoy the best music player"}</div>
                <Button variant="outlined"
                        onClick={() => setRegistrationOrLogin(!registrationOrLogin)}
                >{registrationOrLogin ? "Have an account? Log in" : "Go to registration"}
                </Button>
                <input
                    id='login'
                    type='text'
                    placeholder="Enter your login"
                    onChange={(e) => setInputLogin(e.target.value)}
                    value={inputLogin}
                />
                <input
                    id='password'
                    type='password'
                    placeholder="Enter your password"
                    onChange={(e) => setInputPassword(e.target.value)}
                    value={inputPassword}
                />
                {registrationOrLogin ? <input
                    id='passwordTwo'
                    type='password'
                    placeholder="Repeat your password"
                    onChange={(e) => setInputPasswordTwo(e.target.value)}
                /> : ""
                }
                <div>{registrationOrLogin ?
                    "Please create your login and password"
                    :
                    "Please log in"
                }</div>
                <Button variant="outlined"
                        onClick={() => {
                            sendLoginPassword(inputLogin, inputPassword)
                        }}
                        disabled={registrationOrLogin ? inputPassword !== inputPasswordTwo || inputLogin.length < 2 || inputPassword.length < 2 :
                            inputLogin.length < 2 || inputPassword.length < 2}
                >ok
                </Button>
            </div>
            <dialog id={"dialog"}>
                <div style={{fontSize: "26px"}}>
                    {registrationOrLogin ? "This name has already taken :( " : "Wrong login or password"}
                </div>
                <div>
                    < Button
                        variant="outlined"
                        onClick={() => dial.close()}>OK
                    </Button>
                </div>
            </dialog>
        </div>
    )
    }
export default connect(
    state=>({
        wrongPassword:
            state.promiseReducer.login && state.promiseReducer.login.payload && state.promiseReducer.login.payload.data.login == null ? true : false,
        nameHasAlreadyTaken:
            state.promiseReducer.registration &&
            state.promiseReducer.registration.payload &&
            state.promiseReducer.registration.payload.data.createUser == null ?
                true : false
    }),
    null
)
(RegistrationForm)






