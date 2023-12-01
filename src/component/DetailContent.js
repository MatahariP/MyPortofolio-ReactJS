import { useParams, useLocation } from "react-router-dom";

export default function DetailContent() {
  let { id } = useParams();
  let location = useLocation();
  console.log(id);
  return (
    <>
      <br />
      <br />
      <h1>Bisa dong</h1>
    </>
  );
}
