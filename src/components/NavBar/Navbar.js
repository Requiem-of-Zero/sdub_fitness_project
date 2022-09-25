import React, { useState } from "react";
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
import { useUser } from "@auth0/nextjs-auth0";
import DropDown from "../DropDown/DropDown";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = ({ logoImgUrl, categorySections }) => {
  const [currentDropDownId, setCurrentDropDown] = useState(null),
    { user, error, isLoading } = useUser();
  const currentDropDown = categorySections[currentDropDownId];

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
                {user ? (
                  <a href="/api/auth/logout">Log Out</a>
                ) : (
                  <ul>
                    <li>
                      <a href="/api/auth/login">Login</a>
                    </li>
                    <li>
                      <a href="#signup">Sign Up</a>
                    </li>
                  </ul>
                )}
              </LoginSignupContainer>
            </SecondaryNavContainer>
          </SecondaryNavBarContent>
        </SecondaryNavBar>
        <NavContent>
          <NavBarBackgroundLayer>
            <NavContentContainer>
              <a href="https://www.google.com">
                <Logo src={logoImgUrl} />
              </a>
              <NavLinks>
                {categorySections.map((category, i) => {
                  const key = "category-" + i;
                  const {
                    categoryTitle,
                    categorySubtitle,
                    categoryUrl,
                    links,
                  } = category;
                  const hasLinks = links.length ? true : false;
                  const selected =
                    currentDropDown &&
                    categoryTitle === currentDropDown.categoryTitle;
                  return (
                    <li
                      key={key}
                      onMouseEnter={() => {
                        setCurrentDropDown(i);
                      }}
                      onMouseLeave={() => {
                        setCurrentDropDown(null);
                      }}
                    >
                      <NavLink href={categoryUrl}>
                        <div>
                          <span>{categoryTitle}</span>
                          <small>{categorySubtitle}</small>
                        </div>
                        {categoryTitle !== "Video Blogs" ? (
                          <AiOutlineCaretDown className="caret" />
                        ) : (
                          <></>
                        )}
                        {currentDropDown &&
                          categoryTitle === currentDropDown.categoryTitle && (
                            <DropDown
                              links={links}
                              hasLinks={hasLinks}
                              selected={selected}
                            />
                          )}
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
