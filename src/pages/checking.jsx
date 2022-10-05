import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";

import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import LayerList from "@arcgis/core/widgets/LayerList";

function CheckingGPA() {
  const navigate = useNavigate();
  const mapRef = useRef();
  const buildingLayer = new BuildingSceneLayer({
    url: "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Esri_Admin_Building/SceneServer",
    title: "Administration Building, Redlands - Building Scene Layer",
  });
  const webscene = new WebScene({
    portalItem: {
      id: "c7470b0e4e4c44288cf287d658155300",
    },
  });
  webscene.layers.add(buildingLayer);
  const excludedLayer = [];

  useEffect(() => {
    if (mapRef.current) {
      new SceneView({
        map: webscene,
        container: mapRef.current,
      }).when((currentView) => {
        webscene.layers.add(buildingLayer);
        const layerList = new LayerList({
          view: currentView,
        });
        // currentView.ui.empty("top-left");
        currentView.ui.add(layerList, "top-right");

        buildingLayer.when(() => {
          buildingLayer.allSublayers.forEach((layer) => {
            switch (layer.modelName) {
              case "FullModel":
                layer.visible = true;
                break;
              case "Overview":
              case "Rooms":
                layer.visible = false;
                break;
              // Extract the layers that should not be hidden by the slice widget
              case "Doors":
                doorsLayer = layer;
                excludedLayers.push(layer);
                break;
              default:
                layer.visible = true;
            }
          });
        });
      });
    }
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col w-1/4 h-[calc(100vh_-_9.5rem)] bg-gray-50 border-r border-[#D2D2D2]">
        <div className="flex-grow w-full">
          <h2 className="p-4 text-2xl font-poppins font-semibold">
            Pemeriksaan GPA
          </h2>
          <div className="">
            <Accordion />
          </div>
        </div>
        <div className="flex justify-evenly items-center font-poppins w-full h-16 mt-auto my-3">
          <button className="border border-[#757575]  text-[#757575] rounded-lg bg-white h-4/5 w-1/3">
            Batal
          </button>
          <button
            className="border rounded-lg bg-[#12519E] text-white h-4/5 w-1/3"
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>
        </div>
      </div>
      <div className="w-3/4 bg-gray-100">
        <div className="w-full h-[calc(100vh_-_9.5rem)]">
          <div className="w-full h-full" ref={mapRef}></div>
        </div>
      </div>
    </div>
  );
}

export default CheckingGPA;
