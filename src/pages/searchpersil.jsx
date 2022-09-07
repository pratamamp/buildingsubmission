import React from "react";

function SearchPersil() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 h-[calc(100vh_-_9.5rem)] p-4 flex flex-col">
        <h2 className="font-poppins font-semibold">Pilih Persil</h2>
        <p className=" font-poppins text-xs my-2">
          Pilih Atau Cari Persil Tanah Untuk Pengajuan Melalui Peta Yang
          Tersedia
        </p>
        <div className="w-full flex flex-grow items-center justify-center px-5 border-b-2">
          <h2 className="font-poppins text-xs text-blue-400 text-center">
            Anda Belum Memilih Lokasi Untuk Pengajuan IMB
          </h2>
        </div>
        <div className="flex justify-evenly items-center my-3 font-poppins text-xs">
          <button className="border-2 rounded-lg p-2 w-28">Batal</button>
          <button className="w-28 p-2 rounded-lg bg-[#12519E] text-white">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPersil;