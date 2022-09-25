import React from "react";
import {
  NavBarWrapper,
  NavBarContainer,
  Logo,
  SecondaryNavBar,
  SecondaryNavBarContent,
  SocialsContainer,
  SecondaryNavContainer,
  LoginSignupContainer,
  NavContent,
  NavContentContainer,
  NavBarBackgroundLayer,
  NavLinks,
  NavLink,
} from "./Navbar.styles";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = ({ logoImgUrl, categorySections }) => {

  return (
    <NavBarWrapper>
      <NavBarContainer>
        <SecondaryNavBar>
          <SecondaryNavBarContent>
            <SocialsContainer>
              <ul>
                <li>
                  <a href="#facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#youtube">
                    <ImYoutube2 />
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <TiSocialInstagram />
                  </a>
                </li>
              </ul>
            </SocialsContainer>
            <SecondaryNavContainer>
              <ul>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#store">Store</a>
                </li>
                <li>
                  <a href="#cart">
                    <HiShoppingCart /> 0 Items
                  </a>
                </li>
              </ul>
              <LoginSignupContainer>
                <ul>
                  <li>
                    <a href="#login">Login</a>
                  </li>
                  <li>
                    <a href="#signup">Sign Up</a>
                  </li>
                </ul>
              </LoginSignupContainer>
            </SecondaryNavContainer>
          </SecondaryNavBarContent>
        </SecondaryNavBar>
        <NavContent>
          <NavBarBackgroundLayer>
            <NavContentContainer>
              <Logo src={logoImgUrl} />
              <NavLinks>
                {categorySections.map((category, i) => {
                  const key = "category-" + i;
                  const { categoryTitle, categorySubtitle, categoryUrl } =
                    category;
                  return (
                    <li key={key}>
                      <NavLink href={categoryUrl}>
                        <div>
                          <span>{categoryTitle}</span>
                          <small>{categorySubtitle}</small>
                        </div>
                        <AiOutlineCaretDown className="caret" />
                      </NavLink>
                    </li>
                  );
                })}
              </NavLinks>
            </NavContentContainer>
          </NavBarBackgroundLayer>
        </NavContent>
      </NavBarContainer>
    </NavBarWrapper>
  );
};

export default Navbar;
