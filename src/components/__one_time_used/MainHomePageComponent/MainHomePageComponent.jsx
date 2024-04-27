import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import AboutUs from "./AboutUs/AboutUs";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback";
import WhoIsTheBest from "./WhoIsTheBest/WhoIsTheBest";
import IsConcretePumpingCostly from "./IsConcretePumpingCostly/IsConcretePumpingCostly";

const MainHomePageComponent = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>

      <section>
        <AboutUs />
      </section>

      {/*

      <section>
        <OurServices />
      </section>

      <section>
        <MaterialsNEquip />
      </section>

      <section>
        <TopTierPools />
      </section>

      <section>
        <BenefitsWithEasyPools />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <HireForInstallationService />
      </section>

      <section>
        <JoinWithUs />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <OurExpertPoolInstaller />
      </section>

     <section>
        <OurServiceAreas />
      </section>


       <section>
        <LicensedNInsured />
      </section>

 
      
  */}

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
