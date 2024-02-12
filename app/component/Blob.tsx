"use client";

import React, { lazy, Suspense, useEffect, useState } from "react";

interface BlobProps {
  setIsBlobLoading: (value: boolean) => void,
}

const Spline = lazy(() => delay(import('@splinetool/react-spline')));

const delay = async (promise: Promise<any>) => {
  return new Promise(resolve => {
    setTimeout(resolve, 2500);
  }).then(() => promise);
}

const Blob: React.FC<BlobProps>  = ({ setIsBlobLoading }) => {
  const [isMobile, setIsMobile] = useState(false);
  const scene = isMobile ? "https://prod.spline.design/4fw6UsesTpkABa3N/scene.splinecode" : "https://prod.spline.design/5E-BIdVOIdlIB8g3/scene.splinecode";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className="mt-24 lg:mt-0 h-[60%] lg:h-auto">
        <Suspense fallback={null}>
          <Spline scene={scene} onLoad={() => setIsBlobLoading(false)}/>
        </Suspense>
      </div>
  );
};

export default Blob;