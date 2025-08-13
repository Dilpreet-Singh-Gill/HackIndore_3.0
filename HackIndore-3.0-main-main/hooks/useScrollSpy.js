import { useEffect, useState } from "react";

const useScrollSpy = (sections, offset = 0) => {
    const [currentSection, setCurrentSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset + offset;
            const currentSection = sections.find((section) => {
                const sectionElement = document.getElementById(section);
                const sectionTop = sectionElement.offsetTop - offset;
                const sectionBottom = sectionTop + sectionElement.offsetHeight;
                return sectionTop <= currentPosition && sectionBottom > currentPosition;
            });

            setCurrentSection(currentSection ? currentSection : null);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections, offset]);

    return currentSection;
};

export default useScrollSpy;