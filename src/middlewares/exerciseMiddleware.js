export const exerciseMiddleware = (store)=>{
    return (next) =>{
        return async(action)=>{
            const {payload} = action
            switch(action.type){
                case "ADD_HEP":
                    console.log(payload,"inside exerciseMW")
                    const res = await fetch('http://localhost:1337/api/addExercise',{
                        method: 'POST',
                        headers : {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            email:payload.emailState,
                            exercisesArray:payload.HEP
                        })
                    })
                    const data = await res.json()
                    return data;
                case "DELETE_HEP":
                    console.log(payload,"inside delete MW")
                    const resp = await fetch('http://localhost:1337/api/deleteExercise',{
                        method: 'POST',
                        headers : {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            email:payload.email,
                            index:payload.index
                        })
                    })
                    const deletedData = await resp.json()
                    return deletedData;
                default:
                    next(action)
                    break;
            }
            
        }
    }
}