import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const KnowAboutConcretePumping = () => {
  return (
    <div className="container ">
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="">
          <Image
            alt="What is concrete pumping"
            src="/assets/images/what-is-concrete-pumpung.png"
            width={650}
            height={472}
            className="w-auto h-auto lg:w-[650px] lg:h-[472px]"
          />
        </div>

        <div>
          <div className="">
            <HeadingIcon
              text={headingIconText.knowAboutConcretePumping__IconText}
            />

            <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4 text-black !text-3xl !lg:text-4xl !font-medium">
              What Is <span className="text-primary">Concrete Pumping?</span>
            </h3>

            <p className="text-lg font-medium leading-[194%]">
              Concrete pumping is a method used in construction to efficiently
              and precisely deliver liquid concrete to its intended location. It
              involves using specialized equipment, typically a concrete pump,
              to transport the concrete from the mixing truck to the desired
              area, such as a building foundation, slab, or elevated surface.
              The pump works by using hydraulic pressure to push the concrete
              through a system of pipes and hoses, allowing for placement in
              hard-to-reach or elevated areas with minimal manual labor. This
              process offers several advantages, including faster placement,
              reduced labor costs, and enhanced accuracy in pouring concrete,
              making it a popular choice for a wide range of construction
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutConcretePumping;
