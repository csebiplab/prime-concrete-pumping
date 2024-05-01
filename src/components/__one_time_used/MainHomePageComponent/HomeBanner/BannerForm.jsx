import React from "react";
import "./HomeBanner.css";
import CommonButton from "@/components/ui/CommonButton";

const BannerForm = () => {
  return (
    <div className="banner__form w-full py-9 px-7">
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
          <textarea
            type="text"
            placeholder="Message"
            className="h-[50px] px-7"
          ></textarea>
        </form>
        <div className="flex justify-center">
          <CommonButton text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
