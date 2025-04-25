import { useEffect, useState } from 'react';

const useSticky = (elementRef: React.RefObject<HTMLElement | null>) => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const checkSticky = () => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      const top = parseFloat(style.top) || 0;
      
      // Элемент считается "прилипшим", если его верхняя граница достигла значения top от верха viewport
      const isElementSticky = rect.top <= top && style.position === 'sticky';
      setIsSticky(isElementSticky);
    };

    const observer = new IntersectionObserver(
      () => {
        checkSticky();
      },
      {
        threshold: [0, 1],
        rootMargin: '0px',
      }
    );

    observer.observe(element);
    
    // Дополнительно проверяем при скролле, так как IntersectionObserver может не сработать в некоторых случаях
    window.addEventListener('scroll', checkSticky);
    
    return () => {
      observer.unobserve(element);
      window.removeEventListener('scroll', checkSticky);
    };
  }, [elementRef]);

  return isSticky;
};

export default useSticky;