// store.js
import rootReducer from "./reducers";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export {store};
