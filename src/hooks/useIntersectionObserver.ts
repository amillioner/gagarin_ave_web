import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  freezeOnceVisible?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<Element>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | undefined;
}

export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = '0px',
  root = null,
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const ref = useRef<Element>(null);

  const frozen = useRef(false);

  const updateEntry = useCallback(
    ([entry]: IntersectionObserverEntry[]): void => {
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);

      if (freezeOnceVisible && entry.isIntersecting) {
        frozen.current = true;
      }
    },
    [freezeOnceVisible]
  );

  useEffect(() => {
    const node = ref.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen.current || !node) return;

    const observerParams = { threshold, rootMargin, root };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, root, updateEntry]);

  return { ref, isIntersecting, entry };
};
