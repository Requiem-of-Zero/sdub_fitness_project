import styled from "styled-components";

export const TestimonialWrapper = styled.section``;

export const TestimonialContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 50px 0 50px 0;

  div {
    margin: 0 auto;
  }
  hr {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const TestimonialContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: italic;
  h2 {
    font-weight: 400;
  }
`;

export const ViewAll = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: blue;
  text-decoration: none;

  svg {
    color: white;
    background: blue;
    border-radius: 50%;
  }
`;

export const LeftImgContainer = styled.div`
  max-width: 470px;
  img {
    height: 315px;
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  max-width: 470px;
  position: relative;
  div:nth-child(1) {
    margin-bottom: 10px;
    padding: 20px;
    background: black;
    height: 100px;
    color: white;
    a {
      text-decoration: none;
      font-style: italic;
      padding-left: 10px;
      color: blue;
    }
    div {
      text-align: right;
    }
  }

  .triangle {
    border-top: 12px solid transparent;
    border-right: 15px solid #000000;
    border-bottom: 12px solid transparent;
    left: -15px;
    top: 20%;
    position: absolute;
  }
`;

export const PhotoGalleryBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 5px;
  img {
    background-attach: contain;
    width: 74px;
    height: 74px;
    cursor: pointer;
  }
`;
