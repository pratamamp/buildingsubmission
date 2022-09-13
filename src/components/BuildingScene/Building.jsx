import "@arcgis/core/assets/esri/themes/light/main.css";
import React, { useRef, useEffect } from "react";
import esriConfig from "@arcgis/core/config";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export function BuildingScene({className}) {
  esriConfig.apiKey =
    "AAPK4b3895d07794469dbd57a083f1ac4fa52nP3iH2KjKBQ2wRSVFdz17o7vuCF-lo_yMcmcIDhijUKcuRGC_oNSu5JKRBZDjYn";
  const divRef = useRef();
  const buildingLayer = new BuildingSceneLayer({
    url: "https://tiles.arcgis.com/tiles/mpSDBlkEzjS62WgX/arcgis/rest/services/Gemawang_buildingscenelayer/SceneServer",
    // url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/Rusun_GemawangBlokAGROUND/SceneServer",
    // title: "Building Scene Layer - Test",
  });
  const persilFeature = new FeatureLayer({
    url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/KRK_Persil/FeatureServer/3",
  });
  const webscene = new WebScene({
    // basemap: "arcgis-topographic"
    portalItem: {
      id: "c7470b0e4e4c44288cf287d658155300",
    },
    layers: [persilFeature],
  });
  const excludedLayer = [];
  useEffect(() => {
    new SceneView({
      map: webscene,
      camera: {
        position: [106.79752143200005, -6.255, 160],
        tilt: 55,
        heading: 25,
      },
      container: divRef.current,
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
              layer.visible = false;
              currentView.goTo(layer.fullExtent);
              break;
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
  return (
    <div className={className} ref={divRef}></div>
  );
}