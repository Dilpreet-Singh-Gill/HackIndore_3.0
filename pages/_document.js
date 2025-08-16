import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/assets/hackindore.png" />
                <link rel="shortcut icon" href="/assets/hackindore.png"></link>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Overpass:wght@500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
