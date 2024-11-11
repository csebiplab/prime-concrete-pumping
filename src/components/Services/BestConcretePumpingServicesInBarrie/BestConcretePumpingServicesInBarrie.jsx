import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import OurServiceAreas from "@/components/__one_time_used/MainHomePageComponent/OurServiceAreas/OurServiceAreas";
import GiveUsFeedback from "@/components/__one_time_used/MainHomePageComponent/GiveUsFeedback/GiveUsFeedback";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";
import Experts from "./Experts/Experts";
import WeNeedBusiness from "./WeNeedBusiness/WeNeedBusiness";
import TrustyCompany from "./TrustyCompany/TrustyCompany";
import Cost from "./Cost/Cost";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import Faq from "./Faq/Faq";

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
        <Experts />
      </section>

      <section>
        <WeNeedBusiness />
      </section>

      <section>
        <TrustyCompany />
      </section>

      <section>
        <Cost />
      </section>

      <section>
        <ReadyToStart />
      </section>

      <section>
        <Faq />
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
