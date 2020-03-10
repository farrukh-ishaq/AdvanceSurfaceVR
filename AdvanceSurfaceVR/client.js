// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
// Add Module and Surface so we can call Native-Module and shapes
import { ReactInstance, Module, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new surfaceModule()],
    ...options
  });
  //create a variable to get the local state of shape then use in function changeSurfaceType
  surface = r360.getDefaultSurface();
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("AdvanceSurfaceVR", {
      /* initial props */
    }),
    //r360.getDefaultSurface()
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

class surfaceModule extends Module {
  constructor() {
    super("surfaceModule");
  }

  changeSurfaceType(Type) {
    Type === "Flat"
      ? surface.setShape(Surface.SurfaceShape.Flat)
      : surface.setShape(Surface.SurfaceShape.Cylinder);
  }
}

window.React360 = { init };
