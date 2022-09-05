import React from "react";
import bgImage from "/home-bg.jpeg";
import logo from "/logodki.svg";

function Home() {
  return (
    <>
      <section className="absolute top-0 left-0 right-0 -z-10 w-full max-h-screen overflow-clip">
        <img
          src={bgImage}
          alt="background city"
          className="bg-cover bg-center scale-150 w-full h-full"
        />
      </section>

      <div className="flex justify-between items-center py-8 px-3">
        <div className="flex items-center space-x-6">
          <div className="h-8 w-8">
            <img src={logo} alt="logo dki" className=" object-contain" />
          </div>
          <ul className="flex space-x-4 items-center font-poppins text-sm text-white">
            <li className=" border-b-2">
              <button className="pb-2">Beranda</button>
            </li>
            <li className="">
              <button className="pb-2">Submit Izin</button>
            </li>
            <li className="">
              <button className="pb-2">Tata Cara</button>
            </li>
            <li className="">
              <button className="pb-2">Kontak Kami</button>
            </li>
          </ul>
        </div>
        <button className="rounded-full border-2 border-white/70 bg-[#12519E] text-center flex items-center text-sm justify-center px-4 py-2 text-white">
          Masuk
        </button>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh_-_7rem)]">
        <h2 className=" font-poppins text-7xl w-2/3 text-center text-white">
          Persetujuan Bangunan Gedung
        </h2>
      </div>
      <div className="absolute bg-gradient-to-b from-[#3883ed] to-white/0 inset-0 -z-10 h-1/4" />
    </>
  );
}

export default Home;
