const CommonButton = ({ styleProp, text = "Learn More" }) => {
  return (
    <button className="bg-primary px-[34px] py-[10px] flex justify-center items-center rounded-md">
      <span className="text-white text-lg font-medium">{text}</span>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        className={`${styleProp?.hidden} ml-2`}
      >
        <path
          d="M0 10.0475L4.33019 5.84072L0 1.63389L1.33962 0.341594L7 5.84072L1.33962 11.3398L0 10.0475Z"
          fill="white"
        />
      </svg> */}
    </button>
  );
};

export default CommonButton;
