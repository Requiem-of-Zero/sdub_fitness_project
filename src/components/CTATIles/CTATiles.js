import React from "react";
import {
  CTATilesWrapper,
  CTATilesContainer,
  LeftSection,
  RightSection,
  VideoSearchContainer,
  VideoSearch,
  VideoSearchBtn,
} from "./CTATiles.styles";
import { FaSearch } from "react-icons/fa";

const CTATiles = ({ news, videoCTAs }) => {
  const { banner, newsCTAs } = news;

  return (
    <CTATilesWrapper>
      <CTATilesContainer>
        <LeftSection>
          <a href={banner.redirectUrl}>
            <img src={banner.imgUrl} alt={banner.imgAlt} />
          </a>
          <h2>
            FEATURED <strong>NEWS</strong>
          </h2>
          <hr />
          <ul>
            {newsCTAs.map((news, i) => {
              const key = "home_news-" + i;
              const { description, header, redirectUrl, src, imgAlt } = news;
              return (
                <li key={key}>
                  <a href={redirectUrl}>
                    <img src={src} alt={imgAlt} />
                  </a>
                  <a href={redirectUrl}>
                    <h2>{header}</h2>
                  </a>
                  <p>{description}</p>
                  <a href={redirectUrl} className="read_more">
                    Read More »
                  </a>
                </li>
              );
            })}
          </ul>
        </LeftSection>
        <RightSection>
          <VideoSearchContainer>
            <VideoSearch placeholder='Search Videos'/>
            <VideoSearchBtn>
              <FaSearch />
            </VideoSearchBtn>
          </VideoSearchContainer>
          <ul>
            {videoCTAs.map((video, i) => {
              const key = "video_CTA-" + i;
              const { redirectUrl, src, imgAlt } = video;
              return (
                <li key={key}>
                  <a href={redirectUrl}>
                    <img src={src} alt={imgAlt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </RightSection>
      </CTATilesContainer>
    </CTATilesWrapper>
  );
};

export default CTATiles;
