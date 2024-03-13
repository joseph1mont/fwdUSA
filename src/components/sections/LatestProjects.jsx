import { styled } from "styled-components";
import projectsList from "../data/latestProjects.json";

import Section from "../Section";
import Container from "../Container";

import gifImage from "/images/vin-searching.gif";

// const ProjectsWrapper = styled.section`
//   background-color: white;
// `;

const ProjectWrapper = styled.div`
  display: flex;
  color: #121212;
  margin: 0 0 6rem 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const SubHeading2 = styled.h2`
  text-align: center;
  // color: #121212;
  font-size: 0.8rem;
  margin-bottom: 3rem;
`;

const Heading3 = styled.h3`
  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const ScreenShotWrapper = styled.div`
  flex: 5;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
const ProjectDecriptionWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 2rem;
  flex: 5;
`;
const ToolsWapper = styled.div`
  margin: 1rem 0;

  h3 {
    margin-bottom: 1rem;
  }
`;

const UnoderedList = styled.ul`
  margin-left: 2em;
`;

const Button = styled.button`
  margin: 1rem 0.5rem;
  background: transparent;
  border: 0.1rem solid #121212;
  height: 3rem;
  width: 200px;
  max-width: 100%;
  color: #121212;
  text-transform: uppercase;
`;

// const HR = styled.hr`
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

const MyProjects = () => {
  return (
    <>
      <Section
        id="projects"
        style={{ backgroundColor: "#ffffff", color: "#121212" }}
        title="Latest Projects"
      >
        <SubHeading2>(No Pre-built code)</SubHeading2>
        <Container>
          {projectsList.map((item) => (
            <ProjectWrapper
              key={item.id}
              style={item.id % 2 ? { flexDirection: "row-reverse" } : {}}
            >
              <ScreenShotWrapper>
                <img src={item.animation ? gifImage : item.image} alt="" />
              </ScreenShotWrapper>
              <ProjectDecriptionWrapper>
                <Heading3>{item.company}</Heading3>
                <p>{item.Description}</p>
                <ToolsWapper>
                  <Heading3>Technology Stack:</Heading3>
                  <span>
                    <UnoderedList>
                      {item.Tools.map((toolItem) => (
                        <li key={toolItem}>{toolItem}</li>
                      ))}
                    </UnoderedList>
                  </span>
                </ToolsWapper>

                <a
                  href={item.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Button>View Project</Button>
                </a>
              </ProjectDecriptionWrapper>
              {/* <HR /> */}
            </ProjectWrapper>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default MyProjects;
