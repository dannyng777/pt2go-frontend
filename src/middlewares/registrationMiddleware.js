export const registrationMiddleware = (store)=>{
    return (next)=>{
        return async(action)=>{
            switch (action.type) {
                case "REGISTER_USER":
                    const {payload} = action
                    const res = await fetch('http://localhost:1337/api/register',{
                        method: 'POST',
                        headers : {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            firstname:payload.firstname,
                            lastname:payload.lastname,
                            email:payload.email,
                            password:payload.password,
                            occupation:payload.occupation
                        })
                    })
                // const data = await res.json()
                // console.log(data)
                default:
                    next(action)
                    break;
            }
        }
    }
}