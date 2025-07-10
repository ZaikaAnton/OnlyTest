import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardHistory from "../CardHistory/CardHistory";
import { styled } from "styled-components";
import React from "react";

interface Story {
  id: number;
  year: number;
  text: string;
}

interface SliderHistoryProps {
  stories: Story[];
}

const SliderHistory = React.memo(({ stories }: SliderHistoryProps) => {
  return (
    <StyledSwiperWrapper>
      <Swiper slidesPerView={3} modules={[Navigation]} navigation>
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <CardHistory yearEvent={story.year} textEvent={story.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  );
});

export default SliderHistory;

const StyledSwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  .swiper-wrapper {
    margin: 0 50px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.palette.textDark};
    color: ${({ theme }) => theme.palette.mainBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 12px;
    font-weight: bold;
  }
`;
