import initialState from "../initialState";

const combinedReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
        return {
          ...state,
          firstname:action.payload.user.firstname,
          lastname:action.payload.user.lastname,
          email:action.payload.user.email,
          isLoggedIn:action.payload.isLoggedIn,
          exercises:action.payload.user.exercises,
          occupation:action.payload.user.occupation
        };
    case "RESET_STATE": //clear redux state
        console.log(action.payload,"inside reducer")
        return {
          ...state, 
          firstname: "", 
          lastname: "", 
          email: "",
          occupation: "",
          isLoggedIn:false,
          exercises:[],
          currentHEP: []
        }
    case "UPDATE_STORE_HEP":
        console.log(action.payload.HEP,'actionpayload')
        return {
          ...state,
          ...{exercises: [...state.exercises, action.payload.HEP]},
          currentHEP: action.payload.HEP
        };
    case "UPDATE_CURRENT_HEP":
        return {
          ...state,
          currentHEP: action.payload.currentHEP

        }
    case "DELETE_REDUX_HEP":
      console.log(state.exercises,"inside deleteReduxHEPREducers")
      console.log(action.payload.index)
        return{
          ...state,
          exercises:[...state.exercises.slice(0,action.payload.index), ...state.exercises.slice(action.payload.index+1)] //slice retain start to end-1 with 2 variables, slice retain what's after variable if only one parameter is present. 
          
        }
    default:
        return state;
  }
};

export default combinedReducers;