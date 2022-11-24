import { useEffect, useMemo, useRef, useState } from "react";
import useThrottle from "../use-throttle";

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
  intersectThrottle = 500,
  enabled = false,
}: {
  root?: any;
  target: any;
  onIntersect: any;
  threshold?: number;
  intersectThrottle?: number;
  rootMargin?: string;
  enabled?: boolean;
}) {
  const [intersecCount, setIntersecCount] = useState(0);

  const throttle = useThrottle(intersecCount, intersectThrottle);
  const prevThrottle = useRef(throttle);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            entry.isIntersecting && setIntersecCount((prev) => prev + 1);
          }),
        {
          root: root && root.current,
          rootMargin,
          threshold,
        },
      ),
    [root, rootMargin, threshold],
  );

  useEffect(() => {
    if (throttle > 0 && throttle !== prevThrottle.current) {
      onIntersect();
      prevThrottle.current = throttle;
    }
  }, [throttle]);

  useEffect(() => {
    if (!enabled || enabled === undefined) {
      return;
    }

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [enabled]);
}
