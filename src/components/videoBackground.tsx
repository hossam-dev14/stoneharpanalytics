import React from "react";

interface VideoProps {
  src: string,
  muted?: boolean,
  loop?: boolean,
  autoPlay?: boolean,
  playsInline?: boolean
}

const VideoBackground = ({ src, muted = false, loop = true }: VideoProps) => (
  <video
    autoPlay={true}
    playsInline={true}
    muted={muted}
    loop={loop}
    className="absolute inset-0 w-screen h-full -z-1 object-cover opacity-80 pointer-events-none">
    <source src={src} type="video/mp4" />
  </video>
);

export default VideoBackground;
