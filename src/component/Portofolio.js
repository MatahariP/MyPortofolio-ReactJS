import { useState } from "react";
import Content from "../component/Content.js";
import icon from "../image/logo/Toolbox.png";

function Portofolio() {
  const url = "https://331469095208424e8daa5550d43a0c3e.api.mockbin.io/";
  const [item, setItems] = useState([]);

  const getDataItem = async () => {
    const response = await fetch(url);
    const dataAllItem = await response.json();
    const dataItem = dataAllItem.portofolio;
    setItems(dataItem);
    // console.log("tes");
  };

  useState(() => {
    getDataItem();
  });
  return (
    <>
      <main className="portofolio">
        <div className="title">
          <img className="icon" src={icon} alt="" />
          <h1>Portofolio</h1>
        </div>
        <br />
        <p className="subTittle"></p>

        <div className="contents">
          <Content data={item} />
        </div>
      </main>
    </>
  );
}

export default Portofolio;
