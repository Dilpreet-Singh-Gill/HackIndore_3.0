import { useEffect, useRef } from 'react'

const useScrollReveal = (delay = 200, viewFactor = 0.25) => {
    const ref = useRef(null);
    useEffect(() => {
        async function animate() {
            if (ref.current) {
                const scrollreveal = (await import("scrollreveal")).default;
                scrollreveal().reveal(ref.current, {
                    origin: 'bottom',
                    distance: '30px',
                    duration: 500,
                    delay,
                    rotate: { x: 0, y: 0, z: 0 },
                    opacity: 0,
                    scale: 1,
                    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                    mobile: true,
                    reset: false,
                    useDelay: 'always',
                    viewFactor,
                    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
                });
            }
        }
        animate();
    }, []);
    return ref;
}

export default useScrollReveal;