import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux"; 
import {createStore, applyMiddleware, compose} from "redux"; //last 2 required for dev tools/middleware

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //required for devtools

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
<Provider store={store}> 
<App />
</Provider> , document.querySelector("#root"));