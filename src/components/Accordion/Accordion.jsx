import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout/AccordionLayout";

const ketentuan = [
  {
    title: "Ketentuan Pembangunan",
    detail: "KDB GPA 50",
  },
  {
    title: "Koefisien Dasar Bangunan (KDB)",
    detail: "koefisien dd <br/> line 2",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="flex flex-col overflow-hidden">
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
        >
          {item.detail}
        </AccordionLayout>
      ))}
    </div>
  );
};

export default Accordion;
