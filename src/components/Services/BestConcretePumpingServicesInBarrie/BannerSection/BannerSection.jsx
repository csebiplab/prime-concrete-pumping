"use client";

import CommonButton from "@/components/ui/CommonButton";
import "./BannerSection.css";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const BannerSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="container home-banner py-20 flex justify-between items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12">
        <div>
          <h1 className="text-4xl lg:text-5xl 3xl:text-[55px] 4xl:text-[60px] 5xl:text-[65px] !font-medium">
          Best Concrete Pumping
            <span className="text-primary">Services in Barrie</span>
          </h1>
          <h3 className="text-lg font-medium leading-[194%] pt-6 pb-14">
          Prime Concrete Pumping is a reliable, efficient, and trusted choice for concrete pumping services in Barrie.
          </h3>
          {/* <CommonButton text="Get An Estimate" /> */}
          <Button
            onClick={handleOpen}
            className="bg-primary px-[34px] py-[10px] flex justify-center items-center rounded-md"
          >
            <span className="text-white text-lg font-medium">
              Get An Estimate
            </span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              className={`ml-2`}
            >
              <path
                d="M0 10.0475L4.33019 5.84072L0 1.63389L1.33962 0.341594L7 5.84072L1.33962 11.3398L0 10.0475Z"
                fill="white"
              />
            </svg> */}
          </Button>

          <>
            <Dialog
              open={open}
              handler={handleOpen}
              size={"xs"}
              className="banner__form w-full pt-9 px-12"
            >
              {/* <div className="banner__form w-full py-9 px-7"> */}
              <div>
                <p className="text-2xl text-white font-medium mb-6">
                  Request Pumping
                  <br />
                  assistance today
                </p>
                <form className="flex flex-col gap-5 mb-9">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="py-2 px-7"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="py-2 px-7"
                  />
                  <input
                    type="text"
                    placeholder="Service Type"
                    className="py-2 px-7"
                  />
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="py-2 px-7"
                  />
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="py-2 px-7"
                  />

                  <div className="flex justify-center">
                    <button
                      type="input"
                      disabled
                      className="bg-primary px-[34px] py-[10px] flex justify-center items-center rounded-md"
                    >
                      <span className="text-white text-lg font-medium">
                        Book Now
                      </span>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        className={`ml-2`}
                      >
                        <path
                          d="M0 10.0475L4.33019 5.84072L0 1.63389L1.33962 0.341594L7 5.84072L1.33962 11.3398L0 10.0475Z"
                          fill="white"
                        />
                      </svg> */}
                    </button>
                  </div>
                </form>
              </div>
              {/* </div> */}
            </Dialog>
          </>
        </div>
        <div className="banner__form w-atuo py-10 px-12 mr-4 hidden md:block">
          <div>
            <p className="text-2xl text-white font-medium mb-6">
              Request Pumping
              <br />
              assistance today
            </p>
            <form className="flex flex-col gap-7 mb-9">
              <input
                type="text"
                placeholder="Your Name"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Service Type"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Message"
                className="h-[50px] px-7"
              />
            </form>
            <div className="flex justify-center">
              <CommonButton text="Book Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
