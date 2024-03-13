// components/Introduction.js
// import { styled } from "styled-components";
import Metadata from "../components/Metadata";
import Hero from "../components/sections/hero";
// import LogosSection from "../components/LogosSection";
import About from "./About";
import WorkedWith from "../components/sections/WorkedWith";

import Tools from "../components/sections/Tools";
import MyProjects from "../components/sections/LatestProjects";
import ContactForm from "../components/sections/ContactForm";

const Introduction = () => {
  return (
    <>
      <div className="page-body">
        <Hero />
        {/* <LogosSection /> */}
        <Tools />
        <About />
        <WorkedWith />
        <MyProjects />
        <ContactForm />
      </div>
      <Metadata />
    </>
  );
};

export default Introduction;
