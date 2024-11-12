"use client";
import { useRef } from 'react';
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const reviews = [
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over",
    author: "Lisa Silva",
    address: "North York",
  },
];

const Review = () => {
  const swiperSlide = useRef();
  return (
    <div className="">
      <div className="container padding__top">
        <div className="">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.reviews__headingIconText}/>
            </div>
            <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center mb-[25px]">
            Here's what to expect <span className="text-primary">when you hire us</span>
          </h2>
          </div>
          {/* =================== Card Section =============== */}
          <Swiper
            ref={swiperSlide}
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={3000}
            allowTouchMove={true}
            breakpoints={breakpoints}
          >
            {reviews.map(({ address, author, reviewText }, i) => (
              <SwiperSlide
                key={i}
              >
                <div className="card_bg py-[14px] px-[12px]">
                  <Image
                    src="/assets/best_concrete_pumping_services/review.png"
                    width={90}
                    height={51}
                    alt="google"
                    className="mb-[10px]"
                  />
                  <Image
                    src="/assets/best_concrete_pumping_services/star.png"
                    width={120}
                    height={17}
                    alt="five star"
                    className=""
                  />

                  <div className="text-start">
                    <p className="text-base font-normal my-[12px] text-black leading-[32px]">
                      {reviewText}
                    </p>
                    <p className="text-[15px] font-bold leading-[20px] text-black ">
                      {author}
                    </p>
                    <p className="text-xs font-normal mt-[10px] text-[#4A4A4A]">{address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
