"use client"

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MediaToggleProps {
  photoSrc: string;
  videoSrc: string;
  altText: string;
  className?: string
}

const MediaToggle: React.FC<MediaToggleProps> = ({ 
  photoSrc, 
  videoSrc, 
  altText,
  className
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleToggle = (): void => {
    setAnimate(true);
    setShowVideo(!showVideo);
  };

  // Reset animation state after it completes
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 400); // Match animation duration (400ms)
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className={cn("relative w-full max-w-[600px] aspect-[17/9]", className)}>
      {showVideo ? (
        <div className={cn("w-full h-full", animate && "animate-terminal-glitch")}>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            poster={photoSrc}
            preload='auto'
            className="w-full h-full object-cover rounded-md cursor-pointer hover:p-1 hover:ring ring-offset-1 ring-ring ring-offset-background/30 dark:ring-offset-background transition-all"
          >
            <source src={videoSrc}/>
          </video>
        </div>
      ) : (
        <div className={cn("w-full h-full", animate && "animate-terminal-glitch")}>
          <Image
            src={photoSrc}
            alt={altText}
            width={600}
            height={338}
            className="w-full h-full object-cover rounded-md cursor-pointer hover:p-1 hover:ring ring-offset-1 ring-ring ring-offset-background/30 dark:ring-offset-background transition-all"
            onClick={handleToggle}
          />
        </div>
      )}
    </div>
  );
};

export default MediaToggle;