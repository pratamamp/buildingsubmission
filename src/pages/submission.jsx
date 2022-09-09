import React from "react";
import { useNavigate } from "react-router-dom";

function SubmissionPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/submission/2");
  }

  return (
    <div className="w-full h-[calc(100vh_-_9.5rem)] flex justify-center items-center">
      <div className="w-1/3 h-5/6 bg-white rounded-lg shadow-lg shadow-gray-600 font-poppins">
        <div className="p-10 flex flex-col justify-center h-full">
          <h2 className="font-semibold text-xl">Data Pemohon IMB</h2>
          <p className="text-gray-500">
            Lengkapilah data pemohon imb dibawah ini
          </p>

          <form
            className="mt-20 justify-between flex flex-col items-center h-full"
            onSubmit={handleSubmit}
          >
            <div className="w-full space-y-5">
              <div className="w-full">
                <label htmlFor="name">
                  Nama Pemohon
                  <input
                    type="text"
                    className="p-2 my-2 block w-full border bg-white rounded-md focus:border-gray-600 text-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="name"
                    autoComplete="name"
                  />
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="nik">
                  NIK Pemohon
                  <input
                    type="text"
                    className="p-2 my-2 block w-full border bg-white rounded-md focus:border-gray-600 text-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="nik"
                    autoComplete="nik"
                  />
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="block mb-2 text-gray-500 dark:text-gray-400"
                >
                  Alamat Pemohon
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border focus:border-gray-600 text-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="mt-auto w-full">
              <button
                className="bg-[#12519E] rounded-md text-white w-full py-3 hover:bg-[#06489a]"
                type="submit"
              >
                Selanjutnya
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmissionPage;
