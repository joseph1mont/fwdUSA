import { useRef, useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";
import skillsList from "../data/skills.json";

const skillBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 0;
  }
`;

const Bar = styled.div`
  position: relative;
  height: 12px;
  background-color: #ccc;
  color: #666;
  margin: 0 0 15px 0;
  font-size: 11px;
  border-radius: 50px;
`;

const BarFill = styled.div`
  &.animation {
    left: 0;
    position: absolute;
    top: -4px;
    // background-color: #00a1a7;
    background: linear-gradient(#341a89, #3a1967);
    opacity: 1;
    padding: 0;
    height: 10px;
    animation: ${skillBar} 0.5s;
    border-radius: 50px;
  }
`;

const BarTag = styled.div`
  position: absolute;
  left: 0;
  top: 1px;
  color: white;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.87), 0 0 1em black,
    0 0 0.2em blue;
  height: 15px;
  width: 130px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Level = styled.div`
  color: white;
  text-align: right;
  margin-top: -3px;
`;
const Skills = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <>
      {skillsList.map((item) => (
        <Bar key={item.skill} ref={containerRef}>
          <BarFill
            style={{ width: `${item.level}%` }}
            className={isVisible ? "animation" : ""}
          >
            <BarTag>{item.skill}</BarTag>
            <Level>{item.level}%</Level>
          </BarFill>
        </Bar>
      ))}
    </>
  );
};

export default Skills;
