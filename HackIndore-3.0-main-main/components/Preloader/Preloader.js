import React, { useEffect } from "react";
import styles from "./Preloader.module.css";
import Vara from 'vara';

let vara = null;

const PreLoader = ({ setLoading }) => {

    useEffect(() => {
        if (vara) return;
        vara = new Vara("#vara-container", "fonts/SatisfySL.json",
            [{
                text: "HackIndore 3.0", // String, text to be shown
                fontSize: 35, // Number, size of the text
                strokeWidth: 1.5, // Width / Thickness of the stroke
                color: "white", // Color of the text
                id: "", // String or integer, for if animations are called manually or when using the get() method. Default is the index of the object.
                duration: 2000, // Number, Duration of the animation in milliseconds
                textAlign: "center", // String, text align, accepted values are left,center,right
                x: 0, // Number, x coordinate of the text
                y: 0, // Number, y coordinate of the text
                fromCurrentPosition: { // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
                    x: true, // Boolean
                    y: true, // Boolean
                },
                autoAnimation: true, // Boolean, Whether to animate the text automatically
                queued: true, // Boolean, Whether the animation should be in a queue
                delay: 500,     // Delay before the animation starts in milliseconds
                /* Letter spacing can be a number or an object, if number, the spacing will be applied to every character.
                If object, each letter can be assigned a different spacing as follows,
                letterSpacing: {
                    a: 4,
                    j: -6,
                    global: -1
                }
                The global property is used to set spacing of all other characters
                */
                letterSpacing: 0
            }]
        );
        vara.animationEnd(() => setTimeout(() => setLoading(false), 500));
    }, []);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.vara_container} id="vara-container"></div>
            </div>
        </div>
    );
};
export default PreLoader;
