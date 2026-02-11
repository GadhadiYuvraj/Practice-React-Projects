// Single Select Accordion Component

import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItems) => (
              <div className="item" key={dataItems.id}>
                <div className="title">
                  <h3> {dataItems.question}</h3>
                  <span>+</span>
                </div>
              </div>
            ))
          ) : (
            <div> data not found </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
