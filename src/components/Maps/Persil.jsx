import "@arcgis/core/assets/esri/themes/light/main.css";
import "./persil.css";
import React, { useRef, useEffect } from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Search from "@arcgis/core/widgets/Search";

export const PersilMap = () => {
  esriConfig.apiKey =
    "AAPK4b3895d07794469dbd57a083f1ac4fa52nP3iH2KjKBQ2wRSVFdz17o7vuCF-lo_yMcmcIDhijUKcuRGC_oNSu5JKRBZDjYn";

  const mapRef = useRef(null);
  useEffect(() => {
    const popUpTemplate = {
      title: "Blok: {KODE_BLOK}",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "ZONA",
              label: "Zona",
            },
            {
              fieldName: "SUB_ZONA",
              label: "Sub Zona",
            },
            {
              fieldName: "PSL",
              label: "PSL",
            },
            {
              fieldName: "KDB",
              label: "KDB",
            },
          ],
        },
      ],
    };

    const persilFeature = new FeatureLayer({
      url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/KRK_Persil/FeatureServer/3",
      // url: "https://tataruang.jakarta.go.id/server/rest/services/peta_operasional/Informasi_Rencana_Kota_DKI_Jakarta_View/FeatureServer/3",
      popupTemplate: popUpTemplate,
      outFields: ["*"],
    });

    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
      layers: [persilFeature],
    });
    const view = new MapView({
      map: map,
      center: [106.79752143200005, -6.255], // Longitude, latitude
      zoom: 18, // Zoom level
      container: mapRef.current,
    });

    const search = new Search({
      view: view,
      placeholder: "Cari Lokasi Persil Tanah..."
    });

    view.ui.add(search, "top-right")

    view.on("click", function (event) {
      view.hitTest(event).then(function (response) {
        const attributes = response.results[0].graphic.attributes;
        const persilInfo = {
          zona: attributes.ZONA,
          subZona: attributes.SUB_ZONA,
          KDB: attributes.KDB,
          KLB: attributes.KLB,
          KDH: attributes.KDH,
          KTB: attributes.KTB,
          PSL: attributes.PSL,
          Tipe: attributes.TIPE,
        };
        console.log(attributes);
      });
    });

    return () => {
      view && view.destroy();
    };
  }, []);
  return <div ref={mapRef} className="MapView" />;
};
