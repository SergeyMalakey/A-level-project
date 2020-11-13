const actionCreatorPromisePending = (name)=>{
    return {
        type:"PROMISE",
        status:"PENDING",
        payload:null,
        error:null,
        name
    }}
export default actionCreatorPromisePending


