import styled from "@emotion/styled";
import React, { useState } from "react";
import sascha from "../assets/sascha.jpg";

export const PageMain = () => {
  const [saschaIsShown, setSaschaIsShown] = useState(false);

  return (
    <PageIdentity>
      {saschaIsShown && <ProfilePicture src={sascha} alt="Sascha Rissling" />}
      <Headline>
        Hello, I am{" "}
        <span
          onMouseEnter={() => setSaschaIsShown(true)}
          onMouseLeave={() => setSaschaIsShown(false)}
        >
          Sascha
        </span>{" "}
        Rissling.
      </Headline>
      <Job>Frontend Developer</Job>
      <PillContainer>
        <Pill>React.js</Pill>
        <Pill>Typescript</Pill>
      </PillContainer>
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
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.secondary};
  font-family: "Merriweather", serif;

  span {
    color: ${(props) => props.theme.primary};
    cursor: wait;
    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const ProfilePicture = styled.img`
  height: 30vh;
  top: 2rem;
  position: absolute;
  border-radius: 1rem 0 1rem 0;
  box-shadow: 0.25rem 0.25rem 0 ${(props) => props.theme.primary};
`;

const Job = styled.span`
  color: ${(props) => props.theme.primary};
`;

const Pill = styled.span`
  background: lightgray;
  border-radius: 0.25rem;
  min-width: 3rem;
  font-size: 0.75rem;
  padding: 0.25rem;
  color: ${(props) => props.theme.secondary};
`;

const PillContainer = styled.div`
  width: 40vw;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
