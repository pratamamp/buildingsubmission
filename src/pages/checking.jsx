import React from "react";
import Accordion from "../components/Accordion/Accordion";

function CheckingGPA() {
  return (
    <div className="flex">
      <div className="w-1/4 h-[calc(100vh_-_9.5rem)] bg-sky-50 border-r border-[#D2D2D2]">
        <h2 className=" text-xl font-semibold px-4 py-10">Pemeriksaan GPA</h2>
        <Accordion />
      </div>
      <div className="flex-auto bg-white/90"></div>
    </div>
  );
}

export default CheckingGPA;
