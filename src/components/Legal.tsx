import styled from "@emotion/styled";
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
