/* eslint-disable @typescript-eslint/no-explicit-any */
// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderOneCard from "../cards/SliderOneCard";
import SliderTwoCard from "../cards/SliderTwoCard";

interface musicList {
  id: number;
  title: string;
  image?: string;
  artist?: string;
}

type sliderProp = {
  spSmall: number;
  spMedium: number;
  spLarge: number;
  title: string;
  list: musicList[];
  type: number;
};

const ExploreSlider = ({
  spSmall,
  spMedium,
  spLarge,
  title,
  list,
  type,
}: sliderProp) => {
  return (
    <div className={`me-4 mt-4 ${type === 1 ? "versionOne" : "versionTwo"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="heading-secondary my-3">{title}</h2>
        <p className={`text-small ${type === 1 ? "d-none" : "d-block"}`}>
          See All
        </p>
      </div>

      <Swiper
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: spSmall,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: spMedium,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: spLarge,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
      >
        {list.map((item: any) => (
          <SwiperSlide key={item?.id}>
            {type === 1 ? (
              <SliderOneCard image={item?.bg} title={item?.title} />
            ) : (
              <SliderTwoCard
                image={item?.image}
                title={item?.title}
                artist={item?.artist}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreSlider;
