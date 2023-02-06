import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout/AccordionLayout";

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

      {ketentuan.map((item, key) => (
        <AccordionLayout
          title={item.title}
          index={key}
          key={key}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          checked={item.checked}
        >
          {item.detail}
        </AccordionLayout>
      ))}
    </div>
  );
};

export default Accordion;
