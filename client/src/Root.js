import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = compose;

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk))
      )}
    >
      {children}
    </Provider>
  );
};
