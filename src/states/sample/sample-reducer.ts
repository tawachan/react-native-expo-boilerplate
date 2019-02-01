import { reducerWithInitialState } from "typescript-fsa-reducers";
import { sampleActions } from "./sample-actions";

export interface SampleState {
  text: string;
}

export const initialState: SampleState = {
  text: "init",
};

export const sampleReducer = reducerWithInitialState(initialState)
  .case(sampleActions.fetchSamplesAsync.done, (state, payload) => {
    return Object.assign({}, state, {
      text: payload.result.text,
    });
  })
  .case(sampleActions.fetchSamplesSync, (state, payload) => {
    return Object.assign({}, state, {
      text: "Sync",
    });
  });
