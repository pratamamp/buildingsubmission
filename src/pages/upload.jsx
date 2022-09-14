import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaPencilAlt, FaCloudUploadAlt } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadFiles() {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingFinished, setFinishedLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const timeoutDelay = 90 * 1000;

  function handleNavigation(e) {
    e.preventDefault();
    loadingFinished ? navigate("/submission/4") : "";
  }

  function handleUpload(event) {
    inputRef.current.click();
  }

  async function handleFileChange(event) {
    // const fileObj = event.target.files && event.target.files[0];
    // if (!fileObj) {
    //   return;
    // }

    // const formData = new FormData();

    // formData.append("selectedFile", fileObj);
    // try {
    //   const response = await axios({
    //     method: "post",
    //     url: "/api/upload/file",
    //     data: formData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    // reset file input
    setShowLoading(true);
    // setFinishedLoading(true);
    const interval = setTimeout(() => {
      setFinishedLoading(true);
      clearTimeout(interval);
    }, timeoutDelay);
    event.target.value = null;
  }

  useEffect(() => {}, [loadingFinished]);

  return (
    <div className="w-full h-[calc(100vh_-_9.5rem)] flex justify-center items-center">
      <div className="w-9/12 h-5/6 bg-white rounded-lg shadow-lg shadow-gray-300 font-poppins flex flex-col">
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
            </div>
          </div>

          {/* dropbox */}

          <div className="flex-auto flex m-16">
            <div className="rounded-md bg-white/40 w-full border border-[#0161D5] flex flex-col justify-center items-center">
              {showLoading ? (
                <div>
                  <Player
                    src={"/loading-animation-blue.json"}
                    loop
                    autoplay
                    className=" w-52 h-52"
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
                  />
                </>
              )}
            </div>
          </div>

          {/* end dropbox */}
        </div>

        <div className="w-full flex items-center mt-auto w-full justify-end space-x-4 font-poppins font-semibold text-xs px-16 py-4">
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
