import React from "react";
import { useState } from "react";
import Content from "./Content.js";
import icon from "../image/logo/Certificate.png";

function Certificate() {
  const url = "http://localhost:3000/certificate";
  const [item, setItems] = useState([]);

  const getDataItem = async (value) => {
    const response = await fetch(url);

    const dataItem = await response.json();
    if (value === "All") {
      console.log("all", dataItem);
      setItems(dataItem);
    } else {
      let filterItem = [];
      let y = 0;
      for (let i = 0; i < dataItem.length; i++) {
        console.log(dataItem[i].category);
        if (dataItem[i].category === value) {
          console.log("prosess filter", dataItem[i].category);
          filterItem[y] = dataItem[i];
          console.log("done filter");
          y++;
        }
      }
      console.log("Filter", value, filterItem);
      setItems(filterItem);
    }
  };

  useState(() => {
    getDataItem("All");
  });

  return (
    <>
      <main className="certificate">
        <div className="title">
          <img className="icon" src={icon} alt="" />
          <h1>Certificate</h1>
        </div>
        <br />

        <ul className="subMenu">
          <li onClick={(event) => getDataItem("All")}>All</li>
          <li onClick={(event) => getDataItem("Skill")}>Skill</li>
          <li onClick={(event) => getDataItem("Event")}>Event</li>
        </ul>

        <div className="contents">
          <Content data={item} />
        </div>
      </main>
    </>
  );
}

export default Certificate;
