// Metadata.js
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Metadata = () => {
  const jsonData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Joseph Thomas",
    jobTitle: "React, WordPress, and SEO Developer",
    url: "https://freelancewebdesignusa.com/",
    sameAs: [
      "https://www.linkedin.com/in/-joseph-thomas/",
      "https://github.com/joseph1mont",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "9745 Touchton Road",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "USA",
    },
    email: "info@freelancewebdesignusa.com",
    telephone: "904-962-5999",
    image: "https://freelancewebdesignusa.com/images/joseph-face.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Freelance Web Design USA LLC",
      legalStructure: "LLC",
      url: "https://freelancewebdesignusa.com/",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Aleppo University",
      url: "https://www.alepuniv.edu.sy/",
    },
    knowsAbout: [
      "React",
      "WordPress",
      "Search Engine Optimization (SEO)",
      "Web Design",
    ],
    description:
      "Freelance Web Developer, React, WordPress, and SEO based in Jacksonville, FL. Dedicated to creating engaging and optimized web experiences.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://freelancewebdesignusa.com/",
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonData)}</script>
      </Helmet>
    </HelmetProvider>
  );
};

export default Metadata;
