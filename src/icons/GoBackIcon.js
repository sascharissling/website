import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//ICON import
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//STYLE start
const BackArrow = styled(ArrowBackIosIcon)`
  color: ${(props) => props.theme.primary};
`;
//STYLE end

export default function GoBackIcon() {
  return (
    <Link to="/">
      <BackArrow />
    </Link>
  );
}
