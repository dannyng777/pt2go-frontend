import { configureStore } from '@reduxjs/toolkit'
import { loginMiddleware } from '../middlewares/loginMiddleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { logoutMiddleware } from '../middlewares/logoutMiddleware';
import { registrationMiddleware } from '../middlewares/registrationMiddleware';
import { exerciseMiddleware } from '../middlewares/exerciseMiddleware';
import combinedReducers from './reducers/combinedReducers';


const persistConfig = {
    key: "main-root",
    storage
}

const persistedReducer = persistReducer(persistConfig,combinedReducers)

const store = configureStore({
    reducer:persistedReducer,
    devTools:process.env.NODE_ENV !== 'production',
    middleware:[
        loginMiddleware,
        logoutMiddleware,
        registrationMiddleware,
        exerciseMiddleware
    ]
}) 

const Persistor = persistStore(store)

export {Persistor};
export default store;
