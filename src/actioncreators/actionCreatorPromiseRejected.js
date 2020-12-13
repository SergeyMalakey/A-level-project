const actionCreatorPromiseRejected = (name,error)=>{
    return {
        type:"PROMISE",
        status:"REJECTED",
        payload:null,
        error,
        name

    }}
export default actionCreatorPromiseRejected
