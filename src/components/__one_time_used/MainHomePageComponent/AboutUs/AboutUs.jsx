import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./AboutUs.css";
import CommonButton from "@/components/ui/CommonButton";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[50px]">
        <div className="order-2 md:order-1">
          <div className="">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.aboutUs__IconText} />
            </div>
            <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4 text-2xl md:text-3xl lg:text-4xl text-dark leading-normal text-center md:text-start">
              About Our{" "}
              <span className="text-primary">Concrete Pumping Company</span>
            </h3>
            <p className="text-lg font-medium leading-[194%] mt-6 mb-8 md:mb-12">
              Prime Concrete Pumping is the go-to solution for efficient and
              reliable concrete pumping services in Toronto and the surrounding
              areas. With a commitment to quality and safety, we specialize in
              delivering concrete precisely where you need it, whether it's for
              residential, commercial, or industrial projects. Our
              state-of-the-art equipment and skilled operators ensure smooth and
              accurate concrete placement
            </p>
            <CommonButton styleProp={{ hidden: "hidden" }} />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-7 gap-x-4">
            <div className="col-span-4">
              <div>
                <div className="mb-6 w-full h-[132px] border-[9px] rounded-md border-primary flex justify-center">
                  <div className="w-full text-center flex  flex-col justify-center">
                    <p className="text-[45px] font-semibold !mb-0 leading-[45px]">
                      15+
                    </p>
                    <p className="text-[25px] font-semibold !mt-0 leading-normal">
                      {" "}
                      Successful Years
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src="/assets/images/about-us1.png"
                    alt="About us"
                    width={352}
                    height={288}
                    className="!max-h-[288px] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src="/assets/images/about-us2.png"
                alt="About us"
                width={292}
                height={716}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
