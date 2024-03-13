import { styled } from "styled-components";

const LinksWrapper = styled.div`
  display: block;
`;

const Link = styled.a`
  display: inline-block;
  margin: 5rem 2rem;
  font-size: 12px;
  text-align: center;
`;

export default function Portfolio() {
  return (
    <>
      <LinksWrapper>
        <Link
          href="https://www.linkedin.com/in/-joseph-thomas/"
          target="_blank"
        >
          LINKEDIN
        </Link>
        <Link href="https://github.com/joseph1mont" target="_blank">
          GITHUB
        </Link>
        <Link href="https://github.com/joseph1mont/fwdUSA" target="_blank">
          SOURCE
        </Link>
      </LinksWrapper>
    </>
  );
}
