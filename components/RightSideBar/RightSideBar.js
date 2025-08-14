import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './RightSideBar.module.css';
import { rightSideBarText } from "@/util/config";

const mountDelay = 600 + 500;
const loaderDelay = rightSideBarText.length * 100 + 400;
const animationClass = "fadedown";

const RightTopSide = ({ children }) => {
    return (
        <div className={[styles.StyledSideElement, styles.right].join(" ")}>
            {children}
        </div>
    );
};

const RightSideBar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <RightTopSide>
            <ul className={styles.StyledSocialList}>
                <TransitionGroup component={null}>
                    {isMounted && rightSideBarText && rightSideBarText.split("").map((alpha, i) => (
                        <CSSTransition key={i} classNames={animationClass} timeout={loaderDelay}>
                            <li style={{ transitionDelay: `${i + 1}00ms` }} key={i}>
                                <span className={styles.txt}>{alpha}</span>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </RightTopSide>
    )
};

export default RightSideBar;
