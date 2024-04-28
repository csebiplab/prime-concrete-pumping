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
import LeadingCompany from "./LeadingCompany/LeadingCompany";
import ExpertArea from "./ExpertArea/ExpertArea";
import OurWorkingProcess from "./OurWorkingProcess/OurWorkingProcess";
import AnySizePr from "./AnySizePr/AnySizePr";
import DepandableConcretePumpTruck from "./DepandableConcretePumpTruck/DepandableConcretePumpTruck";
import ExOfOurCompany from "./ExOfOurCompany/ExOfOurCompany";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import ConcretePumpingService from "./ConcretePumpingService/ConcretePumpingService";
import BannerForm from "./HomeBanner/BannerForm";

const MainHomePageComponent = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <section className="block md:hidden container">
        <BannerForm />
      </section>
      <section>
        <AboutUs />
      </section>

      <section>
        <KnowAboutConcretePumping />
      </section>

      <div>
        <ConcretePumpingService />
      </div>

      <div>
        <ProjectGallery />
      </div>

      <section>
        <ExOfOurCompany />
      </section>

      <section>
        <DepandableConcretePumpTruck />
      </section>

      <section>
        <AnySizePr />
      </section>

      <section>
        <OurWorkingProcess />
      </section>

      <div>
        <ExpertArea />
      </div>

      <section>
        <LeadingCompany />
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

      <div>
        <OurServiceAreas />
      </div>

      <div>
        <GiveUsFeedback />
      </div>
    </div>
  );
};

export default MainHomePageComponent;
