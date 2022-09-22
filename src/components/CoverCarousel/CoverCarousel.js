import React from "react";
import CoverItem from "../CoverItem/CoverItem";
import { CarouselWrapper } from "./CoverCarousel.styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const CoverCarousel = ({ covers }) => {
  const options = {
    type: "loop",
    gap: "10px",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: true,
    height: "300px",
    width: "940px",
    perPage: 5,
    perMove: 1,
    pagination: false,
  };
  return (
    <CarouselWrapper>
      <h2>
        Favorite Anime <span>Gallery</span>
      </h2>
      <hr />
      <Splide aria-label="My favorite animes" options={options}>
        {covers.map((cover, i) => {
          const key = "slide_cover-" + i;
          return (
            <SplideSlide key={key}>
              <CoverItem {...cover} />
            </SplideSlide>
          );
        })}
      </Splide>
    </CarouselWrapper>
  );
};

export default CoverCarousel;
