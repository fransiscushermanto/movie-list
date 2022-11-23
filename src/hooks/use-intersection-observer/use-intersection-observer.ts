import { useEffect, useMemo } from "react";

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
  enabled = false,
}: {
  root?: any;
  target: any;
  onIntersect: any;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}) {
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            console.log("entry", entry);
            entry.isIntersecting && onIntersect();
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
