import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SliderCardOne from "../Cards/SliderCardOne";
import SliderCardTwo from "../Cards/SliderCardTwo";

interface ISlider {
  spLarge: number;
  spMedium: number;
  spSmall: number;
  type: number;
  title: string;
  list: any;
}

import Styles from "./MusicSlider.module.scss";
import { Link } from "react-router-dom";
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
      className={`${type === 1 ? "versionOne" : "versionTwo"} ${
        Styles.musicslider
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h3
          className={` ${
            type === 1
              ? Styles.musicslider__titleOne
              : Styles.musicslider__titleTwo
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-medium fw-bold text-dark ${
            type === 1 ? "d-none" : "d-block"
          }`}
        >
          See All
        </p>
      </div>

      <div
        className={
          type === 1
            ? Styles.musicslider__containerOne
            : Styles.musicslider__containerTwo
        }
      >
        <Swiper
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: spSmall,
              spaceBetween: 6,
            },
            768: {
              spaceBetween: 12,
            },
            992: {
              slidesPerView: spMedium,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: spLarge,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
        >
          {list.map((item: any) => (
            <SwiperSlide key={item?.id}>
              {type === 1 ? (
                <Link
                  className="text-decoration-none"
                  to={`category/${item.id}`}
                  state={{title: item?.title, catBg: item?.bg}}
                >
                  <SliderCardOne image={item?.bg} title={item?.title} />
                </Link>
              ) : (
                <Link
                  className="text-decoration-none nav-link"
                  to={`category/${item.id}`}
                >
                  <SliderCardTwo
                    image={item?.image}
                    title={item?.title}
                    artist={item?.artist}
                  />
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MusicSlider;
