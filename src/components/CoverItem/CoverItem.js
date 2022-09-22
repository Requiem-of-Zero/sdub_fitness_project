import React from "react";
import { CoverWrapper } from "./CoverItem.styles";

const CoverItem = ({ imgUrl, redirectUrl, title, year, month }) => {
  return (
    <CoverWrapper>
      <a href={redirectUrl}>
        <img src={imgUrl} alt="jujutsu kaisen vol 1" />
      </a>
      <h2>{title}</h2>
      <p>{`${month} ${year}`}</p>
    </CoverWrapper>
  );
};

export default CoverItem;
