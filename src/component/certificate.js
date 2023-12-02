import React, { useState, useEffect } from "react";
import Content from "./Content.js";
import icon from "../image/logo/Certificate.png";

function Certificate() {
  const url = "http://localhost:3000/certificate";
  const [item, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState("All");

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

  useEffect(() => {
    getDataItem("All");
  }, []);

  const handleClick = (value) => {
    setActiveItem(value);
    getDataItem(value);
  };

  return (
    <>
      <main className="certificate">
        <div className="title">
          <img className="icon" src={icon} alt="" />
          <h1>Certificate</h1>
        </div>
        <br />

        <ul className="subMenu">
          <li
            onClick={() => handleClick("All")}
            style={{ backgroundColor: activeItem === "All" ? "#98c5df" : "" }}
          >
            All
          </li>
          <li
            onClick={() => handleClick("Skill")}
            style={{ backgroundColor: activeItem === "Skill" ? "#98c5df" : "" }}
          >
            Skill
          </li>
          <li
            onClick={() => handleClick("Event")}
            style={{ backgroundColor: activeItem === "Event" ? "#98c5df" : "" }}
          >
            Event
          </li>
        </ul>

        <div className="contents">
          <Content data={item} />
        </div>
      </main>
    </>
  );
}

export default Certificate;
