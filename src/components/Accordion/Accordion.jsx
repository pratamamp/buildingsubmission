import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout/AccordionLayout";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";

const ketentuan = [
  {
    checked: true,
    title: "Koefisien Dasar Bangunan",
    detail: "KDB GPA 50 <br /> KDB Maksimal 60</p>",
  },
  {
    checked: false,
    title: "Koefisien Lantai Bangunan (KLB)",
    detail: "KLB GPA 40 <br /> KLB Maksimal 50",
  },
  ,
  {
    checked: true,
    title: "Koefisien Dasar Hijau (KDH)",
    detail: "KDH GPA 50 <br /> KDH Maksimal 60",
  },
  {
    checked: true,
    title: "Koefisien Tapak Basement (KTB)",
    detail: "KTB GPA 50 <br /> KTB Maksimal 60",
  },
  {
    checked: false,
    title: "Jumlah Lantai",
    detail: "Jumlah Lantai GPA 50 <br /> Jumlah Lantai Maksimal 60",
  },
  {
    checked: true,
    title: "Tinggi Bangunan",
    detail: "Tinggi GPA 150 <br /> Tinggi Maksimal 200",
  },
  {
    checked: true,
    title: "Sempadan Jalan",
    detail: "GPA 330 <br /> KDH Maksimal 430",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [gpa, setGpa] = useState(null);
  // const gpa = useRef(null);

  useEffect(() => {
    async function fetchGpa() {
      let response = await axios.get(
        "https://services8.arcgis.com/mpSDBlkEzjS62WgX/ArcGIS/rest/services/tabel_hasil_pemeriksaan_GPA/FeatureServer/0/query?where=1%3D1&outFields=*&f=pjson"
      );
      const data = await response.data.features.map((item, key) => [
        item.attributes.Aspek,
        item.attributes.Aspek_label,
        item.attributes.GPA,
        item.attributes.Ketentuan,
        item.attributes.Sesuai,
      ]);
      setGpa(await data);
    }
    fetchGpa();
  }, []);
  return (
    <div className="flex flex-col overflow-hidden h-4/6">
      {/* <AccordionLayout
        title="Ketentuan Pembangunan"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Detail ketentuan 1
      </AccordionLayout>

      <AccordionLayout
        title="Koefisien Dasar Bangunan (KDB)"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <h2>KDB GPA : 50</h2>
        <h2>KDB Maksimal : 60</h2>
      </AccordionLayout> */}

      {gpa && gpa.map((item, key) => (
        <AccordionLayout
          title={item[1]}
          index={key}
          key={key}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          checked={item[4] === "Yes" ? true : false}
        >
          {item[0]} GPA: {item[2].toFixed(2)}<br/>
          {item[0]} Maksimal: {item[3]}
        </AccordionLayout>
      ))}
    </div>
  );
};

export default Accordion;
