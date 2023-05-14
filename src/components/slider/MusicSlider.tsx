import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SliderCardOne from "../cards/SliderCardOne";
import SliderCardTwo from "../cards/SliderCardTwo";

interface ISlider {
  spLarge: number;
  spMedium: number;
  spSmall: number;
  type: number;
  title: string;
  list: any;
}

import Styles from "./MusicSlider.module.scss";
const MusicSlider = ({
  spLarge,
  spMedium,
  spSmall,
  type,
  title,
  list,
}: ISlider) => {
  return (
    <div
      className={`mt-4 ${type === 1 ? "versionOne" : "versionTwo"} ${
        Styles.musicslider
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h5
          className={` ${
            type === 1
              ? Styles.musicslider__titleOne
              : Styles.musicslider__titleTwo
          }`}
        >
          {title}
        </h5>
        <p
          className={`text-medium fw-bold text-dark ${
            type === 1 ? "d-none" : "d-block"
          }`}
        >
          See All
        </p>
      </div>

      <Swiper
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: spSmall,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: spMedium,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: spLarge,
            spaceBetween: 16,
          },
        }}
        modules={[Navigation]}
      >
        {list.map((item: any) => (
          <SwiperSlide key={item?.id}>
            {type === 1 ? (
              <div className={Styles.musicslider__containerOne}>
                <SliderCardOne image={item?.bg} title={item?.title} />
              </div>
            ) : (
              <div className={Styles.musicslider__containerTwo}>
                <SliderCardTwo
                  image={item?.image}
                  title={item?.title}
                  artist={item?.artist}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MusicSlider;
