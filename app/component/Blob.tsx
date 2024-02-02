import React, { lazy, Suspense } from "react";

interface BlobProps {
  setIsBlobLoading: (value: boolean) => void,
}

const Spline = lazy(() => delay(import('@splinetool/react-spline')));

const delay = (promise: Promise<any>) => {
  return new Promise(resolve => {
    setTimeout(resolve, 2500);
  }).then(() => promise);
}

const Blob: React.FC<BlobProps>  = ({ setIsBlobLoading }) => {
  return (
    <div>
      <Suspense fallback={null}>
        <Spline scene="https://prod.spline.design/y3MVxnwzR8pkGGNa/scene.splinecode" onLoad={() => setIsBlobLoading(false)}/>
      </Suspense>
    </div>
  );
};

export default Blob;