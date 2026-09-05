import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBarBoots";
import SocialSideBar from "@/components/LeftSideBar/LeftSideBar";
import PreLoader from "@/components/Preloader/Preloader";
import styled from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { defaultSeoConfig, jsonLd } from "@/util/seo";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import useScrollToCurrentHash from './../hooks/useScrollToCurrentHash';

const inProduction = (process.env.NODE_ENV === "production");

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const App = ({ Component, pageProps }) => {

    const [loading, setLoading] = useState(true);

    useScrollToCurrentHash(loading);

    return (
        <>
            <DefaultSeo {...defaultSeoConfig} />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="color-scheme" content="dark light" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Script
                src="https://kit.fontawesome.com/a076d05399.js"
                crossorigin="anonymous"
            />

            {loading && inProduction && (
                <PreLoader setLoading={setLoading} />
            )}
            <StyledContent>
                <div className="crtOverlay" aria-hidden="true" />
                <NavBar />
                <SocialSideBar />

                <main className='mainComponent'>
                    <Component {...pageProps} />
                    <Footer />
                </main>

            </StyledContent>
        </>
    );
}

export default App;
