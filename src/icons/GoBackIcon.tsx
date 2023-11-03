import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { Link } from "react-router-dom";

export const GoBackIcon = () => {
  return (
    <Link to="/">
      <BackArrow />
    </Link>
  );
};

export default GoBackIcon;

const BackArrow = styled(ArrowBackIosIcon)`
  color: ${(props) => props.theme.primary};
`;
