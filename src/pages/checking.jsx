import React, {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import {BuildingScene} from "../components/BuildingScene/Building";

import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Editor from "@arcgis/core/widgets/Editor.js";

function CheckingGPA() {
    const navigate = useNavigate();
    const mapRef = useRef();

    const glbName = localStorage.getItem("glbFilename")

    const pointLayer = new FeatureLayer({
        url: "https://demo.esriindonesia.co.id/arcgis/rest/services/Hosted/KoordinatGedung_1/FeatureServer/0",
        renderer: {
            type: "simple",  // autocasts as new SimpleRenderer()
            symbol: {
                type: "point-3d",
                symbolLayers: [
                    {
                        type: "object",
                        // height: 1000,
                        resource: {
                            href: `http://localhost:8000/files/${glbName}`
                        }
                    }
                ],
            }
        }
    });
    const webscene = new WebScene({
        portalItem: {
            id: "c7470b0e4e4c44288cf287d658155300",
        },
    });
    webscene.layers.add(pointLayer);
    const excludedLayer = [];

    useEffect(() => {
        if (mapRef.current) {
            new SceneView({
                map: webscene,
                container: mapRef.current,
                camera: {
                    position: [106.79752143200005, -6.255, 160],
                    tilt: 55,
                    heading: 25,
                },
                environment: { lighting: "virtual" },
            }).when((currentView) => {
                const layerList = new LayerList({
                    view: currentView,
                });
                // currentView.ui.empty("top-left");
                currentView.ui.add(layerList, "top-right");
                pointLayer.when(() => {
                    currentView.goTo(pointLayer.fullExtent)
                })
                const editor = new Editor({
                    view: view,
                })
                currentView.ui.add(editor, "top-right");
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
                        {/*<Accordion />*/}
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
