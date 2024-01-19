import React, { useLayoutEffect } from "react";
// import { Application } from '@splinetool/runtime';
import Spline from "@splinetool/react-spline";

interface BlobProps {
  setIsBlobLoading: (value: boolean) => void,
}

const Blob: React.FC<BlobProps>  = ({ setIsBlobLoading }) => {
  // useLayoutEffect(() => {
  //   const canvas = document.getElementById("canvas3d");
  //   const app = new Application(canvas as HTMLCanvasElement);
  //   app.load("https://prod.spline.design/bQ3rzDEw1IxhGK5A/scene.splinecode");
  // }, []);
  
  return (
    <div>
      {/* <canvas id="canvas3d"></canvas> */}
      <Spline scene="https://prod.spline.design/bQ3rzDEw1IxhGK5A/scene.splinecode" onLoad={() => setIsBlobLoading(false)}/>
    </div>
  );
};

export default Blob;