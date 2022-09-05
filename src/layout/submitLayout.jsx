import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "/logodki.svg";

function SubmitLayout() {
  return (
    <div className="relative">
      {/* topbar */}
      <div className="p-3 bg-[#3A5170] flex justify-between items-center">
        <div className="flex space-x-10">
          <div className="w-8 h-8">
            <img src={logo} alt="logo dki" className="object-contain" />
          </div>
          <ul className="flex text-white space-x-5">
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
      {/* Content */}
      <Outlet />
    </div>
  );
}
export default SubmitLayout;
