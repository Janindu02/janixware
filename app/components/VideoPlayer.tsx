"use client";

import { useState, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    setShowControls(true);
    // Hide controls after 3 seconds
    setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={`${className} cursor-pointer`}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={handleVideoClick}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      />
      {/* Stop Button - Shows when playing and controls are visible */}
      {isPlaying && showControls && (
        <button
          onClick={handleStop}
          className="absolute bottom-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 sm:p-2 transition-all z-10 backdrop-blur-sm"
          aria-label="Stop video"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      )}
      {/* Play Button - Shows when paused/stopped and controls are visible */}
      {!isPlaying && showControls && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors z-10"
          aria-label="Play video"
        >
          <div className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-2.5 transition-all backdrop-blur-sm">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

