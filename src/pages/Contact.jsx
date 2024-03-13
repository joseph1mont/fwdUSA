// components/Contact.js
import ContactForm from "../components/sections/ContactForm";
import styled from "styled-components";

const ContactWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  a {
    font-size: 11px;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactForm />
      <a href="/">Home</a>
    </ContactWrapper>
  );
};

export default Contact;
