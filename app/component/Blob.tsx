import React, { useLayoutEffect } from "react";
import { Application } from '@splinetool/runtime';

const Blob = () => {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas as HTMLCanvasElement);
    app.load("https://prod.spline.design/bQ3rzDEw1IxhGK5A/scene.splinecode");
  }, []);
  
  return (
    <div>
      <canvas id="canvas3d"></canvas>
    </div>
  );
};

export default Blob;