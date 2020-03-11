// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
// Add Module and Surface so we can call Native-Module and shapes
import { ReactInstance, Module, Surface } from "react-360-web";
//import WebVRPolyfill from "webvr-polyfill";
//const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new surfaceModule()],
    ...options
  });

  buttonSurface = new Surface(300, 300, Surface.SurfaceShape.Flat);
  buttonSurface.setAngle(5, 0);
  r360.renderToSurface(
    r360.createRoot("ButtonSurface", {
      /* initial props */
    }),
    //r360.getDefaultSurface()
    buttonSurface
  );

  //create a variable to get the local state of shape then use in function changeSurfaceType
  // Initiall the width and height are 600,1000 when we call resizeSurface the panel surface change.
  surface = r360.getDefaultSurface();

  // Render your app content to the default cylinder surface
  surfacePanel = r360.renderToSurface(
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

  resizeSurface(width, height) {
    surface.resize(width, height);
  }

  destroyPanel() {
    r360.detachRoot(surfacePanel);
  }

  createPanel() {
    surfacePanel = r360.renderToSurface(
      r360.createRoot("AdvanceSurfaceVR", {
        /* props if required */
      }),
      surface
    );
  }

  changeSurfaceType(Type) {
    Type === "Flat"
      ? surface.setShape(Surface.SurfaceShape.Flat)
      : surface.setShape(Surface.SurfaceShape.Cylinder);
  }
}

window.React360 = { init };
