import { styled } from "styled-components";
import Container from "../components/Container";

const AboutWrapper = styled.section`
  text-align: center;
`;
const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 1.5rem;
`;

const About = () => {
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: "9745 Touchton Road",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32246",
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joseph Thomas",
    jobTitle: "Freelance Web Developer",
    address: postalAddress,
    description:
      "Freelance Web Developer, React, WordPress, and SEO based in Jacksonville, FL. Dedicated to creating engaging and optimized web experiences.",
  };

  return (
    <AboutWrapper>
      <Container>
        <h1>Freelance Web Developer in Jacksonville, FL | Joseph Thomas</h1>
        <Paragraph>
          Greetings! I'm Joseph Thomas, a seasoned freelancer shaping the web
          since 2005, from the early days of WordPress to embracing ReactJS in
          2019. Based in Jacksonville, Florida, I specialize in SEO, automation,
          and crafting user interfaces that blend aesthetics with functionality.
        </Paragraph>
        <Paragraph>
          This digital odyssey has witnessed the evolution of WordPress and the
          transformative entry into ReactJS. As a perpetual learner, I thrive on
          challenges, optimizing websites, automating processes, and sculpting
          seamless interfaces with a passion for excellence.
        </Paragraph>
        <Paragraph>
          This website is more than a showcase; it's a fusion of experience and
          innovation. Explore, connect, and join me on a collaborative journey
          to bring your digital visions to life. The web is our canvas, and I'm
          here to paint it with endless possibilities.
        </Paragraph>

        {/* JSON-LD Script Block */}
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Container>
    </AboutWrapper>
  );
};

export default About;
