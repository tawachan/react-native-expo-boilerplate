import { all, fork } from "redux-saga/effects";
import { meSagaWorkers } from "src/states/me/me-saga";
import { storySagaWorkers } from "src/states/story/story-saga";
import { commentSagaWorkers } from "./comment/comment-saga";
import { notificationSagaWorkers } from "./notification/notification-saga";
import { storiesSagaWorkers } from "./stories/stories-saga";
import { userSagaWorkers } from "./user/user-saga";

export function* sagaFunctions() {
  yield all([
    fork(storiesSagaWorkers),
    fork(meSagaWorkers),
    fork(storySagaWorkers),
    fork(notificationSagaWorkers),
    fork(commentSagaWorkers),
    fork(userSagaWorkers),
  ]);
}
