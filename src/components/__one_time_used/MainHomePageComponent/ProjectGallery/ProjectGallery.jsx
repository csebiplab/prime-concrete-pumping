"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

const galImgs = [
  "/assets/gellary/img-1.png",
  "/assets/gellary/img-2.png",
  "/assets/gellary/img-3.png",
  "/assets/gellary/img-4.png",
  "/assets/gellary/img-5.png",
  "/assets/gellary/img-6.png",
  "/assets/gellary/img-7.png",
  "/assets/gellary/img-8.png",
];

const galImgs2 = [
  "/assets/gellary/img-5.png",
  "/assets/gellary/img-6.png",
  "/assets/gellary/img-7.png",
  "/assets/gellary/img-8.png",
  "/assets/gellary/img-9.png",
  "/assets/gellary/img-10.png",
  "/assets/gellary/img-11.png",
  "/assets/gellary/img-12.png",
];

const ProjectGallery = () => {
  return (
    <div className="">
      <div className="custom-container">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.ourPortfolio__IconText} />

            <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4  text-black text-lg md:text-3xl lg:text-4xl font-medium">
              Gallery of Our Past
              <span className="text-primary"> Projects </span>
            </h3>
          </div>
        </div>

        <Swiper
          className="sample-slider w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            reverseDirection: true,
            stopOnLastSlide: false,
          }}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {galImgs.map((imgUrl, idx) => (
            <SwiperSlide key={idx} className="m-2">
              <Image
                width={400}
                height={400}
                className="object-contain w-auto h-auto mx-auto"
                src={imgUrl}
                alt="gallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="sample-slider w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
          }}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {galImgs2.map((imgUrl, i) => (
            <SwiperSlide key={i} className="m-2 ">
              <Image
                width={400}
                height={400}
                className="object-contain w-auto h-auto mx-auto "
                src={imgUrl}
                alt="gallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectGallery;
