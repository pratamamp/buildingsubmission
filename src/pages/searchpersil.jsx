import React, { useState } from "react";
import { PersilMap } from "../components/Persil/Persil";

function SearchPersil() {
  const [dataPersil, setDataPersil] = useState(null);
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 h-[calc(100vh_-_9.5rem)] p-4 flex flex-col">
        <h2 className="font-poppins font-semibold">Pilih Persil</h2>
        <p className=" font-poppins text-xs my-2">
          Pilih Atau Cari Persil Tanah Untuk Pengajuan Melalui Peta Yang
          Tersedia
        </p>
        <div className="w-full flex flex-grow items-center justify-center px-5 border-b-2">
          {dataPersil ? (
            <ul>
              <li>
                Kota:{" "}
                {String(dataPersil.nama_kota)
                  ?.toLowerCase()
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </li>
              <li>
                Kecamatan:{" "}
                {dataPersil.kecamatan
                  ?.toLowerCase()
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </li>
              <li>
                Kelurahan:{" "}
                {dataPersil.kelurahan
                  ?.toLowerCase()
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </li>
              <li>RT/RW: -</li>
              <li>Zona: {dataPersil.zona}</li>
              <li>Sub-Zona: {dataPersil.sub_zona}</li>
              <li>Luas Bidang: -</li>
              <li>KDB: {dataPersil.kdb}</li>
              <li>KLB: {dataPersil.klb}</li>
              <li>KDH: {dataPersil.kdh}</li>
              <li>KTB: {dataPersil.ktb}</li>
              <li>Ketinggian: {dataPersil.tinggi_m_dummy}</li>
              <li>PSL: {dataPersil.psl}</li>
              <li>Tipe: {dataPersil.tipe}</li>
            </ul>
          ) : (
            <h2 className="font-poppins text-xs text-blue-400 text-center">
              Anda Belum Memilih Lokasi Untuk Pengajuan IMB
            </h2>
          )}
        </div>
        <div className="flex justify-evenly items-center my-3 font-poppins text-xs">
          <button className="border-2 rounded-lg p-2 w-28">Batal</button>
          <button className="w-28 p-2 rounded-lg bg-[#12519E] text-white">
            Selanjutnya
          </button>
        </div>
      </div>
      <PersilMap
        className="w-3/4 h-[calc(100vh_-_9.5rem)] flex flex-col"
        {...{ setDataPersil }}
      />
    </div>
  );
}

export default SearchPersil;
