import styled from "styled-components";

export const VideoSelectionWrapper = styled.div`
  height: 550px;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const LabelContainer = styled.div`
  font-size: 12px;
  color: blue;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
  > * {
    margin: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    text-transform: uppercase;
    font-style: italic;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: #999;
  }
`;

export const VideoTiles = styled.ul`
  position: absolute;
  top: 5%;
  right: 15%;
  list-style: none;
  line-height: 2rem;

  img {
    max-width: 120px;
    height: auto;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid blue;
    }
  }
`;
