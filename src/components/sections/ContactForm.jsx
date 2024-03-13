import { useState } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
// import ReCAPTCHA from "react-google-recaptcha";

import Section from "../Section";

const ContactDescription = styled.div`
  text-align: center;
  margin: 0 0 4rem 0;
`;

const InputElement = styled.input`
  display: block;
  margin: 0 auto;
  width: 60%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Form = styled.form`
  text-align: center;

  .recaptcha {
    display: grid;
    justify-content: center;
    margin: 1rem;
  }
`;

const InputLabel = styled.label`
  display: block;
`;
const InputTextarea = styled.textarea`
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_4iyh3ig",
        "template_yain501",
        e.target,
        "LOrObTBFLJWLNkxGo"
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <Section id="contact" title="Contact Us">
      <ContactDescription>
        <p>We just need a little bit of data from you to get you started 🚀</p>
      </ContactDescription>
      <Form onSubmit={sendEmail}>
        <InputLabel>Name</InputLabel>
        <InputElement type="text" name="from_name" />
        <InputLabel>Email</InputLabel>
        <InputElement type="email" name="user_email" />
        <InputLabel>Message</InputLabel>
        <InputTextarea name="message" rows="4" cols="50" />
        <div>
          {/* <ReCAPTCHA
          className="recaptcha"
          sitekey="6LcyxWYpAAAAAEvHjFGHYepjB2fxDQaW1V6esaCy"
        /> */}
        </div>
        <button type="submit" value="Send" disabled={isSubmitting}>
          Submit
        </button>
        {stateMessage && <p>{stateMessage}</p>}
      </Form>
    </Section>
  );
};
export default ContactForm;
