import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

function Gb() {
  const [gbData, setGbData] = useState();
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=cc9f18d38b7344d4925b87b47fe2c8ab"
    )
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);
        setGbData(
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

  const renderGbData = (gbData) => {
    return (
      <Card className="newsCard">
        {gbData &&
          gbData.map((element, i) => {
            return (
              <div className="newsCard" key={i++}>
                {element}
              </div>
            );
          })}
      </Card>
    );
  };

  return (
    <Container>
      Top News from CountryName
      <Row>Rendered data from api will go here</Row>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {renderGbData(gbData)}
    </Container>
  );
}

export default Gb;
