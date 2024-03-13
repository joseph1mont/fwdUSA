import { styled } from "styled-components";

import Section from "../Section";
import Container from "../Container";

const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <>
      <Section
        id="about"
        style={{ color: "#ffffff", backgroundColor: "#121212" }}
        title="About Us"
      >
        <Container>
          <Paragraph>
            Greetings! I'm Joseph Thomas, a skilled web developer with a track
            record dating back to 2005. From mastering WordPress to adopting
            ReactJS in 2019, I've been on a continuous journey of growth. Based
            in Jacksonville, Florida, my focus lies in building and maintaining
            websites for small and medium businesses.
          </Paragraph>
          <Paragraph>
            Specializing in SEO, automation, and creating seamless user
            interfaces, I offer my expertise whether you need a W2 employee or a
            1099 contractor. Let's collaborate to bring your digital visions to
            life – the web is our canvas, and I'm here to paint it with endless
            possibilities.
          </Paragraph>
        </Container>
      </Section>
    </>
  );
};

export default About;
