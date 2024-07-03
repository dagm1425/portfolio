"use client";

import React, { lazy, Suspense, useEffect, useState } from "react";

interface BlobProps {
  setIsBlobLoading: (value: boolean) => void;
}

const Spline = lazy(() => delay(import("@splinetool/react-spline")));

const delay = async (promise: Promise<any>) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1700);
  }).then(() => promise);
};

const Blob: React.FC<BlobProps> = ({ setIsBlobLoading }) => {
  const [width, setWidth] = useState<number>(0);
  const scene =
    width < 768
      ? "https://prod.spline.design/4fw6UsesTpkABa3N/scene.splinecode"
      : width < 1024
        ? "https://prod.spline.design/8TpjCUqUDCKdBWU4/scene.splinecode"
        : width < 1440
          ? "https://prod.spline.design/hITryAhlvsA20UJ0/scene.splinecode"
          : "https://prod.spline.design/0Fktb5VBB3QzS3Aw/scene.splinecode";

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-6 md:-mt-28 lg:-mt-32 xl:-mt-20 h-[60%] md:h-auto">
      <Suspense fallback={null}>
        <Spline scene={scene} onLoad={() => setIsBlobLoading(false)} />
      </Suspense>
    </div>
  );
};

export default Blob;
