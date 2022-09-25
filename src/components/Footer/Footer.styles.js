import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: black;
  height: 400px;

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  p {
    text-align: center;
    color: #999999;
    font-size: 12px;
    a{
        text-decoration: none;
    }
  }

  hr{
    background-color: #555555;
  }
`;
export const Divider = styled.div`
width: 100%;
margin: 0 0 10px 0;
border: 0.5px solid #555555;
`
export const FooterContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding: 45px 0 20px 0;
  h2{
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export const LeftSection = styled.div`
  max-width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const MiddleSection = styled.div`
  max-width: 400px;
  img {
    width: 20%;
  }
`;

export const HeaderContainer = styled.div`
  h2 {
    color: #fff;
    font-size: 14px;
  }
`;

export const FooterLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 70px;
  flex-wrap: wrap;
  width: 80%;
  li {
    font-size: 12px;
    padding-right: 20px;
    line-height: 20px;
  }
  a {
    text-decoration: none;
    color: #555555;
  }
`;

export const RightSection = styled.div`
  width: 350px;
  max-width: 350px;
`;

export const ContactButton = styled.button`
background: blue;
border: none;
padding: 10px 15px 10px 15px;
margin-bottom: 15px;
`;

export const SocialsContainer = styled.ul`
  display: flex;
  padding: 10px 0 0 0;
  list-style: none;
  li:not(:last-child) {
    padding-right: 20px;
  }
  a {
    color: #555555;

    :hover {
        color: red;
    }
  }
`;