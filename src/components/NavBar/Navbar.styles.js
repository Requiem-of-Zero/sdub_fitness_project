import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  height: 100px;
  ul {
    display: flex;
    list-style: none;
  }
`;

export const NavBarContainer = styled.div``;

export const SecondaryNavBar = styled.div`
  background: black;
`;

export const SecondaryNavBarContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  height: 32px;
`;

export const SocialsContainer = styled.div`
display: flex;
align-items: center;
  padding-left: 20px; 
  li {
    margin-right: 20px;
  }
  a {
    color: #444444;
  }
`;

export const SecondaryNavContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 10px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }

  li {
    :not(:last-child) {
      margin: 0 10px 0 0;
      padding: 0 10px 0 0;
      border-right: 1px solid #fff;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  color: #fff;
`;

export const LoginSignupContainer = styled.div`
  li:first-child {
    margin: 0 10px 0 0;
    padding: 0 10px 0 0;
    border-right: 1px solid #fff;
  }
  padding: 0 20px;
`;

export const NavContent = styled.div``;

export const NavContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1050px;
  height: 73px;
`;
export const NavBarBackgroundLayer = styled.div`
  background: rgba(0, 0, 0, 0.87);
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  height: inherit;
  position: relative;
`;

export const NavLink = styled.a`
  font-family: "Arial";
  font-style: italic;
  text-decoration: none;
  color: #fff;
  text-align: center;
  padding: 23px 4px;
  display: flex;
  &:hover {
  }
  div {
    display: flex;
    flex-direction: column;
    padding-right: 5px;
  }
  span {
    text-transform: uppercase;
    font-size: 12px;
  }

  small {
    color: #555;
    font-size: 11px;
  }

  .caret {
    margin-top: 0.8rem;
    font-size: 10px;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: 73px;
`;
