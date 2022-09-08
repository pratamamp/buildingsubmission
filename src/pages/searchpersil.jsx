import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersilMap } from "../components/Persil/Persil";

function SearchPersil() {
  const [dataPersil, setDataPersil] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/submission/3");
  };
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 h-[calc(100vh_-_9.5rem)] px-4 flex flex-col text-[#424242]">
        <div>
          <h2 className="font-poppins font-semibold text-black">
            Pilih Persil
          </h2>
          <p className=" font-poppins text-xs my-2 text-[#5C5C5C]">
            Pilih Atau Cari Persil Tanah Untuk Pengajuan Melalui Peta Yang
            Tersedia
          </p>
        </div>
        {!dataPersil ? (
          <div className="w-full flex flex-grow items-center justify-center px-5 border-b-2">
            <h2 className="font-poppins text-xs text-[#12519E] text-center">
              Anda Belum Memilih Lokasi Untuk Pengajuan IMB
            </h2>
          </div>
        ) : (
          <>
            <div className="border-b border-gray-200 font-poppins py-3 space-y-2 overflow-y-auto no-scrollbar">
              <div className="text-xs">
                <h2 className="font-semibold text-sm text-[#12519E]">Lokasi</h2>
                <ul className="space-y-1">
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
                </ul>
              </div>

              <div className="text-xs">
                <h2 className="font-semibold text-sm text-[#12519E]">
                  Informasi Sub Zona
                </h2>
                <ul className="space-y-1">
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
              </div>

              <div className="text-xs space-y-1">
                <h2 className="font-semibold text-sm text-[#12519E]">
                  Informasi Lainnya
                </h2>
                <p>Metode Penggambaran</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center font-poppins text-xs w-full my-auto">
              <button className="border rounded-lg px-3 py-2 w-28 my-2 text-gray-700">
                Batal
              </button>
              <button
                className="w-28 px-3 py-2 rounded-lg bg-[#12519E] text-white my-2"
                onClick={handleSubmit}
              >
                Selanjutnya
              </button>
            </div>
          </>
        )}
      </div>
      <PersilMap
        className="w-3/4 h-[calc(100vh_-_9.5rem)] flex flex-col"
        {...{ setDataPersil }}
      />
    </div>
  );
}

export default SearchPersil;
