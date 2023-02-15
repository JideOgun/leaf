import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

function Categories() {
  const [loading, setLoading] = useState(true);
  const [usaData, setUsaData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=cc9f18d38b7344d4925b87b47fe2c8ab"
    )
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        setUsaData(
          info.articles.map((e) => {
            return e["author"];
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (
    <Container>
  
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      Categories
    </Container>
  );
}

export default Categories;
