import React, { Dispatch } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect, Provider } from "react-redux";
import { Action } from "typescript-fsa";
import { sampleActions } from "./src/states/sample/sample-actions";
import { SampleState } from "./src/states/sample/sample-reducer";
import { AppState, store } from "./src/states/store";

interface BaseProps {
  samples: SampleState;
  fetchSamplesAsync: () => Action<void>;
  fetchSamplesSync: () => Action<void>;
}

export default class App extends React.Component<{}> {
  public render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <ConnectedBase />
        </Provider>
      </View>
    );
  }
}

class Base extends React.Component<BaseProps> {
  public render() {
    const { fetchSamplesAsync, fetchSamplesSync, samples } = this.props;
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            padding: 10,
          }}
        >
          <Text>Thank you for trying </Text>
          <Text>react-native-expo-boilerplate</Text>
          <Text> with TypeScript!</Text>
          <Text />
          <Text>This boilerplate already implements </Text>
          <Text>the libraries below:</Text>
          <View style={{ margin: 5 }}>
            <Text>- Redux</Text>
            <Text>- Redux Saga</Text>
            <Text>- tslint</Text>
            <Text>- prettier</Text>
          </View>
        </View>
        <Button title="Async" onPress={() => fetchSamplesAsync()} />
        <Button title="Sync" onPress={() => fetchSamplesSync()} />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            padding: 10,
            borderColor: "blue",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "grey" }}>Value of State</Text>
          <Text style={{ fontWeight: "bold" }}>{samples.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(state: AppState) {
  return {
    samples: state.samples,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    fetchSamplesAsync() {
      dispatch(sampleActions.fetchSamplesAsync.started({}));
    },
    fetchSamplesSync() {
      dispatch(sampleActions.fetchSamplesSync({}));
    },
  };
}

const ConnectedBase = connect(
  mapStateToProps,
  mapDispatchToProps
)(Base);
