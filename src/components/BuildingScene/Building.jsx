import React, { useRef, useEffect } from "react";
import esriConfig from "@arcgis/core/config";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Slice from "@arcgis/core/widgets/Slice";

export function BuildingScene({ className }) {
  esriConfig.apiKey =
    "AAPK4b3895d07794469dbd57a083f1ac4fa52nP3iH2KjKBQ2wRSVFdz17o7vuCF-lo_yMcmcIDhijUKcuRGC_oNSu5JKRBZDjYn";
  const divRef = useRef();
  const persilId = localStorage.getItem("persilId");
  let buildingLayer;
  if (persilId === "30") {
    buildingLayer = new BuildingSceneLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/BIM_model1/SceneServer",
    });
  } else if (persilId === "17") {
    buildingLayer = new BuildingSceneLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/BIM_model2/SceneServer",
    });
  } else if (persilId === "44") {
    buildingLayer = new SceneLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/Upload_SKP_1a/SceneServer",
    });
  } else if (persilId === "184") {
    buildingLayer = new SceneLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/Upload_SKP_2/SceneServer",
    });
  }
  // const buildingLayer =  new BuildingSceneLayer({
  //   // url: "https://tiles.arcgis.com/tiles/mpSDBlkEzjS62WgX/arcgis/rest/services/Gemawang_buildingscenelayer/SceneServer",
  //   url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/BIM_model1/SceneServer",
  //   // title: "Building Scene Layer - Test",
  // });
  const persilFeature = new FeatureLayer({
    url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/KRK_Persil/FeatureServer/3",
  });
  const permenFeature = new FeatureLayer({
    url: "https://jakartasatu.jakarta.go.id/server/rest/services/Peta_OPS_Permen14_2020/Peta_OPS_Permen_14_2020/MapServer/0",
    popupEnabled: true
  })
  const webscene = new WebScene({
    // basemap: "arcgis-topographic",
    portalItem: {
      id: "c7470b0e4e4c44288cf287d658155300",
    },
    layers: [persilFeature, permenFeature],
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
      environment: { lighting: "virtual" },
      container: divRef.current,
    }).when((currentView) => {
      webscene.layers.add(buildingLayer);
      const layerList = new LayerList({
        view: currentView,
      });
      const sliceWidget = new Slice({
        view: currentView,
        // viewModel: {
        //   tiltEnabled: true,
        // },
      });
      currentView.ui.empty("top-left");
      currentView.ui.add(layerList, "top-left");
      currentView.ui.add(sliceWidget, "top-right");
      permenFeature.when(() => {
        permenFeature.popupTemplate = permenFeature.createPopupTemplate()
      })
      buildingLayer.when(() => {
        if (persilId === "44" || persilId === "184") {
          currentView.goTo(buildingLayer.fullExtent)
        }

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
  return <div className={className} ref={divRef}></div>;
}
