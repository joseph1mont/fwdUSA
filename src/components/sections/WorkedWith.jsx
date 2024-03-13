// import React from "react";

import { styled } from "styled-components";
import workedWith from "../data/workedWith.json";

import Section from "../Section";
import Container from "../Container";

// import Swiper core and required modules
// Pagination removed
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const CompanyLogo = styled.img`
  margin-top: 2rem;
  min-height: 80px;
`;

export default function WorkedWith() {
  return (
    <>
      <Section
        id="WorkedWith"
        style={{ color: "#121212", backgroundColor: "#ffffff" }}
        title="We Worked With"
      >
        <Container>
          <Swiper
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 3,
              },
              865: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5,
              },
              1500: {
                slidesPerView: 6,
              },
              1700: {
                slidesPerView: 7,
              },
            }}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {workedWith.map((item) => (
              <SwiperSlide key={item.id}>
                <CompanyLogo
                  className="workWithLogo"
                  src={item.logo}
                  alt={item.company}
                  width="50"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>
    </>
  );
}
