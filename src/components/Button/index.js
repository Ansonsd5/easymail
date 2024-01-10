import React from "react";

const Button = (props) => {
  const { onClick, label } = props;
  return (
    <>
      <button
        className="com-btn w-[fit-content] sm:w-[100%]  mx-auto text-white bg-[#ff5c35] py-2 px-8 rounded-md uppercase font-semibold h-fit "
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
