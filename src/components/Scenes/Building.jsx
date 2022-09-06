import "@arcgis/core/assets/esri/themes/light/main.css";
import React, { useRef, useEffect } from "react";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import LayerList from "@arcgis/core/widgets/LayerList";

export function BuildingLayer() {
  const divRef = useRef();
  const buildingLayer = new BuildingSceneLayer({
    // url: "https://tiles.arcgis.com/tiles/mpSDBlkEzjS62WgX/arcgis/rest/services/Gemawang_buildingscenelayer/SceneServer",
    url: "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BSL__4326__US_Redlands__EsriAdminBldg_PublicDemo/SceneServer",
    title: "Building Scene Layer - Test",
  });
  const webscene = new WebScene({
    portalItem: {
      id: "c7470b0e4e4c44288cf287d658155300",
    },
  });
  const excludedLayer = [];

  // const map = new Map({
  //   basemap: "topo-vector",
  //   ground: "world-elevation",
  //   layers: [buildingLayer],
  // });
  useEffect(() => {
    new SceneView({
      map: webscene,
      // camera: {
      //   // position: [110.35995, -7.79149, 160],
      //   tilt: 55,
      //   heading: 25,
      // },
      container: divRef.current,
      // extent: {
      //   xmin: 110.36006011574685,
      //   xmax: 110.36031956177732,
      //   ymin: -7.791125818872307,
      //   ymax: -7.790791851033849,
      // },
    }).when((currentView) => {
      webscene.layers.add(buildingLayer);
      const layerList = new LayerList({
        view: currentView,
      });
      currentView.ui.empty("top-left");
      currentView.ui.add(layerList, "top-left");

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
            case "Doors":
              excludedLayer.push(layer);
              break;
            default:
              layer.visible = true;
          }
        });
      });
    });
  }, []);
  return <div className="w-full h-[calc(100vh-2rem)] py-5 my-5" ref={divRef}></div>;
}
