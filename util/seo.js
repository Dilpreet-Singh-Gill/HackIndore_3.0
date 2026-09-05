import {
  contactDetails,
  frequentlyAskedQuestions,
  registrationFormLink,
  socialMedia,
} from "@/util/config";

export const siteUrl = "https://www.hackindore.tech";

export const seoTitle =
  "HackIndore 4.0 | 24-Hour Hackathon at SGSITS Indore";

export const seoDescription =
  "Register for HackIndore 4.0, the 24-hour student hackathon by #include Club at SGSITS Indore. 27–28 September 2026. Build real projects, meet mentors, and compete for prizes.";

export const seoKeywords =
  "HackIndore, HackIndore 4.0, hackathon Indore, SGSITS hackathon, #include club, student hackathon India, 24 hour hackathon, Unstop HackIndore, coding competition Indore, Madhya Pradesh hackathon";

export const ogImage = {
  url: `${siteUrl}/images/Team_image2.png`,
  width: 853,
  height: 632,
  alt: "The #include Club team at HackIndore, SGSITS Indore",
  type: "image/png",
};

const faqEntities = frequentlyAskedQuestions.flat(2).map(({ label, content }) => ({
  "@type": "Question",
  name: label,
  acceptedAnswer: {
    "@type": "Answer",
    text: content,
  },
}));

const sameAs = socialMedia
  .map(({ url }) => url)
  .filter((url) => url && !url.startsWith("mailto:"));

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "HackIndore 4.0",
      description: seoDescription,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "#include Club, SGSITS",
      url: `${siteUrl}/`,
      email: contactDetails.email,
      telephone: contactDetails.numbers[0],
      logo: `${siteUrl}/include.png`,
      sameAs,
      address: {
        "@type": "PostalAddress",
        streetAddress: "23, Sir M. Visvesvaraya Marg, Vallabh Nagar",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452003",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "HackIndore 4.0",
      description: seoDescription,
      url: `${siteUrl}/`,
      image: [ogImage.url, `${siteUrl}/assets/hackindore-wordmark.png`],
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      startDate: "2026-09-27T11:00:00+05:30",
      endDate: "2026-09-28T11:00:00+05:30",
      isAccessibleForFree: true,
      inLanguage: "en-IN",
      location: {
        "@type": "Place",
        name: "Shri Govindram Seksaria Institute of Technology and Science",
        address: {
          "@type": "PostalAddress",
          streetAddress: "23, Sir M. Visvesvaraya Marg, Vallabh Nagar",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          postalCode: "452003",
          addressCountry: "IN",
        },
      },
      organizer: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        url: registrationFormLink,
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        validFrom: "2026-09-05T00:00:00+05:30",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqEntities,
    },
  ],
};

export const defaultSeoConfig = {
  title: seoTitle,
  description: seoDescription,
  canonical: `${siteUrl}/`,
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/`,
    siteName: "HackIndore",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage],
  },
  twitter: {
    handle: "@include_sgsits",
    site: "@include_sgsits",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "keywords", content: seoKeywords },
    { name: "author", content: "#include Club, IT Department, SGSITS Indore" },
    { name: "theme-color", content: "#01030e" },
    { name: "application-name", content: "HackIndore" },
    { name: "apple-mobile-web-app-title", content: "HackIndore" },
    { name: "geo.region", content: "IN-MP" },
    { name: "geo.placename", content: "Indore" },
    { name: "geo.position", content: "22.725229;75.869155" },
    { name: "ICBM", content: "22.725229, 75.869155" },
    { property: "og:email", content: contactDetails.email },
    { property: "og:phone_number", content: contactDetails.numbers[0] },
    { property: "og:locality", content: "Indore" },
    { property: "og:region", content: "Madhya Pradesh" },
    { property: "og:country-name", content: "India" },
  ],
  additionalLinkTags: [
    { rel: "icon", href: "/assets/white.png", type: "image/png" },
    { rel: "apple-touch-icon", href: "/assets/white.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
};
