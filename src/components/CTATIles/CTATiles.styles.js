import styled from "styled-components";

export const CTATilesWrapper = styled.div``;

export const CTATilesContainer = styled.div`
  padding-top: 100px;
  display: grid;
  gap: 30px;
  grid-template-columns: 2fr 1fr;
  width: 1000px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 150px;
  }
`;

export const LeftSection = styled.div`
  > h2 {
    font-size: 26px;
    font-weight: 400;
    font-style: italic;
    padding-top: 20px;
  }

  hr {
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    li {
      float: left;
      width: 47%;
      a {
        font-size: 14px;
        color: black;
        text-decoration: none;
        > h2 {
          font-size: 20px;
        }
        &:hover {
          color: black;
          text-decoration: underline;
        }
      }

      .read_more {
        color: blue;
      }
    }

    li:nth-child(1) {
      padding-bottom: 30px;
    }

    li:nth-child(odd) {
      padding-right: 30px;
    }
  }
`;

export const RightSection = styled.div`
  padding-top: 40px;
  width: 300px;
  ul {
    list-style: none;
    padding-top: 20px;
    li:not(:last-child) {
      padding-bottom: 20px;
    }
  }
`;
export const VideoSearchContainer = styled.div`
  width: inherit;
  border-radius: 14px 0 0 14px;
`;

export const VideoSearch = styled.input`
  width: 75%;
  padding: 4px 12px;
  padding-top: 5px;
  padding-bottom: 4px;
  border-radius: 14px 0 0 14px;
`;

export const VideoSearchBtn = styled.button`
  width: 15%;
  border-radius: 0 14px 14px 0;
  background: #363636;
  border-color: #363636;
  padding: 4px 12px;
  padding-top: 4px;
  padding-right: 12px;
  padding-bottom: 4px;
  padding-left: 12px;

  svg {
    color: #fff;
  }
`;
