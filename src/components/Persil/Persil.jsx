import "@arcgis/core/assets/esri/themes/light/main.css";
import React, { useRef, useEffect } from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Search from "@arcgis/core/widgets/Search";
import Editor from "@arcgis/core/widgets/Editor";

export const PersilMap = ({ className, setDataPersil }) => {
  esriConfig.apiKey =
    "AAPK4b3895d07794469dbd57a083f1ac4fa52nP3iH2KjKBQ2wRSVFdz17o7vuCF-lo_yMcmcIDhijUKcuRGC_oNSu5JKRBZDjYn";

  const mapRef = useRef(null);
  useEffect(() => {
    const persilFeature = new FeatureLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/KRK_Persil/FeatureServer/3",
      // url: "https://tataruang.jakarta.go.id/server/rest/services/peta_operasional/Informasi_Rencana_Kota_DKI_Jakarta_View/FeatureServer/3",
      outFields: ["*"],
    });
    const permenFeature = new FeatureLayer({
      url: "https://jakartasatu.jakarta.go.id/server/rest/services/Peta_OPS_Permen14_2020/Peta_OPS_Permen_14_2020/MapServer/0"
    })
    const locationFeature = new FeatureLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/KoordinatGedung_1/FeatureServer/0",
    });

    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
      layers: [permenFeature, persilFeature, locationFeature],
    });
    const view = new MapView({
      map: map,
      center: [106.79752143200005, -6.255], // Longitude, latitude
      zoom: 18, // Zoom level
      container: mapRef.current,
    });

    const search = new Search({
      view: view,
      placeholder: "Cari Lokasi Persil Tanah...",
    });

    const editor = new Editor({
      view: view,
      allowedWorkflows: "create",
      snappingOptions: {
        enabled: false,
        featureSources: [{ layer: locationFeature }],
        featureEnabled: false,
        selfEnabled: false,
      },
      layerInfos: [
        {
          layer: locationFeature, // pass in the feature layer,
          enabled: true, // default is true, set to false to disable editing functionality
          addEnabled: true, // default is true, set to false to disable the ability to add a new feature
          updateEnabled: true, // default is true, set to false to disable the ability to edit an existing feature
          deleteEnabled: true, // default is true, set to false to disable the ability to delete features
        },
        {
          layer: persilFeature, // pass in the feature layer,
          enabled: false,
        },
      ],
    });
    view.ui.add(search, "top-right");
    view.ui.add(editor, "bottom-right");

    let selectedHighlight;

    view.on("click", function (event) {
      view.hitTest(event).then(function (response) {
        const attributes = response.results[0].graphic.attributes;
        setDataPersil(attributes);
        view.whenLayerView(persilFeature).then((layerView) => {
          if (selectedHighlight) {
            selectedHighlight.remove();
          }
          selectedHighlight = layerView.highlight(attributes?.objectid);
        });
      });
    });

    return () => {
      view && view.destroy();
    };
  }, []);
  return <div ref={mapRef} className={className} />;
};
