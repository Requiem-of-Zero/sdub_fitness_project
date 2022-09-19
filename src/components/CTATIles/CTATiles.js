import React from "react";
import {
  CTATilesWrapper,
  CTATilesContainer,
  LeftSection,
  RightSection,
} from "./CTATiles.styles";
const CTATiles = ({news, videoCTAs}) => {
  const {banner, newsCTAs} = news;

  return (
    <CTATilesWrapper>
      <CTATilesContainer>
        <LeftSection>
          <a href={banner.redirectUrl}>
            <img src={banner.imgUrl} alt={banner.imgAlt} />
          </a>
          <h2>FEATURED <strong>NEWS</strong></h2>
          <hr />
          <ul>
            {newsCTAs.map((news, i) => {
              const key = 'home_news-' + i;
              const {description, header, redirectUrl, src, imgAlt} = news;
              return (
                <li key={key}>
                  <a href={redirectUrl}>
                    <img src={src} alt={imgAlt} />
                  </a>
                  <a href={redirectUrl}>
                    <h2>{header}</h2>
                  </a>
                  <p>{description}</p>
                  <a href={redirectUrl} className='read_more'>Read More »</a>
                </li>
              );
            })}
          </ul>
        </LeftSection>
        <RightSection>

          Test 123
        </RightSection>
      </CTATilesContainer>
    </CTATilesWrapper>
  );
};

export default CTATiles;
