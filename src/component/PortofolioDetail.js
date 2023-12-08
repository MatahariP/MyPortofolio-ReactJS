import { useParams } from "react-router";
import { useState } from "react";
import back from "../image/Left.svg";
// const tagsHandle = (tags) => {
//   console.log(tags);
//   return Object.entries(tags).map(([key, value]) => <li key={key}>{value}</li>);
// };

export default function PortofolioDetail() {
  const url = "https://331469095208424e8daa5550d43a0c3e.api.mockbin.io/";
  const [item, setItems] = useState([]);
  let { id } = useParams();
  console.log(id);
  const getDataItem = async () => {
    const response = await fetch(url);
    const dataItem = await response.json();
    setItems(dataItem.portofolio[id - 1]);
  };

  useState(() => {
    getDataItem();
  });
  //   console.log(data);
  // console.log("sususuusus", item);
  return (
    <>
      <main>
        <a href="/portofolio">
          <img className="back" src={back} alt="back" />
        </a>
        <div className="DetailContent">
          <h1>{item.tittle}</h1>
          <img src={item.image} alt={item.tittle} />
          <p>{item.subTittle}</p>
          {/* <ul className="tag">{tagsHandle(item.tags)} </ul> */}
        </div>
      </main>
    </>
  );
}
