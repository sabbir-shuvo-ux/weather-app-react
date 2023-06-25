import React from "react";

const SliderButton = ({ sliderId }) => {
  const slideLeft = () => {
    var slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft + 200;
  };
  return (
    <>
      <div className="absolute left-0 top-[50%] translate-y-[-50%] transition-all z-50 invisible opacity-0 group-hover:opacity-100 group-hover:visible">
        <svg
          onClick={slideLeft}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[2.4rem] h-[2.5rem] text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-[50%] translate-y-[-50%] transition-all z-50 invisible opacity-0 group-hover:opacity-100 group-hover:visible">
        <svg
          onClick={slideRight}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[2.4rem] h-[2.5rem] text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </>
  );
};

export default SliderButton;
