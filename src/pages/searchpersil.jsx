import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPersil() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/submission/2");
  };
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-50 h-[calc(100vh_-_9.5rem)] px-4 flex flex-col text-[#424242] border-r border-[#D2D2D2]">
        <div className="mt-10">
          <h2 className="font-poppins text-2xl font-semibold text-black">
            Pilih Lokasi
          </h2>
          <p className="font-poppins my-2 text-[1rem] text-[#5C5C5C]">
            Pilih Atau Cari Persil Tanah Untuk Pengajuan Melalui Peta Yang
            Tersedia
          </p>
        </div>
        {!select ? (
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
                      <td className=" px-6">Jakarta Selatan</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Kecamatan
                      </td>
                      <td className=" px-6">Pasar Minggu</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Kelurahan
                      </td>
                      <td className=" px-6">Cilandak</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        RT/RW
                      </td>
                      <td className=" px-6">04 / 01</td>
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
                      <td className="px-6">Perumahan (R) </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Sub Zona
                      </td>
                      <td className=" px-6">
                        Perumahan Kepadatan Rendah (R.4)
                      </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Luas Bidang
                      </td>
                      <td className="px-6"> - </td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KDB
                      </td>
                      <td className=" px-6">60</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KLB
                      </td>
                      <td className=" px-6">2.0</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KDH
                      </td>
                      <td className=" px-6">40</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        KTB
                      </td>
                      <td className=" px-6">1</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Ketinggian
                      </td>
                      <td className=" px-6">2 lantai</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        PSL
                      </td>
                      <td className=" px-6">P</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="">
                        Tipe
                      </td>
                      <td className=" px-6">D</td>
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
              <button className="border border-[#757575]  text-[#757575] rounded-lg bg-white h-4/5 w-32">
                Batal
              </button>
              <button
                className="border rounded-lg bg-[#12519E] text-white h-4/5 w-32"
                onClick={handleSubmit}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPersil;
