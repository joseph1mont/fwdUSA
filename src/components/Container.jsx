import PropTypes from "prop-types";
import { styled } from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0px 4.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Container = (props) => (
  <ContainerWrapper>{props.children}</ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
