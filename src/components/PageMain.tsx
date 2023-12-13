import styled from "@emotion/styled";
import Meta from "./Meta";

export const PageMain = () => {
  return (
    <PageIdentity>
      <Meta />
      <Headline>
        Hello, I am <span>Sascha</span> Rissling.
      </Headline>
      <Job>Frontend Developer</Job>
    </PageIdentity>
  );
};

export default PageMain;

const PageIdentity = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  height: 20rem;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.secondary};
  font-family: "Merriweather", serif;

  span {
    color: ${(props) => props.theme.primary};
  }
`;

const Job = styled.span`
  color: ${(props) => props.theme.primary};
`;
