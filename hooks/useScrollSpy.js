import { useEffect, useState } from "react";

const useScrollSpy = (sections, offset = 0) => {
    const [currentSection, setCurrentSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset + offset;

            const current = sections.find((section) => {
                const sectionElement = document.getElementById(section);
                if (!sectionElement) return false; // ✅ safeguard

                const sectionTop = sectionElement.offsetTop - offset;
                const sectionBottom = sectionTop + sectionElement.offsetHeight;
                return (
                    sectionTop <= currentPosition && sectionBottom > currentPosition
                );
            });

            setCurrentSection(current || null);
        };

        handleScroll(); // run once on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections, offset]);

    return currentSection;
};

export default useScrollSpy;
