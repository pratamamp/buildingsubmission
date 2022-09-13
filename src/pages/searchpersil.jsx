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
      <div className="w-1/4 bg-gray-50 h-[calc(100vh_-_9.5rem)] px-4 flex flex-col text-[#424242] border-r border-[#D2D2D2]">
        <div className="mt-10">
          <h2 className="font-poppins text-2xl font-semibold text-black">
            Pilih Persil
          </h2>
          <p className="font-poppins my-2 text-[1rem] text-[#5C5C5C]">
            Pilih Atau Cari Persil Tanah Untuk Pengajuan Melalui Peta Yang
            Tersedia
          </p>
        </div>
        {!dataPersil ? (
          <div className="w-full flex flex-grow items-center justify-center px-5 border-b-2">
            <h2 className="font-poppins text-[#12519E] text-center">
              Anda Belum Memilih Lokasi Untuk Pengajuan IMB
            </h2>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh_-_9.5rem)]">
            <div className="border-b border-gray-200 font-poppins space-y-2 overflow-y-auto no-scrollbar flex-grow">
              <div>
                <h2 className="font-semibold text-[#12519E] text-lg">Lokasi</h2>
                <table className="table-fixed w-full text-left text-[#424242] text-poppins">
                  <tbody>
                    <tr className="">
                      <td scope="row" className="">
                        Kota
                      </td>
                      <td className=" px-6">
                        {String(dataPersil.nama_kota)
                          ?.toLowerCase()
                          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
                      </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Kecamatan
                      </td>
                      <td className=" px-6">
                        {dataPersil.kecamatan
                          ?.toLowerCase()
                          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
                      </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Kelurahan
                      </td>
                      <td className=" px-6">
                        {dataPersil.kelurahan
                          ?.toLowerCase()
                          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
                      </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        RT/RW
                      </td>
                      <td className=" px-6">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="">
                <h2 className="font-semibold text-lg text-[#12519E]">
                  Informasi Sub Zona
                </h2>
                <table className="table-fixed w-full text-left text-[#424242] text-poppins">
                  <tbody>
                    <tr className="">
                      <td scope="row" className="">
                        Zona
                      </td>
                      <td className="px-6">{dataPersil.zona}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Sub Zona
                      </td>
                      <td className=" px-6">
                      {dataPersil.sub_zona}
                      </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        -
                      </td>
                      <td className="px-6"> - </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KDB
                      </td>
                      <td className=" px-6">{dataPersil.kdb}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KLB
                      </td>
                      <td className=" px-6">{dataPersil.klb}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KDH
                      </td>
                      <td className=" px-6">{dataPersil.kdh}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KTB
                      </td>
                      <td className=" px-6">{dataPersil.ktb}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Ketinggian
                      </td>
                      <td className=" px-6">{dataPersil.tinggi_m_dummy}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        PSL
                      </td>
                      <td className=" px-6">{dataPersil.psl}</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Tipe
                      </td>
                      <td className=" px-6">{dataPersil.tipe}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-1">
                <h2 className="font-semibold text-lg text-[#12519E]">
                  Informasi Lainnya
                </h2>
                <p className="">Metode Penggambaran</p>
              </div>
            </div>

            <div className="flex justify-evenly items-center font-poppins w-full h-16 mt-auto">
              <button className="border border-[#757575]  text-[#757575] rounded-lg bg-white h-4/5 w-1/3">
                Batal
              </button>
              <button
                className="border rounded-lg bg-[#12519E] text-white h-4/5 w-1/3"
                onClick={handleSubmit}
              >
                Selanjutnya
              </button>
            </div>
          </div>
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
