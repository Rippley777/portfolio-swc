import { useEffect, useState } from "react";

const useInView = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // console.log({ isIntersecting });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useInView;
