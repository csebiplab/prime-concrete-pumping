import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import GiveUsFeedback from "@/components/__one_time_used/MainHomePageComponent/GiveUsFeedback/GiveUsFeedback";

const BestConcretePumpingServicesInBarrie = () => {
  return (
    <div>
      <section className="">
        <BannerSection />
      </section>

      <section>
        <OurServiceAreas />
      </section>

      <section>
        <GiveUsFeedback />
      </section>
    </div>
  );
};

export default BestConcretePumpingServicesInBarrie;
