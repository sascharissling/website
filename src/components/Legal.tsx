import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export const Legal = () => {
  return (
    <LegalBar>
      <ImpressumLink to="/impressum">Impressum</ImpressumLink>
    </LegalBar>
  );
};

export default Legal;

const LegalBar = styled.div`
  @media (min-width: 600px) {
    position: absolute;
    bottom: 1rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImpressumLink = styled(Link)`
  -webkit-appearance: none;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  opacity: 50%;
`;
