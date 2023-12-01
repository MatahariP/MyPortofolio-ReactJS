import { Link } from "react-router-dom";

const tagsHandle = (tags) => {
  return tags.map((tag, index) => <li key={index}>{tag}</li>);
};
const limitText = (text, limit) => {
  const words = text.split(" ");
  const limitedWords = words.slice(0, limit);
  const limitedText = limitedWords.join(" ");
  if (words.length > limit) {
    return limitedText + " ...";
  } else {
    return limitedText;
  }
};
export default function Content({ data }) {
  return (
    <>
      {data.map((eachItem) => {
        return (
          <div
            className="content"
            key={eachItem.id}
            style={{ backgroundImage: `url(${eachItem.image})` }}
          >
            <Link
              to={{
                pathname: `./${eachItem.id}`,
              }}
            >
              <div className="contentTittle">
                <p>{eachItem.tittle}</p>
              </div>
              <div className="contentText">
                <p>{limitText(eachItem.subTittle, 10)}</p>
                <ul className="tag">{tagsHandle(eachItem.tags)} </ul>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
