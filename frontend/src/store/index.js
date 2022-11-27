import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { quizReducer } from "./reducers/quizReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
