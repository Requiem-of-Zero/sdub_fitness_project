import React from "react";
import { DropDownWrapper, LinksList } from "./DropDown.styles";

const DropDown = ({ links, hasLinks, selected }) => {

  return (
    <DropDownWrapper hasLinks={hasLinks}>
      <LinksList hasLinks={hasLinks} selected={selected}>
        {links.map((link, i) => {
          const key = "dropdown_link-" + i;
          const { label, subLabel, url } = link;
          return (
            <li key={key}>
              <a href={url}>
                <span>{label}</span>
                <small>{subLabel}</small>
              </a>
            </li>
          );
        })}
      </LinksList>
    </DropDownWrapper>
  );
};

export default DropDown;
