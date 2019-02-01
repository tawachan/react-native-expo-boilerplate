import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("COMMENT");

export const sampleActions = {
  fetchSamplesAsync: actionCreator.async<{}, { text: string }>("FETCH_SAMPLES_ASYNC"),
  fetchSamplesSync: actionCreator<{}>("FETCH_SAMPLES_SYNC"),
};
