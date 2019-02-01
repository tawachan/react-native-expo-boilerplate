import { all, fork } from "redux-saga/effects";
import { sampleSagaWorkers } from "./sample/sample-saga";

export function* sagaFunctions() {
  yield all([fork(sampleSagaWorkers)]);
}
