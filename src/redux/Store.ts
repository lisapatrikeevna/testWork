import {combineReducers, createStore} from "redux";
import { CounterReducer } from "./CounterReduser";

const rootReduser = combineReducers({
counter:CounterReducer
})
type  rootReducerType= typeof rootReduser
export type storeType =ReturnType<rootReducerType>
let store =createStore(rootReduser)
// @ts-ignore
window.store = store
export default store;