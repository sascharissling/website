import React from "react";
import styled from "@emotion/styled";

//ICON import
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";

//STYLE start

const FooterBar = styled.footer`
  width: 30vw;

  margin: 15px 0px 50px 0px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.background};
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export default function Footer() {
  return (
    <FooterBar>
      <SocialLink href="mailto:sascha.rissling@gmail.com" target="_blank">
        <MailOutlineIcon />
      </SocialLink>
      <SocialLink href="tel:00491737074781" target="_blank">
        <PhoneIcon />
      </SocialLink>
      <SocialLink href="https://github.com/sascharissling" target="_blank">
        <GitHubIcon />
      </SocialLink>
      {/* <SocialLink href="https://instagram.com/sascharissling" target="_blank">
        <InstagramIcon />
      </SocialLink> */}
      <SocialLink
        href="https://www.linkedin.com/in/sascha-rissling-5a13a0190/"
        target="_blank"
      >
        <LinkedInIcon />
      </SocialLink>
    </FooterBar>
  );
}
