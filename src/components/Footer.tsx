import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export const Footer = () => {
  return (
    <FooterBar>
      <SocialLink href="mailto:sascha@rissling.dev" target="_blank">
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
};

export default Footer;

const FooterBar = styled.footer`
  width: 30vw;

  margin: 1rem 0 3rem 0;

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
