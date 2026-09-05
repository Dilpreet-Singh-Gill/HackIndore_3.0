import { useEffect, useRef } from 'react'

// Fades a section up as it enters the viewport.
//
// The hidden state is applied from JS rather than CSS so that a section can
// never end up permanently invisible: if IntersectionObserver is unavailable,
// motion is reduced, or this effect never runs, the content simply stays as-is.
const useScrollReveal = (delay = 200) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            return;
        }

        element.classList.add('srHidden');

        let timeoutId;
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;

                    observer.unobserve(entry.target);
                    timeoutId = setTimeout(() => {
                        entry.target.classList.add('srVisible');
                        entry.target.classList.remove('srHidden');
                    }, delay);
                }
            },
            // A tiny threshold keeps this reliable for sections taller than the
            // viewport, which can never reach a large intersection ratio.
            { threshold: 0.01, rootMargin: '0px 0px -8% 0px' }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, [delay]);

    return ref;
}

export default useScrollReveal;
