import React from "react";
import "./HomeBanner.css";
import CommonButton from "@/components/ui/CommonButton";

const BannerForm = () => {
  return (
    <div className="banner__form w-full py-9 px-7">
      <div>
        <p className="text-2xl text-white font-medium mb-6">
          Request plumbing
          <br />
          assistance today
        </p>
        <form className="flex flex-col gap-7 mb-9">
          <input type="text" placeholder="" className="h-[50px]" />
          <input type="text" placeholder="" className="h-[50px]" />
          <input type="text" placeholder="" className="h-[50px]" />
          <input type="text" placeholder="" className="h-[50px]" />
          <input type="text" placeholder="" className="h-[50px]" />
        </form>
        <div className="flex justify-center">
          <CommonButton text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
