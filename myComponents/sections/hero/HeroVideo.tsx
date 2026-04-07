"use client";

import { useEffect, useState } from "react";

type HeroVideoProps = {
  videoSrc: string;
  mobileVideoSrc: string;
  posterSrc: string;
};

export default function HeroVideo({
  videoSrc,
  mobileVideoSrc,
  posterSrc,
}: HeroVideoProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback?.(
      () => setShouldLoadVideo(true),
      { timeout: 2000 },
    );

    const timeoutId =
      idleCallback === undefined
        ? window.setTimeout(() => setShouldLoadVideo(true), 1200)
        : undefined;

    return () => {
      if (idleCallback !== undefined) {
        window.cancelIdleCallback?.(idleCallback);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!shouldLoadVideo) {
    return null;
  }

  return (
    <video
      className="absolute inset-0 -z-20 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={posterSrc}
      controls={false}
      aria-hidden="true"
    >
      <source media="(max-width: 768px)" src={mobileVideoSrc} type="video/mp4" />
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
