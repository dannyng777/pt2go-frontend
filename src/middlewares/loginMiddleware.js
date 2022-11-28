export const loginMiddleware = (store)=>{
    return (next)=>{
        return async(action)=>{
            switch (action.type) {
                case "FETCH_USER":
                    const {payload} = action
                    const res = await fetch('https://pt2go-api.onrender.com/api/login',{ //put this into middleware (redux) "dispatch(fetchUser())""
                    method:"POST",
                    headers:{
                    "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        email:payload.email,
                        password:payload.password,
                    })
                })
                const data = await res.json()
                if(data.accountInfo.isLoggedIn){
                    console.log(data,'line 19, login middleWare')
                    //Setting login state with user data
                    store.dispatch({type:"SET_USER_LOGIN",payload:data.accountInfo})
                }
                default:
                    next(action)
                    break;
            }
        }
    }
}