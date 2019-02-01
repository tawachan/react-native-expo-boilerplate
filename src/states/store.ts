import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "remote-redux-devtools";
import { sagaFunctions } from "./saga";
import { sampleReducer, SampleState } from "./sample/sample-reducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export interface AppState {
  samples: SampleState;
}

const store = createStore(
  combineReducers<AppState>({
    samples: sampleReducer,
  }),
  composeEnhancers
);

sagaMiddleware.run(sagaFunctions);

export default store;
