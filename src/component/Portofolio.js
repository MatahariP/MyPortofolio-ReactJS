import { useState } from "react";
import Content from "../component/Content.js";
import icon from "../image/logo/Toolbox.png";

function Portofolio() {
  const url = "http://localhost:3000/portofolio";
  const [item, setItems] = useState([]);

  const getDataItem = async () => {
    const response = await fetch(url);
    const dataItem = await response.json();
    setItems(dataItem);
    console.log("tes");
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
        <p className="subTittle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus
          lacus, hendrerit vel aliquet sed, varius suscipit sem. Cras turpis
          quam, lacinia quis purus vitae, dictum posuere arcu. Fusce id luctus
          lorem. Vestibulum cursus fringilla sem non varius. Praesent nec justo
          vel mi vulputate{" "}
        </p>

        <div className="contents">
          <Content data={item} />
        </div>
      </main>
    </>
  );
}

export default Portofolio;
