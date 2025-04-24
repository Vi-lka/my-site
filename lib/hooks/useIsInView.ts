import { useEffect, useState } from 'react';

const useIsInView = (ref: React.RefObject<HTMLElement | null>, options?: IntersectionObserverInit): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      options
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);

  return isInView;
};

export default useIsInView;