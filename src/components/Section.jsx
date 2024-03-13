/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Title = styled.h2`
  text-align: center;
`;

const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

export default Section;
