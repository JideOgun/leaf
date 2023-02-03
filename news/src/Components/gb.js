import { useEffect, useState } from "react";

function GB() {
  const [gbData, setGbData] = useState();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=2b73bb10711d44cea84aedf0b65c5973"
    )
      .then((response) => response.json())
      .then((data) => {
        setGbData(data);
      });
  }, []);

  return <div> Great Britain
  {console.log(gbData)}</div>;
}

export default GB;
