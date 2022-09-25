import styled from "styled-components";

export const CarouselWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;

  .splide {
    padding: 10px 48px 0 48px;
  }
  h2 {
    margin: 0;
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
