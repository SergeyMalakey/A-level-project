const actionCreatorPromiseResolved = (name,payload)=>{
    return {
        type:"PROMISE",
        status:"RESOLVED",
        payload,
        error:null,
        name
    }}
export default actionCreatorPromiseResolved
