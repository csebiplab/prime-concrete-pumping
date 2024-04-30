import CommonButton from "@/components/ui/CommonButton";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container home-banner py-20 min-h-screen flex justify-between items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12">
        <div>
          <h1 className="text-4xl lg:text-5xl 3xl:text-[55px] 4xl:text-[60px] 5xl:text-[65px] !font-medium">
            <span className="text-primary">Toronto Concrete</span>
            <br />
            Pumping Company
          </h1>
          <p className="text-lg font-medium leading-[194%] pt-6 pb-14">
            From residential foundations to commercial projects, Prime Concrete
            Pumping offers unmatched expertise in Toronto's concrete pumping
            needs.
          </p>
          <CommonButton text="Get An Estimate" />
        </div>
        <div className="banner__form w-atuo py-10 px-12 mr-4 hidden md:block">
          <div>
            <p className="text-2xl text-white font-medium mb-6">
              Request Pumping
              <br />
              assistance today
            </p>
            <form className="flex flex-col gap-7 mb-9">
              <input
                type="text"
                placeholder="Your Name"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Service Type"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="h-[50px] px-7"
              />
              <input
                type="text"
                placeholder="Message"
                className="h-[50px] px-7"
              />
            </form>
            <div className="flex justify-center">
              <CommonButton text="Book Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
