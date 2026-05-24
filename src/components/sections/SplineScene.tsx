"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

export const SPLINE_SCENE_URL =
  "https://prod.spline.design/iLC2K4OQVWzuB7tg/scene.splinecode";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-white/60" />
      </div>
    ),
  },
);

type SplineSceneProps = {
  className?: string;
  onLoad?: () => void;
};

export function SplineScene({ className, onLoad }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative h-full w-full", className)}>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000 ease-out",
          loaded ? "opacity-100" : "opacity-0",
        )}
      >
        <Spline
          scene={SPLINE_SCENE_URL}
          className="h-full w-full"
          onLoad={() => {
            setLoaded(true);
            onLoad?.();
          }}
        />
      </div>

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/15" />
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
          </div>
        </div>
      )}
    </div>
  );
}
