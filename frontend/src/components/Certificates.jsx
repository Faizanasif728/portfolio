import React, { useState } from "react";
import { SectionWrapper } from "../hoc";

import matric_001 from "../assets/certificates/matric_001.png";
import inter_002 from "../assets/certificates/inter_002.png";
import domicile_003 from "../assets/certificates/domicile_003.png";
import city_school_004 from "../assets/certificates/city_school_004.png";
import Shalimar_clg_005 from "../assets/certificates/Shalimar_clg_005.png";
import Meta_006 from "../assets/certificates/Meta_006.png";
import digital_007 from "../assets/certificates/digital_007.jpg";
import ks_008 from "../assets/certificates/ks_008.png";
import ue_camp_009 from "../assets/certificates/ue_camp_009.png";
import ue_conf_010 from "../assets/certificates/ue_conf_010.png";
// import BSIT_ComingSoon from "../assets/certificates/BSIT_ComingSoon.jpg";
const certificates = [
  { title: "Matriculation, BISE Lahore Board (2016-2018)", image: matric_001, orientation: "horizontal" },
  { title: "Intermediate, BISE Lahore Board (2018-2020)", image: inter_002, orientation: "horizontal" },
  { title: "Certificate of Domicile (2020)", image: domicile_003, orientation: "horizontal" },
  { title: "Character Certificate From City District Govt. Boys High School, Lahore", image: city_school_004, orientation: "horizontal" },
  { title: "Character Certificate From Government Shalimar College, Lahore", image: Shalimar_clg_005, orientation: "horizontal" },
  { title: "Frontend Development Certificate From Meta (2023)", image: Meta_006, orientation: "horizontal" },
  { title: "Digital Marketing Certificate From AR Software Agency (2023)", image: digital_007, orientation: "horizontal" },
  { title: "MERN Stack Bootcamp Certificate From Knowledge Streams (2024)", image: ks_008, orientation: "horizontal" },
  { title: "Certificate of HTML, CSS, JS From MLSA, University of Education (2022)", image: ue_camp_009, orientation: "horizontal" },
  { title: "RACSIT International Conference, University of Education (2024)", image: ue_conf_010, orientation: "horizontal" },
  { title: "BSIT, University of Education (2021-2025)", orientation: "horizontal" },
];

const Certificates = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 px-2 sm:px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
      <div className="space-y-4">
        {certificates.map((cert, idx) => (
          <div key={cert.title} className="">
            <button
              className="w-full text-left px-6 py-4 font-semibold text-lg border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ background: 'none' }}
              onClick={() => handleToggle(idx)}
            >
              {cert.title}
            </button>
            {openIndex === idx && (
              <div className="flex justify-center py-6">
                {cert.title === "BSIT, University of Education (2021-2025)" ? (
                  <span className="text-2xl font-bold text-gray-500">COMING SOON!</span>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className={
                      cert.orientation === "vertical"
                        ? "h-[420px] w-auto object-contain shadow-lg border border-gray-200 rounded-lg"
                        : "w-full max-w-3xl h-auto object-contain shadow-lg border border-gray-200 rounded-lg"
                    }
                    style={{ background: 'none' }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates"); 