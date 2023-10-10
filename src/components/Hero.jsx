import meat from "../images/meat.webp";
import dairy from "../images/dairy.jpg";
import fruits from "../images/fruits.jpeg";
import cheese from "../images/cheese.webp";
import dessert from "../images/dessert.jpeg";
import vegetables from "../images/vegetables.avif";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  const images = [
    {
      title: "CHEESE",
      img: cheese,
    },
    {
      title: "MEAT",
      img: meat,
    },
    {
      title: "DAIRY",
      img: dairy,
    },
    {
      title: "FRUITS",
      img: fruits,
    },
    {
      title: "DESSERT",
      img: dessert,
    },
    {
      title: "VEGETABLES",
      img: vegetables,
    },
  ];
  return (
    <section className="w-full h-screen pt-[60px] flex justify-between items-center flex-col">
      <Swiper
        loop
        pagination
        slidesPerView={1}
        className="w-full"
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {images.map((e, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${e.img})`,
              }}
              className="w-full slide flex justify-center items-center text-white text-[35px] md:text-[65px] tracking-[10px] md:tracking-[20px] font-bold"
            >
              {e.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
