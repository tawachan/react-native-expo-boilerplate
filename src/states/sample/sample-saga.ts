import { takeLatest } from "redux-saga/effects";
import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga-extended";
import { sampleActions } from "./sample-actions";

// ReduxSagaのバージョンが上がってSagaIteratorとbindAsyncActionの型が合わなくなっているのでany型でとりあえず置いている
const sampleFetchSamplesAsyncWorker = bindAsyncAction(sampleActions.fetchSamplesAsync)(function*(_: Action<{}>): any {
  // const response = yield call(asyncFunction, someInputs);
  return { text: "Async" };
});

export function* sampleSagaWorkers() {
  yield takeLatest(sampleActions.fetchSamplesAsync.started, sampleFetchSamplesAsyncWorker);
}
