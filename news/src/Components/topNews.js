import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

function TopNews() {
    const [gbData, setGbData] = useState();
    const [usaData, setUsaData] = useState();



    useEffect(() => {
        fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=cc9f18d38b7344d4925b87b47fe2c8ab"
        )
          .then((response) => response.json())
          .then((data) => {
            setGbData(data);
          });
      }, []);

      useEffect(() => {
        fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=cc9f18d38b7344d4925b87b47fe2c8ab"
        )
          .then((response) => response.json())
          .then((data) => {
            setUsaData(data);
          });
      }, []);

      const renderGbData = () => {
        gbData.map((element) => {
            return (<Col>
            <Card>

                gbData will go here
            </Card>
            </Col>)
        })
      }


  return <Container>Top News from CountryName
  <Row>
      Rendered data from api will go here
  </Row>
  
  
  </Container>;
}

export default TopNews;
