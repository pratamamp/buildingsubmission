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
      <div className="w-1/3 h-5/6 bg-white rounded-lg shadow-lg shadow-gray-600 p-9 font-poppins">
        <h2 className="font-semibold text-lg">Data Pemohon IMB</h2>
        <p className="text-xs text-gray-500">
          Lengkapilah data pemohon imb dibawah ini
        </p>

        <form
          className="mt-10 justify-between flex flex-col items-center text-xs space-y-2"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label htmlFor="name">
              Nama Pemohon
              <input
                type="text"
                className="p-2 my-2 block w-full border bg-white rounded-md focus:border-gray-600 text-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                name="name"
                autoComplete="name"
                minLength="4"
                required
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
                minLength="4"
                required
              />
            </label>
          </div>
          <div className="w-full">
            <label htmlFor="nik">
              Alamat Pemohon
              <textarea
                className="p-2 my-2 block w-full border bg-white rounded-md focus:border-gray-600 text-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                name="address"
                autoComplete="address"
                minLength="4"
                required
              />
            </label>
          </div>
          <button
            className="bg-blue-700 rounded-md text-white w-full py-2 hover:bg-blue-600"
            type="submit"
          >
            Selanjutnya
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmissionPage;
