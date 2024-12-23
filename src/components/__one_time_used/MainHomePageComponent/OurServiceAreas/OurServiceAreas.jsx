"use client";
import "./area.css";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/autoplay";

import { SwiperButton } from "./SwiperButton";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

const maps = [
  {
    title: "Toronto",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67411467596!2d-79.54286835206918!3d43.71812279997104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333598576!5m2!1sen!2sbd",
  },
  {
    title: "Barrie",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.44626604003!2d-79.7481233253357!3d44.359109630568966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333675764!5m2!1sen!2sbd",
  },
  {
    title: "Woodbridge",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92146.1028615084!2d-79.6667384123388!3d43.802623849002906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335202289!5m2!1sen!2sbd",
  },
  {
    title: "Richmond Hill",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91990.30790729084!2d-79.51070275565553!3d43.90353934483067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335279989!5m2!1sen!2sbd",
  },
  {
    title: "Staten Island",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193981.64887657942!2d-74.31162963036931!3d40.56448849786039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1731335339839!5m2!1sen!2sbd",
  },
  {
    title: "Toronto",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67411467596!2d-79.54286835206918!3d43.71812279997104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333598576!5m2!1sen!2sbd",
  },
  {
    title: "Barrie",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.44626604003!2d-79.7481233253357!3d44.359109630568966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333675764!5m2!1sen!2sbd",
  },
  {
    title: "Woodbridge",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92146.1028615084!2d-79.6667384123388!3d43.802623849002906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335202289!5m2!1sen!2sbd",
  },
  {
    title: "Richmond Hill",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91990.30790729084!2d-79.51070275565553!3d43.90353934483067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335279989!5m2!1sen!2sbd",
  },
  {
    title: "Staten Island",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193981.64887657942!2d-74.31162963036931!3d40.56448849786039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1731335339839!5m2!1sen!2sbd",
  }
];

const OurServiceAreas = () => {
  return (
    <div className="custom-container mt-10">
      <div className="mx-[30px] md:mx-0">
        <div className="mx-auto flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.map__IconTxt} />

          <h6 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4  text-base md:text-xl lg:text-4xl text-center">
            <span className="text-primary">Service Area</span> of Concrete
            Plumbing in Toronto
          </h6>
        </div>

        {/* //   ======================= map Card ==================// */}
        <>
          <div className="">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={breakpoints}
              // className="!px-8 !xl:px-0"
            >
              {maps.map((loc, i) => (
                <SwiperSlide
                  key={i}
                  // className="relative  rounded-xl px-[45px]"

                  className={`px-0 mx-6`}
                >
                  <div
                    className={`${
                      (i + 2) % 2 === 0 ? "lg:-mt-10 md:-mt-5" : ""
                    }`}
                  >
                    <div className="w-full shadow-md p-0 mt-[45px] lg:mt-[65px] ">
                      <iframe
                        src={loc?.src}
                        height="325"
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                      />
                      <div className="absolute rounded-xl inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                          Visit Map
                        </button>
                      </div>
                      <p className="text-base py-4 bg-primary text-center lg:text-[18px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                        {loc?.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="block lg:hidden">
                <SwiperButton />
              </div>
            </Swiper>
          </div>
        </>
      </div>
    </div>
  );
};

export default OurServiceAreas;
