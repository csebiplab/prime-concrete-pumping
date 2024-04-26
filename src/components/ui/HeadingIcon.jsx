import Image from "next/image";

const HeadingIcon = ({ text = "empty text" }) => {
  return (
    <div className="flex items-center pb-2">
      {/* <Image
        src="/assets/licensed/sectionicon.png"
        width={48}
        height={16}
        alt="section logo"
        className="h-4 w-12 mr-2 text-dark text-base"
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="12"
        viewBox="0 0 27 12"
        fill="none"
      >
        <path
          d="M1 5H0V7H1V5ZM26.7735 6L21 0.226497L15.2265 6L21 11.7735L26.7735 6ZM1 7H21V5H1V7Z"
          fill="#F43939"
        />
      </svg>
      <p className=" text-center md:text-base xs:text-[10px]">{text}</p>
    </div>
  );
};

export default HeadingIcon;
