// components/PageNotFound.js
import { styled } from "styled-components";
import ContactForm from "../components/sections/ContactForm";
import Container from "../components/Container";

const Heading2 = styled.h2`
  text-align: center;
`;

const PageNotFound = () => {
  return (
    <>
      <div className="page-body">
        <Container>
          <Heading2>404 Page</Heading2>
          <hr />
          <ContactForm />
        </Container>
      </div>
    </>
  );
};

export default PageNotFound;
