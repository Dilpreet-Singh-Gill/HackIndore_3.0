import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// container size should not depend on these elements as they will mount with delays

const TransitionElement = ({ animationClass = "fade", loaderDelay = 2000, mountDelay = 0, children, As = 'div' }) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <TransitionGroup component={null}>
            {isMounted &&
                (Array.isArray(children) ? (
                    children.map((item, i) => (
                        <CSSTransition mountOnEnter={false} key={i} classNames={animationClass} timeout={loaderDelay}>
                            <As style={{ transitionDelay: `${i + 1}00ms` }}>{item}</As>
                        </CSSTransition>
                    ))) : (
                    <CSSTransition classNames={animationClass} timeout={loaderDelay}>
                        {children}
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    );
}

export default TransitionElement;