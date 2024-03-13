// import { Normalize } from "styled-normalize";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/sections/NavBar";
import Container from "../src/components/Container";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

// Pages
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container>
            <NavBar />
          </Container>
        </header>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <FooterContainer>
          <p>&copy; 2024 Freelance Web Design USA. All rights reserved.</p>
        </FooterContainer>
      </div>
    </Router>
  );
}

export default App;
