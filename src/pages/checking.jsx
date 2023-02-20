import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import { FiShare2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function CheckingGPA() {
  const navigate = useNavigate();
  const [sharePublic, setSharePublic] = useState("shareoff");

  function handleChange(e) {
    setSharePublic(e.target.value);
  }
  const mapRef = useRef();
  /*
  // const buildingLayer = new BuildingSceneLayer({
  //   url: "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Esri_Admin_Building/SceneServer",
  //   title: "Administration Building, Redlands - Building Scene Layer",
  // });
  // const webscene = new WebScene({
  //   portalItem: {
  //     id: "c7470b0e4e4c44288cf287d658155300",
  //   },
  // });


  // webscene.layers.add(buildingLayer);
  // const excludedLayer = [];

  // useEffect(() => {
    // if (mapRef.current) {
    //   new SceneView({
    //     map: webscene,
    //     container: mapRef.current,
    //   }).when((currentView) => {
    //     webscene.layers.add(buildingLayer);
    //     const layerList = new LayerList({
    //       view: currentView,
    //     });
    //     // currentView.ui.empty("top-left");
    //     currentView.ui.add(layerList, "top-right");
    //     buildingLayer.when(() => {
    //       buildingLayer.allSublayers.forEach((layer) => {
    //         switch (layer.modelName) {
    //           case "FullModel":
    //             layer.visible = true;
    //             break;
    //           case "Overview":
    //           case "Rooms":
    //             layer.visible = false;
    //             break;
    //           // Extract the layers that should not be hidden by the slice widget
    //           default:
    //             layer.visible = true;
    //         }
    //       });
    //     });
    //   });
    // }
  // }, []);
  */
  return (
    <div className="flex">
      <div className="flex flex-col w-1/4 h-[calc(100vh_-_9.5rem)] bg-gray-50 border-r border-[#D2D2D2]">
        <div className="flex-grow w-full p-8">
          <h2 className="text-2xl font-poppins font-semibold">
            Hasil Unggahan
          </h2>
          {/* <div className="">
            <Accordion />
          </div> */}
          <p className="font-poppins mt-5 text-[16px]">
            Anda dapat menekan tombol Save Project untuk mengajukan desain 3D
            ini untuk ditinjau kesesuaiannya oleh Dinas Cipta karya, Tata Ruang,
            dan Pertahanan Provinsi DKI Jakarta.
          </p>

          <p className="font-poppins mt-5 text-[16px]">
            Jika tidak, Anda dapat menekan tombol Close untuk menutup Aplikasi.
          </p>
        </div>
        {/* <div className="flex justify-around items-center font-poppins w-full h-16 mt-auto my-3">
          <button className="border border-[#757575] text-[#757575] rounded-lg bg-white h-4/5 w-1/3">
            Tutup
          </button>
          <button
            className="border rounded-lg bg-[#12519E] text-white h-4/5 w-1/3"
            onClick={() => navigate("/")}
          >
            Save Project
          </button>
        </div> */}
      </div>
      <div className="w-3/4 bg-gray-100 relative">
        <div className="w-full h-[calc(100vh_-_9.5rem)]">
          {/* <div className="w-full h-full bg-red-200" ref={mapRef}></div> */}
          {/* MAPVIEW */}
        </div>

        <div className="bg-white rounded-md absolute top-1/3 left-10">
          <div className="flex justify-between items-center p-3">
            <div className="flex space-x-2">
              <FiShare2 className="w-6 h-auto text-[#0748A3]" />
              <h2 className="font-poppins font-semibold">Bagikan</h2>
            </div>
            <IoMdClose className="w-6 h-6 text-[#9E9E9E]" />
          </div>
          <form>
            <div className="border-y-2 p-3 space-y-2">
              <h2 className="font-poppins">
                Apakah anda ingin membagi data yang telah diunggah ke publik ?{" "}
              </h2>

              <div className="space-x-2">
                <input
                  type="radio"
                  value={"shareon"}
                  id="shareyes"
                  checked={sharePublic === "shareon"}
                  onChange={handleChange}
                />
                <label htmlFor="shareyes">Ya, bagikan ke publik</label>
              </div>
              <div className="space-x-2">
                <input
                  type="radio"
                  value={"shareoff"}
                  id="shareno"
                  checked={sharePublic === "shareoff"}
                  onChange={handleChange}
                />
                <label htmlFor="shareyes">Tidak, buat data saya private</label>
              </div>
            </div>

            <div className="w-full flex items-center justify-end space-x-4 font-poppins font-semibold text-xs py-3 px-2">
              <button className="border border-[#BDBDBD] rounded-lg py-2 w-28 text-[#757575]">
                Tutup
              </button>
              <button
                className={`border rounded-lg bg-[#12519E] text-white py-2 w-28 `}
              >
                Simpan Proyek
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckingGPA;
