import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { registrationFormLink, resgistrationFormOnClick } from '@/util/config';
import TransitionElement from '../TransitionElement/TransitionElement';
import Social from './Social/Social';
import styles from './NavBarBoots.module.css'
import useScrollSpy from '@/hooks/useScrollSpy';
import Image from 'next/image';

// Name, Route, ref
const hashRoutes = [
    ['Home', '/#'],
    ['Countdown', '/#countdown'],
    // ['Takeaway', '/#keytakeaways'],
    ['Timeline', '/#timeline'],
    ['Process', '/#registrationprocess'],
    ['Note', '/#instructions'],
    ['Sponsors', '/#sponsors'],
    ["FAQs", "/#faq"],
    ['Glimpses', '/#glimpses'],
    ['About', '/#aboutus'],
    ['Contact', '/#contact'],

];
const sections = ['hero', 'countdown', /*'keytakeaways',*/ 'timeline', 'registrationprocess', 'instructions', 'sponsors', 'faq', 'glimpses', 'aboutus', 'contact'];
const logoblack = "/include_com_black.png";
function NavBar() {

    const [expand, setExpand] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isMobile = useMediaQuery('(max-width: 991px)');
    useEffect(() => {
        const onScroll = () => (window.scrollY > 50) ? setScrolled(true) : setScrolled(false);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const currentSection = useScrollSpy(sections, 200);

    useEffect(() => {
        if (currentSection)
            window.history.replaceState({}, "", `#${currentSection}`);
    }, [currentSection]);

    return (
        <Navbar expanded={expand} className={[
            styles.navbar_div, scrolled && styles.scrolled
        ].join(" ")} fixed="top" collapseOnSelect expand="lg" variant='dark'>
            <Container>
                <TransitionElement animationClass='fade' >
                    <Navbar.Brand className={styles.brand} href="/">
                        <Image
                            src="/assets/Hackindore.png"
                            alt="hackathon"
                            sizes="100vw"
                            height={40}
                            width={120}
                            style={{ height: "50px", width: "auto" }}   // ✅ keeps proportions
                            className={styles.logo}
                            priority={true}
                        />

                    </Navbar.Brand>
                    {/* <div className={styles.env}>
                        <code>DEV</code>
                    </div> */}
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className={[styles.navbar_tglbtn, expand ? styles.cross : ""].join(" ")}
                        onClick={() => setExpand(prev => !prev)}
                    />
                </TransitionElement>
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                    <div className={styles.nav_div}>
                        <Nav as='ul' className={styles.nav}>
                            <TransitionElement As='li' animationClass='fadedown'>
                                {hashRoutes.map((route, id) => (
                                    <Nav.Link
                                        key={id}
                                        href={route[1]}
                                        active={currentSection === sections[id]}
                                        onClick={() => {
                                            setExpand(false);
                                        }}
                                        className={styles.navlink}
                                    >{route[0]}</Nav.Link>
                                ))}
                            </TransitionElement>
                        </Nav>
                        {isMobile &&
                            <>
                                <div className='d-flex justify-content-center mt-3' style={{ marginBottom: '4rem' }}>
                                    <a
                                        href={registrationFormLink}
                                        onClick={resgistrationFormOnClick}
                                        target='_blank'
                                        className={styles.regisbtn}
                                    >
                                        Register
                                    </a>
                                </div>
                                <Social />
                            </>
                        }
                    </div>
                </Navbar.Collapse>
                {!isMobile &&
                    <TransitionElement animationClass='fade' >
                        <a
                            href="https://unstop.com/o/lrPx7og?lb=a8UehKVd"
                            onClick={resgistrationFormOnClick}
                            target='https://unstop.com/o/lrPx7og?lb=a8UehKVd'
                            className={styles.regisbtn}
                        >
                            Register
                        </a>
                    </TransitionElement>
                }
            </Container>
        </Navbar>
    );
}

export default NavBar;