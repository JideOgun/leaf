import { useState, useEffect } from "react";

function USA() {

    const [usaData, setUsaData] = useState();

    useEffect(() => {
        fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=2b73bb10711d44cea84aedf0b65c5973"
        )
          .then((response) => response.json())
          .then((data) => {
            setUsaData(data);
          });
      }, []);


    return ( <div>
        USA rocks!
        {console.log(usaData)}
    </div> );
}

export default USA;