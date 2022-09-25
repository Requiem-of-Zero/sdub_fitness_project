import styled from "styled-components";

export const CarouselWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding: 40px 0 100px 0;
  .splide {
    padding: 10px 48px 0 48px;
  }
  h2 {
    font-style: italic;
    span {
      font-weight: 400;
    }
  }

  svg {
    fill: #bdbcbc;
  }

  .splide__arrow {
    top: calc(50% - 23px);
  }
  
  .splide__arrow:hover {
    svg {
      fill: black;
    }
  }
`;
