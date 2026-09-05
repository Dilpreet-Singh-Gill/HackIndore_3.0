import Link from "next/link";
import { NextSeo } from "next-seo";
import { siteUrl } from "@/util/seo";

const NotFound = () => (
  <section
    style={{
      minHeight: "55vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      textAlign: "center",
      padding: "4rem 1.25rem",
    }}
  >
    <NextSeo
      title="Page not found | HackIndore 4.0"
      description="This page does not exist. Return to the HackIndore 4.0 homepage to register for the 24-hour hackathon at SGSITS Indore."
      canonical={`${siteUrl}/404`}
      noindex
      nofollow
    />
    <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
      404
    </p>
    <h1>Page not found</h1>
    <p>The page you requested is not part of HackIndore 4.0.</p>
    <Link href="/">Back to homepage</Link>
  </section>
);

export default NotFound;
