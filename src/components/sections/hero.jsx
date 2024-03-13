import { styled } from "styled-components";
import Container from "../Container";
// import heroBG from "../assets/NEUMORPHIC_CIRCLES_BACKGROUND.jpg";

const HeroWrapper = styled.div`
  position: relative;
  height: 95vh;

  margin-top: -70px;
  padding: 0;
  background: linear-gradient(#180d27, #0c0219);
  text-align: center;
  text-transform: uppercase;

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    color: white;
  }
`;

const Heading1 = styled.h1`
  font-size: 1rem;
  line-height: 1.5;
`;

const Button = styled.button`
  margin: 2rem 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const Hero = () => {
  // const contactRef = useRef();
  return (
    <HeroWrapper>
      <Container>
        <div className="content">
          <p>Hi, my name is</p>
          <h2>Joseph Thomas</h2>
          <Heading1> Freelance Web Developer in Jacksonville FL.</Heading1>
          <Button
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Our Latest Projects
          </Button>
          <Button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </Button>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
