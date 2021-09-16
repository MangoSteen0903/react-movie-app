import { useEffect } from "react";

function Detail({ location, history }) {
  useEffect(() => {
    if (!location.state) {
      history.push("/");
    }
  });
  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
}
export default Detail;
