import { styled } from "styled-components";
import { Icon } from "@iconify/react";

import Section from "../Section";
import Container from "../Container";

import SkillsList from "./SkillBars";

const Icons = styled.div`
  text-align: center;
  margin: 2rem auto;
  .icon {
    margin: 0 1rem;
    font-size: 2rem;
  }
`;

const Tools = () => {
  return (
    <Section
      id="tools"
      style={{ backgroundColor: "#ffffff", color: "#121212" }}
      title="My Skills"
    >
      <Container>
        <div className="skill-icons">
          <Icons>
            <Icon icon="logos:react" title="React.js" className="icon" />
            <Icon
              icon="logos:wordpress-icon"
              title="WordPress"
              className="icon"
            />
            <Icon icon="logos:vitejs" title="Vite" className="icon" />
            <Icon icon="logos:webpack" title="Webpack" className="icon" />
            <Icon icon="logos:nodejs" title="Node.js" className="icon" />
            <Icon icon="logos:javascript" title="JavaScript" className="icon" />
            <Icon icon="logos:html-5" title="HTML5" className="icon" />
            <Icon icon="logos:css-3" title="CSS3" className="icon" />
            <Icon
              icon="logos:expressionengine"
              title="Expression Engine"
              className="icon"
            />
            <Icon icon="logos:litespeed" title="LightSpeed" className="icon" />
            <Icon icon="logos:git" title="Git" className="icon" />
          </Icons>
          <SkillsList />
          {/* <i className="fab fa-react"></i>
        <i className="fas fa-toolbox"></i>
        <i className="fab fa-webpack"></i>
        <i className="fab fa-node"></i>
        <i className="fab fa-wordpress"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-expeditedssl"></i>
        <i className="fab fa-linode"></i>
        <i className="fab fa-git"></i> */}
        </div>
      </Container>
    </Section>
  );
};

export default Tools;
