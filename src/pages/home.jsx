import React from "react";
import bgImage from "/home-bg.jpeg";

function Home() {
  return (
    // <div
    //   className="bg-auto bg-no-repeat bg-center"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    // >
    //   <div className="flex justify-between p-2">
    //     <div className="h-8 w-8">Logo</div>
    //     <div className="flex items-center space-x-6">
    //       <ul className="flex space-x-3">
    //         <li>Beranda</li>
    //         <li>Submit Izin</li>
    //         <li>Kontak Kami</li>
    //       </ul>
    //       <button>Masuk</button>
    //     </div>
    //   </div>
    // </div>
    <>
      <section className="w-full max-h-screen overflow-clip">
        <img
          src={bgImage}
          alt="background city"
          className="bg-cover bg-center scale-150 w-full h-full"
        />
      </section>
      <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
        <div className="h-8 w-8">Logo</div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-3">
            <li>Beranda</li>
            <li>Submit Izin</li>
            <li>Kontak Kami</li>
          </ul>
          <button>Masuk</button>
        </div>
      </div>
    </>
  );
}

export default Home;
