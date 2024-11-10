import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import GiveUsFeedback from "@/components/__one_time_used/MainHomePageComponent/GiveUsFeedback/GiveUsFeedback";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";

const BestConcretePumpingServicesInBarrie = () => {
  return (
    <div>
      <section>
        <BannerSection />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <OurServices />
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
