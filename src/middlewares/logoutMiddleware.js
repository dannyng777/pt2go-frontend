export const logoutMiddleware = (store)=>{
    return (next)=>{
        return async(action)=>{
            switch (action.type) {
                case "LOGOUT_USER":
                    store.dispatch({type:"RESET_STATE"})
                    break;
                default:
                    next(action)
                    break;
            }
        }
    }
}