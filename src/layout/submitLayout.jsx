import React, { useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import logo from "/logodki.svg";
import bgImage from "/bg-sketch.png";
import { BsCheckLg } from "react-icons/bs";

function SubmitLayout() {
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
  }, [params]);
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
        <ol className="flex items-center space-x-5 justify-center h-full font-poppins text-sm">
          <li className="flex items-center space-x-2 stepper-active">
            <div>
              <BsCheckLg className="w-3 h-3 text-gray-200" />
            </div>
            <p className="text-gray-500">Form Pengajuan Izin</p>
          </li>
          <li className="flex items-center space-x-2 stepper">
            <div>2</div>
            <p className="text-gray-500">Pilih Persil</p>
          </li>
          <li className="flex items-center space-x-2 stepper">
            <div>3</div>
            <p className="text-gray-500">Upload GPA 3D</p>
          </li>
          <li className="flex items-center space-x-2 stepper">
            <div>4</div>
            <p className="text-gray-500">Pemeriksaan GPA</p>
          </li>
        </ol>
      </div>

      <div className="-z-40 absolute left-0 right-0 w-full bg-gray-100 h-[calc(100vh_-_9.5rem)] overflow-clip">
        <img src={bgImage} alt="background" className=" bg-cover bg-center" />
      </div>

      {/* Content */}
      <Outlet />
    </div>
  );
}
export default SubmitLayout;
