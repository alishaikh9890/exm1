import {legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer";

//createStore(reducer, initialState)

export const store = createStore(reducer, {count : 0});


console.log(
    store.subscribe(() => {
        console.log("current redux store value: ", store.getState());
    })
)

