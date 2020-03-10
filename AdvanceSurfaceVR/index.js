import React from "react";
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  VrButton,
  Text,
  View
} from "react-360";

const surfaceModule = NativeModules.surfaceModule;

export default class AdvanceSurfaceVR extends React.Component {
  state = {
    width: 1000,
    height: 600
  };

  render() {
    return (
      <View
        style={[
          styles.panel,
          { width: this.state.width, height: this.state.height }
        ]}
      >
        <VrButton
          style={styles.greetingBox}
          onClick={() => surfaceModule.resizeSurface(500, 300)}
        >
          <Text>Change Dim.</Text>
        </VrButton>

        <VrButton
          style={styles.greetingBox}
          onClick={() => surfaceModule.changeSurfaceType("Flat")}
        >
          <Text>Flat</Text>
        </VrButton>

        <VrButton
          style={styles.greetingBox}
          onClick={() => surfaceModule.changeSurfaceType("Cylinder")}
        >
          <Text>Cylinder</Text>
        </VrButton>

        <VrButton style={styles.greetingBox}>
          <Text>Reset</Text>
        </VrButton>

        <VrButton style={styles.greetingBox}>
          <Text style={styles.greeting}>Destroy</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    // width: 1000,
    // height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    width: 200,
    height: 60,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  },
  buttonPanel: {
    width: 300,
    height: 300,
    backgroundColor: "rgb(255,127,80)",
    justifyContent: "center",
    alignItems: "center"
  }
});

AppRegistry.registerComponent("AdvanceSurfaceVR", () => AdvanceSurfaceVR);
