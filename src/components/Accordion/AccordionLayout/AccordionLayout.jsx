import React, { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosCloseCircle,
} from "react-icons/io";
import { Interweave, Markup } from "interweave";

function AccordionLayout({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
  checked,
}) {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <div className="py-3 border-t border-b hover:bg-sky-100">
      <div
        onClick={() => handleSetIndex(index)}
        className="flex justify-between mt-2 w-11/12 cursor-pointer"
      >
        <div className="w-1/6 flex items-center justify-center">
          {checked ? (
            <BsFillCheckCircleFill className="w-5 h-5 text-green-500" />
          ) : (
            <IoIosCloseCircle className="w-6 h-6 text-red-600" />
          )}
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
        <div className="font-poppins text-sm shadow-3xl shadow-cyan-500/50 p-4 pl-14 mb-6">
          <Interweave content={children} />
        </div>
      )}
    </div>
  );
}

export default AccordionLayout;
