import React from "react";
import { FaGlobe, FaPencilAlt } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { ImCloudUpload } from "react-icons/im";

function UploadFiles() {
  return (
    <div className="w-full h-[calc(100vh_-_9.5rem)] flex justify-center items-center">
      <div className="flex justify-around w-11/12 h-5/6 bg-white rounded-lg shadow-lg shadow-gray-300 font-poppins">
        <div className="m-10 mr-28 w-1/4 font-poppins">
          <h2 className="font-semibold text-lg">Upload GPA 3D</h2>
          <p className="text-xs text-[#5C5C5C] my-3">
            Sebelum mengupload file . harap perhatikanlah ketentuan file dibawah
            ini
          </p>
          <div className="flex flex-col divide-y text-xs mt-10">
            <div className="flex items-center h-10 space-x-3">
              <FaGlobe className="w-4 h-4 text-[#12519E]" />
              <h2 className="text-[#717171]">Sudah dilakukan geo-referensi</h2>
            </div>
            <div className="items-center flex h-10 space-x-3">
              <BiTargetLock className="w-4 h-4 text-[#12519E]" />
              <h2 className="text-[#717171]">
                Menggunakan sistem koordinat wgs 1984
              </h2>
            </div>
            <div className="flex items-center h-10 space-x-3">
              <BsFileEarmarkText className="w-4 h-4 text-[#12519E]" />
              <h2 className="text-[#717171]">
                Unggah model 3d GPA berbasis BIM dalam format .SKP atau .RVT
              </h2>
            </div>
            <div className="flex items-center h-10 space-x-3">
              <FaPencilAlt className="w-4 h-4 text-[#12519E]" />
              <h2 className="text-[#717171]">Ketentuan lainnya</h2>
            </div>
          </div>
        </div>
        <div className=" border rounded-md border-[#0161D5] flex-auto flex flex-col justify-center bg-[#FAFCFE] m-10 items-center">
          <ImCloudUpload className="w-20 h-20 mb-5 text-[#0161D5]" />
          <p className="font-poppins text-xs text-[#37474F]">
            <span className="font-bold">Taruh file .SKP atau .RVT disini</span>{" "}
            atau klik untuk menggunggah
          </p>
          <p className="font-poppins text-xs text-[#717171]">
            Maximum file size 100 MB
          </p>
          <button className="mt-20 rounded-lg border-[#BDBDBD] border p-2 font-poppins text-xs text-[#12519E] font-semibold">
            Upload +
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFiles;
