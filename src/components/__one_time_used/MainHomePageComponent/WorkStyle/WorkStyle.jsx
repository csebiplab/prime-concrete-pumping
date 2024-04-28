import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const WorkStyle = () => {
  return (
    <div className="container ">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="order-2 md:order-1">
          <div className="">
            <HeadingIcon text={headingIconText.workStyle__IconText} />

            <h3 className="text-black !text-xl !md:text-3xl !font-medium">
              How <span className="text-primary">Concrete Pump Works?</span>
            </h3>

            <p className="text-lg font-medium leading-[194%] mt-6">
              A concrete pump is a vital machine used in construction to
              transfer liquid concrete from one place to another. It works by
              utilizing a piston or hydraulic system to pump concrete through
              pipes and hoses to the desired location. The process begins with
              the concrete being poured into a hopper connected to the pump.
              Inside the pump, a powerful piston or hydraulic system generates
              pressure to push the concrete through the pipes. As the concrete
              moves through the pipes, it maintains its fluidity, making it
              easier to transport and place accurately. The operator controls
              the flow rate and direction of the concrete using a remote control
              device. Once the concrete reaches its destination, it can be
              discharged directly onto the construction site. This method is
              efficient, saving time and labor compared to traditional methods
              like using wheelbarrows or buckets.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            alt="What is concrete pumping"
            src="/assets/images/work-style.png"
            width={660}
            height={518}
            className="w-auto h-auto lg:w-[660px] lg:h-[518px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkStyle;
