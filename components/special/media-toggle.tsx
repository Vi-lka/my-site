"use client"

import { type IMAGES } from '@/lib/consts';
import { cn, getStaticImage } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MediaToggleProps {
  photoId: typeof IMAGES[number]["id"];
  videoSrc: string;
  altText: string;
  className?: string
}

const MediaToggle: React.FC<MediaToggleProps> = ({ 
  photoId, 
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

  const image = getStaticImage(photoId)

  return (
    <div className={cn("relative w-full max-w-[600px] aspect-[17/9] group", className)}>
      {showVideo ? (
        <div className={cn("relative w-full h-full", animate && "animate-terminal-glitch")}>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload='auto'
            className="relative w-full h-full object-cover rounded-md cursor-pointer group-hover:p-1 group-hover:ring ring-offset-1 ring-ring ring-offset-background/30 dark:ring-offset-background transition-all z-2"
          >
            <source src={videoSrc}/>
          </video>
          <LoaderCircle className='animate-spin text-violet drop-shadow-xs absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-1' />
          <Image
            src={image}
            alt={altText}
            width={600}
            height={338}
            placeholder="blur"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md cursor-pointer group-hover:p-1 group-hover:ring ring-offset-1 ring-ring ring-offset-background/30 dark:ring-offset-background transition-all z-0"
          />
        </div>
      ) : (
        <div className={cn("w-full h-full", animate && "animate-terminal-glitch")}>
          <Image
            src={image}
            alt={altText}
            width={600}
            height={338}
            placeholder="blur"
            className="w-full h-full object-cover rounded-md cursor-pointer group-hover:p-1 group-hover:ring ring-offset-1 ring-ring ring-offset-background/30 dark:ring-offset-background transition-all"
            onClick={handleToggle}
          />
        </div>
      )}
    </div>
  );
};

export default MediaToggle;