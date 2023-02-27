import React, { useEffect } from "react";
import bgImage from "/home-bg.jpeg";
import logo from "/logodki.svg";
import { Link } from "react-router-dom";
import videoBg from "/videoart.mp4";

function Home() {
  function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase();
    const hasMediaCapabilities = !!(
      navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
    );
    const isSafari =
      ua.indexOf("safari") != -1 &&
      !(ua.indexOf("chrome") != -1) &&
      ua.indexOf("version/") != -1;
    return isSafari && hasMediaCapabilities;
  }

  useEffect(() => {}, []);

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
          <ul className="flex space-x-4 items-center font-poppins text-white">
            <li className="border-b-2 pb-2">
              <Link to="/">Beranda</Link>
            </li>
            <li className="pb-2">
              <Link to="/submission">Input Data 3D</Link>
            </li>
            <li className="pb-2">
              <Link to="#">Tata Cara</Link>
            </li>
            <li className="pb-2">
              <Link to="#">Kontak kami</Link>
            </li>
          </ul>
        </div>
        {/* <button className="rounded-full border-2 border-white/70 bg-[#12519E] text-center flex items-center justify-center px-4 py-2 text-white">
          Masuk
        </button> */}
      </div>
      <div className="flex justify-center items-center h-[calc(100vh_-_7rem)]">
        <h2 className=" font-bold font-poppins text-7xl w-2/3 text-center text-white">
          Input Data 3D Bangunan
        </h2>
      </div>
      <div className="bg-gradient-to-b from-[#3883ed] to-white/0 inset-0 -z-10 h-1/4" />
    </>
  );
}

export default Home;
