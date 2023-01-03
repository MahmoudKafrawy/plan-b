import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

const slides = ["slide1.png", "slide2.png"];
const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination, Autoplay, Navigation]}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={`/images/${slide}`} style={{ objectFit: "cover", width: "100vw", maxHeight: "405px" }} />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImageSlider;
