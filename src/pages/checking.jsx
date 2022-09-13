import React, { useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import { BuildingScene } from "../components/BuildingScene/Building";

function CheckingGPA() {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/4 h-[calc(100vh_-_9.5rem)] bg-gray-50 border-r border-[#D2D2D2]">
        <div className="flex-grow w-full">
          <h2 className="p-4 text-2xl font-poppins font-semibold">
            Pemeriksaan GPA
          </h2>
          <div className="">
            <Accordion />
          </div>
        </div>
        <div className="flex justify-evenly items-center font-poppins w-full h-16 mt-auto my-3">
          <button className="border border-[#757575]  text-[#757575] rounded-lg bg-white h-4/5 w-1/3">
            Batal
          </button>
          <button className="border rounded-lg bg-[#12519E] text-white h-4/5 w-1/3">
            Selanjutnya
          </button>
        </div>
      </div>
      <div className="flex-auto bg-white/90">
        <BuildingScene className="w-full h-[calc(100vh_-_9.5rem)] flex flex-col" />
      </div>
    </div>
  );
}

export default CheckingGPA;
