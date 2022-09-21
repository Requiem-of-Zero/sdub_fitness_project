import React, { useState } from "react";
import {
  TestimonialWrapper,
  TestimonialContainer,
  TestimonialContent,
  TestimonialHeader,
  ViewAll,
  LeftImgContainer,
  RightContainer,
  PhotoGalleryBtns,
} from "./MemberTestimonials.styles";
import { TiArrowRightThick } from "react-icons/ti";

const MemberTestimonials = ({ testimonials }) => {
  const [currentTestimonialId, setCurrentTestimonialId] = useState(0),
    currentTestimonial = testimonials[currentTestimonialId],
    {
      imgUrl: currentImgUrl,
      testimonial: memberTestimonial,
      firstName,
      lastName,
      location,
      redirectUrl
    } = currentTestimonial;
  return (
    <TestimonialWrapper>
      <TestimonialContainer>
        <TestimonialHeader>
          <h2>
            MEMBERS <strong>TESTIMONIALS</strong>
          </h2>
          <ViewAll href="https://www.google.com">
            View All <TiArrowRightThick />
          </ViewAll>
        </TestimonialHeader>
        <hr />
        <TestimonialContent>
          <LeftImgContainer>
            <img src={currentImgUrl} alt={memberTestimonial} />
          </LeftImgContainer>
          <RightContainer>
            <div>
              {memberTestimonial}
              <a href={currentTestimonial.redirectUrl}>[Read More]</a>
              <div>{`${firstName} ${lastName} - ${location}`}</div>
              <div className="triangle"></div>
            </div>
            <PhotoGalleryBtns>
              {testimonials.map((val, i) => {
                const key = "testimonial-" + i;
                const { imgUrl, testimonial } = val;
                return (
                  <a
                    key={key}
                    onClick={() => setCurrentTestimonialId(i)}
                  >
                    <img src={imgUrl} alt={testimonial} />
                  </a>
                );
              })}
            </PhotoGalleryBtns>
          </RightContainer>
        </TestimonialContent>
      </TestimonialContainer>
    </TestimonialWrapper>
  );
};

export default MemberTestimonials;
