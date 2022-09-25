import React from "react";
import {
  FooterWrapper,
  Divider,
  FooterContentContainer,
  LeftSection,
  MiddleSection,
  HeaderContainer,
  FooterLinksList,
  RightSection,
  ContactButton,
  SocialsContainer,
} from "./Footer.styles";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = ({ left, middle, right }) => {
  const { logoUrl } = left,
    { links } = middle,
    { socials } = right;

  const sendMail = () => {
    var link =
      "mailto:theesamwong@gmail.com" +
      "?cc=theesamwong@gmail.com" +
      "&subject=" +
      encodeURIComponent("Ticket Submission");
    window.location.href = link;
  };
  return (
    <FooterWrapper>
      <div className="container">
        <FooterContentContainer>
          <LeftSection>
            <a href="https://www.google.com">
              <img src={logoUrl} alt="sdubfitness logo" />
            </a>
          </LeftSection>
          <MiddleSection>
            <HeaderContainer>
              <h2>Site Map</h2>
              <Divider />
            </HeaderContainer>
            <FooterLinksList>
              {links.map((link, i) => {
                const key = "footer_link-" + i;
                const { label, redirectUrl } = link;
                return (
                  <li key={key}>
                    <a href={redirectUrl}>{label}</a>
                  </li>
                );
              })}
            </FooterLinksList>
            <HeaderContainer>
              <h2>TEAMSAM.ORG</h2>
              <Divider />
            </HeaderContainer>
            <a href="https://www.google.com">
              <img
                src="https://i.pinimg.com/originals/48/b0/08/48b00863d2110db05118c6b4eb9b2180.jpg"
                alt="team sdub"
              />
            </a>
          </MiddleSection>
          <RightSection>
            <HeaderContainer>
              <h2>Contact Us</h2>
              <Divider />
            </HeaderContainer>
            <ContactButton onClick={() => sendMail()}>
              Contact Sam.
            </ContactButton>
            <HeaderContainer>
              <h2>Follow Sam</h2>
              <Divider />
            </HeaderContainer>
            <SocialsContainer>
              <li>
                <a href="#facebook">
                  <FaFacebookF size={32} />
                </a>
              </li>
              <li>
                <a href="#twitter">
                  <FaTwitter size={32} />
                </a>
              </li>
              <li>
                <a href="#youtube">
                  <ImYoutube2 size={32} />
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <TiSocialInstagram size={32} />
                </a>
              </li>
            </SocialsContainer>
          </RightSection>
        </FooterContentContainer>
        <Divider></Divider>
        <p>
          ©2021 sdubfitness.com - All Right Reserved - Questions:
          <a href="mailto:theesamwong@gmail.com"> theesamwong@gmail.com</a> -
          Support & Webmaster:
          <a href="mailto:theesamwong@gmail.com"> theesamwong@gmail.com</a> -
          Site Operated by:{" "}
          <a href="https://www.samuelwong.xyz/">Samuel Wong</a>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
