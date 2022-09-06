import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "/logodki.svg";
import bgImage from "/bg-transparent.png";

function SubmitLayout() {
  return (
    <div className="">
      {/* topbar */}
      <div className="p-3 bg-[#3A5170] flex justify-between items-center">
        <div className="flex space-x-10">
          <div className="w-8 h-8">
            <img src={logo} alt="logo dki" className="object-contain" />
          </div>
          <ul className="flex text-gray-200 space-x-5 font-opensans text-sm items-center">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/submission">Submit Izin</Link>
            </li>
            <li>
              <Link to="#">Tata Cara</Link>
            </li>
            <li>
              <Link to="#">Kontak Kami</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-b-2 h-24 w-full">
        <ol className="flex items-center justify-center h-full">
          <li className="w-8 h-8 rounded-full bg-[#12519E]"></li>
        </ol>
      </div>

      <div className="-z-40 absolute left-0 right-0 w-full bg-gray-100 h-[calc(100vh_-_9.5rem)] overflow-clip">
        <img src={bgImage} alt="background" className="bg-cover bg-center" />
      </div>

      {/* Content */}
      <Outlet />
    </div>
  );
}
export default SubmitLayout;
