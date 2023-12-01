import { useParams } from "react-router";
import { useState } from "react";
import back from "../image/Left.svg";
// const tagsHandle = (tags) => {
//   return tags.map((tag, index) => <li key={index}>{tag}</li>);
// };

export default function CertificateDetail() {
  const url = "http://localhost:3000/certificate";
  const [item, setItems] = useState([]);
  let { id } = useParams();
  console.log(id);
  const getDataItem = async () => {
    const response = await fetch(url);
    const dataItem = await response.json();
    setItems(dataItem[id - 1]);
    console.log("sasaasa", dataItem[id - 1]);
  };

  useState(() => {
    getDataItem();
  });
  //   console.log(data);
  console.log("sususuusus", item);
  return (
    <>
      <main>
        <a href="/certificate">
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
