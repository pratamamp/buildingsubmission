import React from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";

function CheckingGPA() {
  const navigate = useNavigate();

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
          <button
            className="border rounded-lg bg-[#12519E] text-white h-4/5 w-1/3"
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>
        </div>
      </div>
      <div className="flex-auto bg-white/90">content</div>
    </div>
  );
}

export default CheckingGPA;
