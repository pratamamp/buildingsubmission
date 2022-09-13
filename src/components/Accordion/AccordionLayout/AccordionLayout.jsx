import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function AccordionLayout({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <div className="py-3 border-t border-b hover:bg-sky-100">
      <div
        onClick={() => handleSetIndex(index)}
        className="flex justify-between mt-2 w-11/12 cursor-pointer"
      >
        <div className="w-1/6 text-green-500 flex items-center justify-center">
          <BsFillCheckCircleFill className="w-5 h-5" />
        </div>
        <h2 className="w-4/6 items-center flex font-poppins">{title}</h2>
        <div className="w-1/6 flex items-center justify-end">
          {activeIndex === index ? (
            <IoIosArrowDown className="w-4 h-4" />
          ) : (
            <IoIosArrowForward className="w-4 h-4" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <p className=" font-poppins text-sm shadow-3xl shadow-cyan-500/50 p-4 pl-14 mb-6">
          {children}
        </p>
      )}
    </div>
  );
}

export default AccordionLayout;
