const HeadingIcon = ({ text = "empty text" }) => {
  return (
    <div className="flex items-center pb-2">
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
      <p className="text-center text-sm ml-1">{text}</p>
    </div>
  );
};

export default HeadingIcon;
