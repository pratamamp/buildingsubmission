import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaPencilAlt, FaCloudUploadAlt } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import CounterClockIcon from "../assets/counterclockicon";
import { RiCloseFill } from "react-icons/ri";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function UploadFiles() {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingFinished, setFinishedLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const timeoutDelay = 3 * 1000;

  function handleNavigation(e) {
    e.preventDefault();
    loadingFinished ? navigate("/submission/4") : "";
  }

  function handleUpload(event) {
    inputRef.current.click();
  }

  async function handleFileChange(event) {
    setShowLoading(true);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const formData = new FormData();

    formData.append("file", fileObj);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error(error);
    }
    // reset file input

    // setFinishedLoading(true);
    // const interval = setTimeout(() => {
      setFinishedLoading(true);
      clearTimeout(interval);
    // }, timeoutDelay);
    event.target.value = null;
  }

  function handleCloseButton(e) {
    e.preventDefault();
    const closedBtn = () => document.getElementById("notif").remove();
    closedBtn();
  }
  useEffect(() => {}, [loadingFinished]);

  return (
    <div className="w-full h-[calc(100vh_-_9.5rem)] flex justify-center items-center">
      <div className="w-9/12 bg-white rounded-lg shadow-lg shadow-gray-300 font-poppins flex flex-col">
        <div className="flex flex-grow">
          <div className="w-2/5 m-16">
            <h2 className="font-semibold text-xl">Upload GPA 3D</h2>
            <p className=" text-[#5C5C5C] my-5">
              Sebelum mengupload file . harap perhatikanlah ketentuan file
              dibawah ini
            </p>
            <div className="flex flex-col divide-y mt-10 space-y-2">
              <div className="flex items-center space-x-3 py-3">
                <FaGlobe className="w-6 h-6 text-[#12519E]" />
                <h2 className="text-[#717171]">
                  Sudah dilakukan geo-referensi
                </h2>
              </div>
              <div className="items-center flex space-x-3 py-3">
                <BiTargetLock className="w-6 h-6 text-[#12519E]" />
                <h2 className="text-[#717171]">
                  Menggunakan sistem koordinat wgs 1984
                </h2>
              </div>
              <div className="flex items-center space-x-3 py-3">
                <BsFileEarmarkText className="w-7 h-7 text-[#12519E]" />
                <h2 className="text-[#717171]">
                  Unggah model 3d GPA berbasis BIM dalam format .SKP atau .RVT
                </h2>
              </div>
              <div className="flex items-center space-x-3 py-3">
                <FaPencilAlt className="w-6 h-6 text-[#12519E]" />
                <h2 className="text-[#717171]">Ketentuan lainnya</h2>
              </div>

              <div className="text-xs pt-5">
                <h2 className="font-bold text-sm">Perhatian !</h2>
                <p className="mt-3 text-red-600">
                  Proses pengunggahan model 3D dapat memakan waktu yang cukup
                  lama, sesuai dengan besaran data.​ Anda akan menerima
                  notifikasi dan link untuk menampilkan data via email apabila
                  proses unggah sudah selesai.​
                </p>
              </div>
            </div>
          </div>
          {loadingFinished && (
            <div
              className="absolute top-[45%] left-1/3 w-1/3 rounded-lg bg-white border-2 space-y-3 px-5 pt-4 divide-y-2"
              id="notif"
            >
              <div className="flex items-center space-x-3 justify-between">
                <CounterClockIcon className="text-green-500 w-10" />
                <h2 className="font-bold text-[#424242]">
                  Proses Unggah Model 3D Sedang Berjalan...
                </h2>
                <button type="button" onClick={handleCloseButton}>
                  <RiCloseFill className="w-10 h-10 text-[#9E9E9E]" />
                </button>
              </div>
              <div className="space-y-5">
                <p className="mt-2">Silahkan tunggu beberapa saat.</p>
                <p>
                  Apabila proses unggah sudah selesai, anda akan mendapat
                  notifikasi dan link via email untuk menampilkan data dalam
                  peta 3D.
                </p>
                <p>Anda dapat menutup jendela browser ini.</p>
              </div>
              <div className="w-full flex items-center h-12">
                <div className="relative h-8 w-full">
                  <button
                    className="absolute inset-y-0 right-1 w-16 rounded-md bg-blue-600 text-white"
                    onClick={handleCloseButton}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* dropbox */}
          <div className="flex-auto flex p-16">
            <div className="rounded-md bg-white/40 w-full border border-[#0161D5] flex flex-col justify-center items-center">
              {showLoading ? (
                <div>
                  <Player
                    src={"/loading-animation-blue.json"}
                    loop
                    autoplay
                    className=" w-52 h-52 fill-green-500"
                  />
                  <h2 className="text-center font-poppins">
                    Pengecekan GPA sedang dilakukan.
                    <br />
                    Mohon tunggu sebentar...
                  </h2>
                </div>
              ) : (
                <>
                  <FaCloudUploadAlt className="w-20 h-20 text-sky-500" />
                  <div className="font-poppins text-xs my-5">
                    <p className="text-[#37474F]">
                      <span className="font-bold">
                        Taruh file .SKP atau .RVT disini
                      </span>{" "}
                      atau klik untuk menggunggah
                    </p>
                    <p className="text-[#717171] text-center">
                      Maximum file size 100 MB
                    </p>
                  </div>
                  <button
                    onClick={handleUpload}
                    className="rounded-xl mt-12 border-[#BDBDBD] border p-2 px-5 font-poppins text-[#12519E] font-semibold"
                  >
                    Upload +
                  </button>
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".skp,.rvt"
                  />
                </>
              )}
            </div>
          </div>

          {/* end dropbox */}
        </div>

        <div className="w-full flex items-center justify-end space-x-4 font-poppins font-semibold text-xs px-16 py-4">
          <button className="border border-[#BDBDBD] rounded-lg py-2 w-28 text-[#757575]">
            Batal
          </button>
          <button
            className={`rounded-lg py-2 w-28 border border-[#EEEEEE] ${
              loadingFinished
                ? "bg-[#12519E] text-[#d6e9e2]"
                : "bg-[#EEEEEE] text-[#757575]"
            }`}
            onClick={handleNavigation}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFiles;
