import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import AboutUs from "./AboutUs/AboutUs";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback";
import WhoIsTheBest from "./WhoIsTheBest/WhoIsTheBest";
import IsConcretePumpingCostly from "./IsConcretePumpingCostly/IsConcretePumpingCostly";
import KnowAboutConcretePumping from "./KnowAboutConcretePumping/KnowAboutConcretePumping";
import WorkStyle from "./WorkStyle/WorkStyle";
import Review from "./Review/Review";

const MainHomePageComponent = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>

      <section>
        <AboutUs />
      </section>

      <section>
        <KnowAboutConcretePumping />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <WorkStyle />
      </section>

      <section>
        <IsConcretePumpingCostly />
      </section>

      <section>
        <WhoIsTheBest />
      </section>

      <section>
        <OurServiceAreas />
      </section>

      <div>
        <GiveUsFeedback />
      </div>
    </div>
  );
};

export default MainHomePageComponent;
