import styled from "styled-components";

export const DropDownWrapper = styled.div`
  position: absolute;
  max-width: 300px;
  background: blue;
  border-radius: 6px;
  top: 100%;
  height: 0;
  :after {
    position: absolute;
    top: -6px;
    left: 10px;
    display: inline-block;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
    border-left: 6px solid transparent;
    content: "";
  }
`;

export const LinksList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
li > a {
    text-decoration: none;
    text-align: center;
    background: blue;
    padding: 20px 4px;
    display: flex;
    flex-direction: column;
    :hover {
      background: #fff;
      transition: background 0.2s ease-in-out;
      small {
        color: black;
      }
    }
    span {
      color: black;
      font-size: 12px;
    }

    small {
      color: #fff;
      font-size: 11px;
    }
  }
`;
