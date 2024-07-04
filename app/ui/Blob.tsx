"use client";

import React, { lazy, Suspense } from "react";
import useViewportWidth from "../lib/useViewportWidth";

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
  const width = useViewportWidth();
  const scene =
    width < 390
      ? "https://prod.spline.design/tqv9arv0-Kft2EXH/scene.splinecode"
      : width < 768
        ? "https://prod.spline.design/4fw6UsesTpkABa3N/scene.splinecode"
        : width < 1024
          ? "https://prod.spline.design/8TpjCUqUDCKdBWU4/scene.splinecode"
          : width < 1440
            ? "https://prod.spline.design/hITryAhlvsA20UJ0/scene.splinecode"
            : "https://prod.spline.design/0Fktb5VBB3QzS3Aw/scene.splinecode";

  return (
    <div className="custom-sm:mt-6 md:-mt-28 lg:-mt-32 xl:-mt-20 custom-sm:h-[60%] md:h-auto">
      <Suspense fallback={null}>
        <Spline scene={scene} onLoad={() => setIsBlobLoading(false)} />
      </Suspense>
    </div>
  );
};

export default Blob;
