"use client";

import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

function ShimmerLoader() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 overflow-hidden rounded-[inherit] bg-gray-200"
    >
      <span
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
        }}
      />
    </span>
  );
}

export default function Image({ className, style, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className="relative block overflow-hidden rounded-[inherit]"
      style={
        props.fill
          ? { position: "absolute", inset: 0 }
          : { display: "inline-block", width: props.width, height: props.height, ...style }
      }
    >
      {!loaded && <ShimmerLoader />}
      <NextImage
        className={[className, "transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0"].filter(Boolean).join(" ")}
        style={props.fill ? undefined : style}
        sizes={props.sizes || (props.fill ? "100vw" : undefined)}
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          props.onLoad?.(e);
        }}
      />
    </span>
  );
}
